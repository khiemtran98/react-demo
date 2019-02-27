import * as actionType from '../actions/type'

const initialCartState = {
    items: [],
    voucher: ''
}

const shoppingCart = (state = initialCartState, action) => {
    switch (action.type) {
        case actionType.SC_ADD_TO_CART:
            const { product, quantity } = action.payload;
            return addItemToCart(state, product, quantity);

        case actionType.SC_REMOVE_FROM_CART:
            const productId = action.payload.productId;
            return state.items.filter(cartItem => cartItem.product.id !== productId);

        default:
            return state
    }
};

function addItemToCart(cart, product, quantity) {
    const existedItem = cart.items.find(x => x.product.id === product.id);
    if (existedItem) {
        return {
            ...cart, items: cart.items.map(x => {
                if (x.product.id === product.id) {
                    return {
                        ...x,
                        quantity: x.quantity + quantity
                    }
                }

                return x;
            })
        };
    } else {
        return {
            ...cart, items: [...cart.items, {
                product: product,
                quantity: quantity
            }]
        };
    }

    return cart;
}

export default shoppingCart;