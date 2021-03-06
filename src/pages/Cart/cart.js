import React from 'react';
import CartHeader from './cart-header';
import CartItems from './cart-items';
import Submition from './submition';

const Cart = ({
    totalQuantity,
    cart,
    totalAmount,
    onDeleteItem,
}) => {
    return (
        <main className="mt-5 pt-4">
            <div className="container wow fadeIn">
                <div className="my-5 h2 text-center"></div>
                <div className="col-md-12 mb-4"> {/* root */}
                    <CartHeader totalQuantity={totalQuantity} />
                    <CartItems cart={cart} removeItem={onDeleteItem} />
                    <Submition totalAmount={totalAmount} />
                </div>
            </div>
        </main>
    )
};

export default Cart;