import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { colors } from './assets/constants/colors';
import { LocalizationContextProvider } from './modules/language';
import { RootNavigation } from './modules/navigation/rootNavigation';
import { store } from './modules/redux/store';

const App: FC = () => {
	return (
		<Provider store={store}>
			<LocalizationContextProvider>
				<StatusBar backgroundColor={colors.darlClay} barStyle="light-content" />
				{/* {true ? <InfoPopUp /> : null} */}
				<RootNavigation />
			</LocalizationContextProvider>
		</Provider>
	);
};

export default App;
