import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GeneratorView } from '../../views/generatorView';

const Stack = createStackNavigator();

export const StackMainNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="Generator">
            <Stack.Screen name="Generator" component={GeneratorView} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
