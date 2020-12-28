import React, { FC } from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { colors } from './assets/constants/colors';
import { RootNavigation } from './modules/navigation/rootNavigation';
import { store } from './modules/redux/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.darlClay} barStyle="light-content" />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={undefined}>
        <RootNavigation />
      </KeyboardAvoidingView>
    </Provider>
  );
};

export default App;
