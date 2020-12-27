import React, { FC } from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MainView } from '../../views/test';
import { GeneratorIcon } from '../../assets/svg/tabBarIcons/generatorIcon';
import { CardIcon } from '../../assets/svg/tabBarIcons/cardIcon';
import { DataIcon } from '../../assets/svg/tabBarIcons/dataIcon';
import { NoteIcon } from '../../assets/svg/tabBarIcons/noteIcon';
import { SettingsIcon } from '../../assets/svg/tabBarIcons/settingsIcon';
import { CustomTabBar } from './customTabBar';
import { language } from '../language';

const Tab = createMaterialTopTabNavigator();

export const TabNavigator: FC = () => {
    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator tabBarPosition='bottom' initialRouteName="MainTabView" tabBar={(props) => <CustomTabBar {...props} />}>
                <Tab.Screen name="GeneratorTabView" component={MainView} options={{ tabBarLabel: language.generatorTab, tabBarIcon: ({ color }) => <GeneratorIcon color={color} /> }} />
                <Tab.Screen name="CardTabView" component={MainView} options={{ tabBarLabel: language.cardTab, tabBarIcon: ({ color }) => <CardIcon color={color} /> }} />
                <Tab.Screen name="DataTabView" component={MainView} options={{ tabBarLabel: language.dataTab, tabBarIcon: ({ color }) => <DataIcon color={color} /> }} />
                <Tab.Screen name="NoteTabView" component={MainView} options={{ tabBarLabel: language.noteTab, tabBarIcon: ({ color }) => <NoteIcon color={color} /> }} />
                <Tab.Screen name="SettingsTabView" component={MainView} options={{ tabBarLabel: language.settingsTab, tabBarIcon: ({ color }) => <SettingsIcon color={color} /> }} />
            </Tab.Navigator>
        </View>
    );
};
