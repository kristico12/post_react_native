// Dependencies
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


function Item1(props) {
    return (
        <View style={styles.container}>
            <Text>item1</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Item1;