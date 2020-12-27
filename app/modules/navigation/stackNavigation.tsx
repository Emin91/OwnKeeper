import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainView } from '../../views/test';

const Stack = createStackNavigator();

export const StackMainNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="MainView" >
            <Stack.Screen name="MainView" component={MainView} options={{ headerShown: false }} />
        </Stack.Navigator >
    );
};
