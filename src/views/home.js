// Dependencies
import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen(props) {
    return (
        <View>
            <Text>home 1</Text>
            <Button
                title="Ir a home2"
                onPress={() => props.navigation.navigate('Dasboard')}
            />
        </View>
    )
}
export default HomeScreen;