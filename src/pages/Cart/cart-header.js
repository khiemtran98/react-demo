import React from 'react';

const CartHeader = ({ totalQuantity }) => {
    return <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Giỏ hàng</span>
        <span className="badge badge-secondary badge-pill">{totalQuantity}</span>
    </h4>
}

export default CartHeader;