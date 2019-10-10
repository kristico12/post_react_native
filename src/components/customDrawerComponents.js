import React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { Grid, Row } from 'react-native-easy-grid';
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const CustomDrawerContentComponent = (props) => (
    <Grid>
        <Row size={20} style={styles.containerTopImg}>
            <Image source={require('../img/title.png')} />
        </Row>
        <Row size={60}>
            <ScrollView>
                <SafeAreaProvider>
                    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                        <DrawerNavigatorItems {...props} />
                    </SafeAreaView>
                </SafeAreaProvider>
            </ScrollView>
        </Row>
        <Row size={20} style={styles.footerContainer}>
            <Image style={styles.footerImg} source={require('../img/footer.png')} />
        </Row>
    </Grid>
);

const styles = StyleSheet.create({
    containerTopImg: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    itemMenu: {
        padding: "3em",
        fontSize: 50
    },
    footerContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    footerImg: {
        width: 80,
        height: 120
    }
});

export default CustomDrawerContentComponent;