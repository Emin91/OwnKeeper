import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userAccountsI } from './userAccounts/reducer';
import { generatorI } from './generator/reducer';
import { appStateI } from './appState/reducer';
import createSagaMiddleware from 'redux-saga';
import { authI } from './validation/reducer';
import rootSaga from '../saga/rootSaga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = createStore(
    rootReducer,
    compose(composeWithDevTools(applyMiddleware(...middleware)))
);

sagaMiddleware.run(rootSaga);

export interface RootState {
    RValidation: authI;
    RAppState: appStateI;
    RGenerator: generatorI;
    RUserAccounts: userAccountsI;
}