import React from 'react';
import CartItem from './cart-item';

const CartItemContainer = ({ cart, deleteCart }) => {
    let cartItems = [];
    if (cart.length > 0) {
        cart.forEach(element => {
            cartItems.push(<CartItem data={element} deleteCart={deleteCart} />)
        });
    }

    return <ul className="list-group mb-3 z-depth-1">
        <div id="cart-items">
            {cartItems}
        </div>
    </ul>
}

export default CartItemContainer;