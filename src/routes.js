// Dependencies
import React from 'react';
import { createStackNavigator, createMaterialTopTabNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

// views
import HomeScreen from './views/home';

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

export const Routes = createAppContainer(
    createStackNavigator(
        {
            Home: {
                screen: HomeScreen,
                navigationOptions: () => ({
                    header: null,
                }),
            },
            Dasboard: {// para crear un menu tipo slider
                screen: createDrawerNavigator(
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
                        contentComponent: CustomDrawerComponents
                    }
                ), //cabecera del menu
                navigationOptions: () => ({
                    title: 'Dashboard',
                    header: CustomTitleComponents,
                })
            },
        },
        {
            initialRouteName: 'Home',
        }
    )
);