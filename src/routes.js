// Dependencies
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';


// views
import Login from './views/login';
import Register from './views/register';

// Menu - drawer 
//import Item1 from './views/item1';
import Item2 from './views/item2';
import Item3 from './views/item3';

// Menu - tabs
import Menu1 from './views/menu1';
import Menu2 from './views/menu2';

// Custom Drawer Component
import CustomDrawerComponents from './components/customDrawerComponents';
import CustomTitleComponents from './components/customTitleComponent';

const Dashboard =
    createAppContainer(
        createDrawerNavigator(
            {
                Item1: {// crear menu tipo pestaña
                    screen: createMaterialTopTabNavigator(
                        {
                            Home: {
                                screen: Menu1,
                                navigationOptions: {
                                    tabBarIcon: () => <Icon name="home" size={30} color="#fff" />
                                }
                            },
                            Profile: {
                                screen: Menu2,
                                navigationOptions: {
                                    tabBarIcon: () => <Icon name="person" size={30} color="#fff" />
                                }
                            }
                        },
                        {
                            tabBarOptions: {
                                indicatorStyle: {
                                    backgroundColor: '#fff',
                                },
                                style: {
                                    backgroundColor: '#bb9661',
                                },
                                showIcon: true,
                                showLabel: true,
                            }
                        }
                    ),
                    navigationOptions: {
                        drawerIcon: () => <Icon name="person" size={20} color="#bb9661" />
                    }
                },
                Item2: {
                    screen: Item2,
                    navigationOptions: {
                        drawerIcon: () => <Icon name="person" size={20} color="#bb9661" />
                    }
                },
                Item3: {
                    screen: Item3,
                    navigationOptions: {
                        drawerIcon: () => <Icon name="person" size={20} color="#bb9661" />
                    }
                }
            },
            {
                initialRouteName: 'Item1',
                contentComponent: CustomDrawerComponents,
            }
        )
    );

const Routes =
    createAppContainer(
        createSwitchNavigator(
            {
                Auth: createStackNavigator(
                    {
                        Login: {
                            screen: Login
                        },
                        Register: {
                            screen: Register
                        },
                    },
                    {
                        initialRouteName: 'Login',
                    }
                ),
                App: createStackNavigator(
                    {
                        Dashboard: {
                            screen: Dashboard
                        }
                    }, {
                        defaultNavigationOptions:  {
                            header: CustomTitleComponents
                        }
                    }),
            },
            {
                initialRouteName: 'App'
            }

        )
    );
export default Routes;