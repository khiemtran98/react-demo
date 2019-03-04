import { combineReducers } from 'redux';
import shoppingCart from './shoppingCart';
import productDetailsPopup from './product-details-popup';

import searchReducer from './searchReducer';

import checkout from './checkout';

export default combineReducers({
    cart: shoppingCart,
    // shipInfo: shipInfoReducer,
    // filter: filterReducer,
    // products: productsReducer,

    ui: productDetailsPopup,
    Control: searchReducer,

    checkoutInfo: checkout,
   
})