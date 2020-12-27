import { combineReducers } from 'redux';
import { cart } from '../redux/reducer/reducer'

const rootReducer = combineReducers({
    cart,
});

export default rootReducer;