import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SecondScreen = () => (
    <View style={styles.container}>
        <Text>SECOND SCREEN</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SecondScreen;
