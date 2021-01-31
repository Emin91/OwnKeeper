import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { colors } from './assets/constants/colors';
import { LocalizationContextProvider } from './modules/language';
import { store } from './modules/redux/store';
import { PinCodeView } from './views/pinCodeView';

const App: FC = () => {
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
