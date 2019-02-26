import { combineReducers } from 'redux';
import shoppingCart from './shoppingCart';
import accountReducer from './accountReducer';
import userReducer from './userReducer';

export default combineReducers({
    shoppingCart,
    account: accountReducer,
    user: userReducer
})