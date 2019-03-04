import { combineReducers } from 'redux';
import shoppingCart from './shoppingCart';
import productDetailsPopup from './product-details-popup';
import searchReducer from './searchReducer';
export default combineReducers({
    cart: shoppingCart,
    // shipInfo: shipInfoReducer,
    // filter: filterReducer,
    // products: productsReducer,
    ui: productDetailsPopup,
    Control: searchReducer
})