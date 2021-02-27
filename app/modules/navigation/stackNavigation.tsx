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
import { PinCodeView } from '../../views/pinCodeView';

const Stack = createStackNavigator();

export const StackGeneratorNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="GeneratorView" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="GeneratorView" component={GeneratorView} />
        </Stack.Navigator>
    );
};

export const StackCardsNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="CardView" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="CardView" component={CardView} />
            <Stack.Screen name="AddAndEditCardView" component={AddAndEditCardView} />
            <Stack.Screen name="CardItemFullPreview" component={CardItemFullPreview} />
        </Stack.Navigator>
    );
};

export const StackDataNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="DataView" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DataView" component={DataView} />
            <Stack.Screen name="AddAndEditAccountView" component={AddAndEditAccountView} />
            <Stack.Screen name="DataItemFullPreview" component={DataItemFullPreview} />
        </Stack.Navigator>
    );
};

export const StackNotesNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="NotesView" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="NotesView" component={NotesView} />
        </Stack.Navigator>
    );
};

export const StackSettingsNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="SettingsView" screenOptions={{headerShown: false}}>
            <Stack.Screen name="SettingsView" component={SettingsView} />
        </Stack.Navigator>
    );
};

export const StackAuthNavigator: FC = () => {
    return (
        <Stack.Navigator initialRouteName="PinCodeView" screenOptions={{headerShown: false}}>
            <Stack.Screen name="PinCodeView" component={PinCodeView} />
        </Stack.Navigator>
    );
};
