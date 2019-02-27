import React from 'react';
import { connect } from 'react-redux';

const CartQuantity = (props) => {
    return <span className="badge red z-depth-1 mr-1">{props.quantity}</span>
}

function getCartQuantity(cart) {
    console.log('getCartQuantity: ', cart);
    return cart.items.reduce((total, x) => {
        console.log({ x })
        return total + x.quantity
    }, 0);
}

const mapStateToProps = (state) => {
    console.log('>>>> ', state);

    return {
        quantity: getCartQuantity(state.cart)
    }
}

export default connect(mapStateToProps)(CartQuantity);