// Dependencies
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


function Item3(props) {
    return (
        <View style={styles.container}>
            <Text>item3</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Item3;