// Dependencies
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { DrawerActions } from 'react-navigation';
import { Grid, Col } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/MaterialIcons';

const style = StyleSheet.create({
    container: {
        elevation: 10,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    contentMenu: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        width: 198,
        height: 45
    }
})

function CustomTitleComponent(props) {
    const navigation = props.navigation;
    return (
        <View style={style.container}>
            <Grid>
                <Col
                    size={1}
                >
                    <TouchableOpacity
                        style={style.contentMenu}
                        onPress={() => {
                            navigation.dispatch(
                                props.scene.route.isDrawerOpen ? DrawerActions.closeDrawer() : DrawerActions.openDrawer()
                            );
                        }}
                    >
                        <Icon name="dehaze" size={45} color="#bb9661" />
                    </TouchableOpacity>
                </Col>
                <Col size={3} style={style.contentTitle}>
                    <Image style={style.title} source={require('../img/title.png')} />
                </Col>
            </Grid>
        </View>
    );
}

export default CustomTitleComponent;