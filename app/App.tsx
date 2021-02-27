import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { RootNavigation } from './modules/navigation/rootNavigation';
import { LocalizationContextProvider } from './modules/language';
import { colors } from './assets/constants/colors';
import { store } from './modules/redux/store';

const App: FC = () => {
	return (
		<Provider store={store}>
			<LocalizationContextProvider>
				<StatusBar backgroundColor={colors.darlClay} barStyle="light-content" />
				<RootNavigation />
			</LocalizationContextProvider>
		</Provider>
	);
};

export default App;
