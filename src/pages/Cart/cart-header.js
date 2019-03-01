import React from 'react';
import { connect } from 'react-redux';
import { getCartQuantity } from '../../services/cart';

const CartHeader = (/*{ totalQuantity }*/ props) => {
    return <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Giỏ hàng</span>
        <span className="badge badge-secondary badge-pill">{props.quantity}</span>
    </h4>
}

const mapStateToProps = (state) => {
    return {
        quantity: getCartQuantity(state.cart)
    }
}

export default connect(mapStateToProps)(CartHeader);