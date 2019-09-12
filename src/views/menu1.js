// Dependencies
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';


function Menu1(props) {
    return (
        <View style={styles.container}>
            <Text>menu1</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

const mapStateToProps = state => ({ auth: state.Auth })

export default connect(mapStateToProps, null)(Menu1);