import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

const HomeScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate('SecondScreen')}>
            <Text>HOME SCREEN</Text>
        </Pressable>
        <Button title="SECOND SCREEN" onPress={() => navigation.navigate('SecondScreen')} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default HomeScreen;