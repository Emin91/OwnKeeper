import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { TabNavigator } from './tabBarNavigation';

export const RootNavigation: FC = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer >
    </View>
  );
};
