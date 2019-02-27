const ProductDetailsPopup = (state = [], action) => {
    switch (action.type) {
        case 'SHOW_POPUP':
            return {
                ...state, popupShow: true
            }
        case 'CLOSE_POPUP':
            return {
                ...state, popupShow: false
            }
        default:
            return state
    }
};

export default ProductDetailsPopup;