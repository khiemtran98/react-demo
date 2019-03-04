import { combineReducers } from 'redux';
import shoppingCart from './shoppingCart';
import productDetailsPopup from './product-details-popup';
import checkout from './checkout';

export default combineReducers({
    cart: shoppingCart,
    // shipInfo: shipInfoReducer,
    // filter: filterReducer,
    // products: productsReducer,
    checkoutInfo: checkout,
    ui: productDetailsPopup
})