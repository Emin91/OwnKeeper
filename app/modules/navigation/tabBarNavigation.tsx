import React, { FC, useContext } from 'react';
import { View } from 'react-native';
import { LocalizationContext } from '../language';
import { CustomTabBar } from './customTabBar';
import { CardIcon } from '../../assets/svg/tabBarIcons/cardIcon';
import { DataIcon } from '../../assets/svg/tabBarIcons/dataIcon';
import { NoteIcon } from '../../assets/svg/tabBarIcons/noteIcon';
import { SettingsIcon } from '../../assets/svg/tabBarIcons/settingsIcon';
import { GeneratorIcon } from '../../assets/svg/tabBarIcons/generatorIcon';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StackCardsNavigator, StackDataNavigator, StackGeneratorNavigator, StackNotesNavigator, StackSettingsNavigator } from './stackNavigation';

const Tab = createMaterialTopTabNavigator();

export const TabNavigator: FC = () => {
    const { t }: any = useContext(LocalizationContext);

    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator swipeEnabled={false} tabBarPosition='bottom' initialRouteName="DataTabView" tabBar={(props) => <CustomTabBar {...props} />}>
                <Tab.Screen name="GeneratorTabView" component={StackGeneratorNavigator} options={{ tabBarLabel: t('generatorTab'), tabBarIcon: ({ color }) => <GeneratorIcon color={color} /> }} />
                <Tab.Screen name="CardTabView" component={StackCardsNavigator} options={{ tabBarLabel: t('cardTab'), tabBarIcon: ({ color }) => <CardIcon color={color} /> }} />
                <Tab.Screen name="DataTabView" component={StackDataNavigator} options={{ tabBarLabel: t('dataTab'), tabBarIcon: ({ color }) => <DataIcon color={color} /> }} />
                <Tab.Screen name="NoteTabView" component={StackNotesNavigator} options={{ tabBarLabel: t('noteTab'), tabBarIcon: ({ color }) => <NoteIcon color={color} /> }} />
                <Tab.Screen name="SettingsTabView" component={StackSettingsNavigator} options={{ tabBarLabel: t('settingsTab'), tabBarIcon: ({ color }) => <SettingsIcon color={color} /> }} />
            </Tab.Navigator>
        </View>
    );
};
