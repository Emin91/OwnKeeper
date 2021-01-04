import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GeneratorView } from '../../views/generatorView';
import { CardView } from '../../views/cardView';
import { AddAndEditCardView } from '../../views/addAndEditCardView';

const Stack = createStackNavigator();

export const StackGeneratorNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="Generator">
            <Stack.Screen name="Generator" component={GeneratorView} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export const StackCardsNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="CardView">
            <Stack.Screen name="CardView" component={CardView} options={{ headerShown: false }} />
            <Stack.Screen name="AddAndEditCardView" component={AddAndEditCardView} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
export const StackDataNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="Generator">
            <Stack.Screen name="Generator" component={GeneratorView} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
export const StackNotesNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="Generator">
            <Stack.Screen name="Generator" component={GeneratorView} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
export const StackSettingsNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="Generator">
            <Stack.Screen name="Generator" component={GeneratorView} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
