// Dependencies
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


function Item2(props) {
    return (
        <View style={styles.container}>
            <Text>item2</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Item2;