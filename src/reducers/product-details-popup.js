import * as actionType from '../actions/type'

const initialCartState = {
    popupShow: false
}

const ProductDetailsPopup = (state = initialCartState, action) => {
    switch (action.type) {
        case actionType.PD_ADD_TO_CART_SUCCESSFUL:
            return {
                ...state, popupShow: true
            }
        case actionType.PD_ADD_TO_CART_SUCCESSFUL_CONFIRMED:
            return {
                ...state, popupShow: false
            }
        default:
            return state
    }
};

export default ProductDetailsPopup;