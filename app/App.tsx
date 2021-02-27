import React, { FC, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { RootNavigation } from './modules/navigation/rootNavigation';
import { LocalizationContextProvider } from './modules/language';
import { colors } from './assets/constants/colors';
import { PinCodeView } from './views/pinCodeView';
import { store } from './modules/redux/store';
import FingerprintScanner from 'react-native-fingerprint-scanner';

const App: FC = () => {

	useEffect(() => {
		// FingerprintScanner
		// 	.isSensorAvailable()
		// 	.then(biometryType => console.log('biometryType', biometryType))
		// 	.catch(error => console.log('some error', error));
		// FingerprintScanner
		// 	.authenticate({ description: 'Scan your fingerprint on the device scanner to continue' })
		// 	.then(() => {
		// 		console.log('biometryType-----------');
		// 	})
		// 	.catch((error) => {
		// 		console.log('biometryType-----------', error);

		// 	});			
	}, [])
	
	return (
		<Provider store={store}>
			<LocalizationContextProvider>
				<StatusBar backgroundColor={colors.darlClay} barStyle="light-content" />
					<PinCodeView />
				{/* <RootNavigation /> */}
			</LocalizationContextProvider>
		</Provider>
	);
};

export default App;
