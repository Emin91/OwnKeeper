import React, { FC } from 'react';
import { View } from 'react-native';
import { selectAuthenticationState } from '../redux/validation/selectors';
import { selectSplashLoaded } from '../redux/appState/selectors';
import { NavigationContainer } from '@react-navigation/native';
import { shallowEqual, useSelector } from 'react-redux';
import { SplashScreen } from '../../views/splashScreen';
import { StackAuthNavigator } from './stackNavigation';
import { TabNavigator } from './tabBarNavigation';

export const RootNavigation: FC = () => {
	const isAuthorized: boolean = useSelector(selectAuthenticationState, shallowEqual);
	const isSplashLoaded: boolean = useSelector(selectSplashLoaded, shallowEqual);

	if (!isSplashLoaded) {
        return <SplashScreen />;
    }

	return (
		<View style={{ flex: 1 }}>
			<NavigationContainer >
				{isAuthorized ? <TabNavigator /> : <StackAuthNavigator />}
			</NavigationContainer >
		</View>
	);
};
