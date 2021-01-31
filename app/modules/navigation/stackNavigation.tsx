import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CardItemFullPreview } from '../../views/cardItemFullPreview';
import { DataItemFullPreview } from '../../views/dataItemFullPreview';
import { AddAndEditAccountView } from '../../views/addAndEditAccount';
import { AddAndEditCardView } from '../../views/addAndEditCardView';
import { GeneratorView } from '../../views/generatorView';
import { SettingsView } from '../../views/settingsView';
import { NotesView } from '../../views/notesView';
import { DataView } from '../../views/dataView';
import { CardView } from '../../views/cardView';

const Stack = createStackNavigator();

export const StackGeneratorNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="GeneratorView">
            <Stack.Screen name="GeneratorView" component={GeneratorView} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export const StackCardsNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="CardView">
            <Stack.Screen name="CardView" component={CardView} options={{ headerShown: false }} />
            <Stack.Screen name="AddAndEditCardView" component={AddAndEditCardView} options={{ headerShown: false }} />
            <Stack.Screen name="CardItemFullPreview" component={CardItemFullPreview} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export const StackDataNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="DataView">
            <Stack.Screen name="DataView" component={DataView} options={{ headerShown: false }} />
            <Stack.Screen name="AddAndEditAccountView" component={AddAndEditAccountView} options={{ headerShown: false }} />
            <Stack.Screen name="DataItemFullPreview" component={DataItemFullPreview} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export const StackNotesNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="NotesView">
            <Stack.Screen name="NotesView" component={NotesView} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export const StackSettingsNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="SettingsView">
            <Stack.Screen name="SettingsView" component={SettingsView} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
