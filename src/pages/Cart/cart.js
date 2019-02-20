import React from 'react';
import CartHeader from './cart-header';
import CartItems from './cart-item-container';
import Submition from './submition';

const Cart = ({
    totalQuantity,
    cart,
    totalAmount,
    deleteCart,
    onSubmit
}) => {
    return (
        <main className="mt-5 pt-4">
            <div className="container wow fadeIn">

                <div className="my-5 h2 text-center"></div>
                <div className="col-md-12 mb-4"> {/* root */}
                    <CartHeader totalQuantity={totalQuantity} />
                    <CartItems cart={cart} deleteCart={deleteCart} />
                    <Submition totalAmount={totalAmount} onSubmit={onSubmit} />
                </div>

            </div>
        </main>
    )
};

export default Cart;