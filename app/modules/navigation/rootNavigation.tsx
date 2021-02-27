import React, { FC, useEffect } from 'react';
import { View } from 'react-native';
import { selectAuthtenticationState } from '../redux/validation/selectors';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setAuthenticationState } from '../redux/validation/actions';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import { NavigationContainer } from '@react-navigation/native';
import { StackAuthNavigator } from './stackNavigation';
import { TabNavigator } from './tabBarNavigation';

export const RootNavigation: FC = () => {
	const dispatch = useDispatch();
	const isAuthorized: boolean = useSelector(selectAuthtenticationState, shallowEqual);

	useEffect(() => {
		FingerprintScanner
			.authenticate({ title: 'Авторизация', subTitle: 'Воспользуйтесь одним из способов для авторизации', description: '', cancelButton: 'Cancel', onAttempt: () => alert('Try again') })
			.then(() => {
				dispatch(setAuthenticationState(true));
			})
			.catch((error) => {
				console.log(error)
			});
		return FingerprintScanner.release();
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<NavigationContainer >
				{isAuthorized ? <TabNavigator /> : <StackAuthNavigator />}
			</NavigationContainer >
		</View>
	);
};
