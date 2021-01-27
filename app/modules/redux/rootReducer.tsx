import { combineReducers } from 'redux';
import { RGenerator } from './generator/reducer';
import { RValidation } from './validation/reducer';
import { RUserAccounts } from './userAccounts/reducer';

const rootReducer = combineReducers({
    RGenerator,
    RValidation,
    RUserAccounts,
});

export default rootReducer;