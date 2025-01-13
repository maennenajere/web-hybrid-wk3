import React from 'react';
import { Appbar } from 'react-native-paper';

const Bar = ({ navigation, back }) => (
    <Appbar.Header>
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content title="NAV DEMO" />
        {!back ? (
            <Appbar.Action
                icon="arrow-right"
                onPress={() => navigation.navigate('SecondScreen')}
            />
        ) : null}
    </Appbar.Header>
);

export default Bar;
