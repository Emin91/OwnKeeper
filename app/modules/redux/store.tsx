import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { IGeneratedPassword } from '../../entities';
import createSagaMiddleware from 'redux-saga';
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
    RGenerator: IGeneratedPassword;
    RValidation: any;
    RUserAccounts: any;
}