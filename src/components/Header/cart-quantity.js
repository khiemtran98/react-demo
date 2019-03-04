import React from 'react';
import { connect } from 'react-redux';
import { getCartQuantity } from '../../services/cart';

const CartQuantity = (props) => {
    return <span className="badge red z-depth-1 mr-1">{props.quantity}</span>
}

const mapStateToProps = (state) => {
    return {
        quantity: getCartQuantity(state.cart)
    }
}

export default connect(mapStateToProps)(CartQuantity);