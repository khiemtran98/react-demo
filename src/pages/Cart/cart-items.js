import React from 'react';
import { connect } from 'react-redux';
import CartItem from './cart-item';
import { modifyCartItem } from "../../actions/shoppingCart";

const CartItemsContainer = (/*{ cart, onItemsChanged }*/ props) => {
    let cartItems = [];
    if (props.cart.length > 0) {
        props.cart.forEach(element => {
            cartItems.push(<CartItem
                data={element}
                modifyCartItem={(product, quantity) => props.modifyCartItem(product, quantity)}
                removeItem={productID => props.removeItem(productID)} />)
        });
    }

    return <ul className="list-group mb-3 z-depth-1">
        <div id="cart-items">
            {cartItems}
        </div>
    </ul>
}

const mapStateToProps = state => {
    return {
        cart: state.cart.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        modifyCartItem: (product, quantity) => dispatch(modifyCartItem(product, quantity)),
        // removeItem: productID => dispatch(removeFromCart(productID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItemsContainer);