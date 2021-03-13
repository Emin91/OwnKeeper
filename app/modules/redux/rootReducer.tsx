import { combineReducers } from 'redux';
import { RUserAccounts } from './userAccounts/reducer';
import { RValidation } from './validation/reducer';
import { RGenerator } from './generator/reducer';
import { RAppState } from './appState/reducer';

const rootReducer = combineReducers({
    RAppState,
    RGenerator,
    RValidation,
    RUserAccounts,
});

export default rootReducer;