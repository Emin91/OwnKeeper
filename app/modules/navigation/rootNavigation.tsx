import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './tabBarNavigation';
import { View } from 'react-native';

export const RootNavigation: FC = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer >
        <TabNavigator />
      </NavigationContainer >
    </View>
  );
};
