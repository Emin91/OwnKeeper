import { combineReducers } from 'redux';
import { RUserAccounts } from './userAccounts/reducer';
import { RValidation } from './validation/reducer';
import { RGenerator } from './generator/reducer';
import { RUserInfo } from './userInfo/reducer';

const rootReducer = combineReducers({
    RUserInfo,
    RGenerator,
    RValidation,
    RUserAccounts,
});

export default rootReducer;