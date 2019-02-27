import { combineReducers } from 'redux';
import shoppingCart from './shoppingCart';
import productDetailsPopup from './product-details-popup';

export default combineReducers({
    cart: shoppingCart,
    // shipInfo: shipInfoReducer,
    // filter: filterReducer,
    // products: productsReducer,
    ui: productDetailsPopup
})