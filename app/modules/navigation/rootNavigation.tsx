import React, { FC, useEffect } from 'react';
import { View } from 'react-native';
import { selectAuthenticationState } from '../redux/validation/selectors';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setAuthenticationState } from '../redux/validation/actions';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import { NavigationContainer } from '@react-navigation/native';
import { setBiometricType } from '../redux/userInfo/actions';
import { StackAuthNavigator } from './stackNavigation';
import { TabNavigator } from './tabBarNavigation';

export const RootNavigation: FC = () => {
	const dispatch = useDispatch();
	const isAuthorized: boolean = useSelector(selectAuthenticationState, shallowEqual);

	useEffect(() => {
		FingerprintScanner.isSensorAvailable().then((data)=> data == 'Biometrics' ? dispatch(setBiometricType(true)) : null);
		FingerprintScanner
			.authenticate({ 
				title: 'Авторизация', 
				subTitle: 'Воспользуйтесь одним из способов для авторизации', 
				onAttempt: () => alert('Try again')})
			.then(() => {dispatch(setAuthenticationState(true))})
			.catch((error) => {console.warn(error)});
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
