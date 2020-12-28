import React, { FC } from 'react';
import { View } from 'react-native';
import { language } from '../language';
import { CustomTabBar } from './customTabBar';
import { CardIcon } from '../../assets/svg/tabBarIcons/cardIcon';
import { DataIcon } from '../../assets/svg/tabBarIcons/dataIcon';
import { NoteIcon } from '../../assets/svg/tabBarIcons/noteIcon';
import { SettingsIcon } from '../../assets/svg/tabBarIcons/settingsIcon';
import { GeneratorIcon } from '../../assets/svg/tabBarIcons/generatorIcon';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { GeneratorView } from '../../views/generatorView';

const Tab = createMaterialTopTabNavigator();

export const TabNavigator: FC = () => {
    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator swipeEnabled={false} tabBarPosition='bottom' initialRouteName="MainTabView" tabBar={(props) => <CustomTabBar {...props} />}>
                <Tab.Screen name="GeneratorTabView" component={GeneratorView} options={{ tabBarLabel: language.generatorTab, tabBarIcon: ({ color }) => <GeneratorIcon color={color} /> }} />
                <Tab.Screen name="CardTabView" component={GeneratorView} options={{ tabBarLabel: language.cardTab, tabBarIcon: ({ color }) => <CardIcon color={color} /> }} />
                <Tab.Screen name="DataTabView" component={GeneratorView} options={{ tabBarLabel: language.dataTab, tabBarIcon: ({ color }) => <DataIcon color={color} /> }} />
                <Tab.Screen name="NoteTabView" component={GeneratorView} options={{ tabBarLabel: language.noteTab, tabBarIcon: ({ color }) => <NoteIcon color={color} /> }} />
                <Tab.Screen name="SettingsTabView" component={GeneratorView} options={{ tabBarLabel: language.settingsTab, tabBarIcon: ({ color }) => <SettingsIcon color={color} /> }} />
            </Tab.Navigator>
        </View>
    );
};
