import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import SecondScreen from './Screens/SecondScreen';
import Bar from './Components/Bar';

const Stack = createNativeStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={({ navigation, route }) => ({
                header: (props) => <Bar {...props} navigation={navigation} />,
            })}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="SecondScreen" component={SecondScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;
