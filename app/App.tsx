import React, { FC } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Provider } from 'react-redux';
import { RootNavigation } from './modules/navigation/rootNavigation';
import { store } from './modules/redux/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={undefined}>
        <RootNavigation />
      </KeyboardAvoidingView>
    </Provider>
  );
};

export default App;
