const shoppingCart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [
                ...state,
                {
                    shoppingCart: action.quantity
                }
            ]
        default:
            return state
    }
};

export default shoppingCart;