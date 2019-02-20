import React from 'react';
import { getCart } from '../../services/cart';
import Cart from './cart';

class CartContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
        }
    };

    loadData() {
        const cart = getCart();
        if (cart !== null) {
            this.setState({
                cart
            });
        }
    }

    componentWillMount() {
        this.loadData();
    }

    calculateTotal(cart) {
        let result = 0;
        cart.forEach(element => {
            result += parseInt(element.quantity) * parseInt(element.price);
        })

        return result;
    }

    calculateTotalQuantity(cart) {
        // return (cart && cart.length > 0 && cart.reduce((y, x) => parseInt(y.quantity) + parseInt(x.quantity))) || 0;
        let productQuantity = 0;
        cart.forEach(element => {
            productQuantity += parseInt(element.quantity);
        });
        return productQuantity;
    }

    checkout() {

    }

    handleItemsChanged() {
        // TODO: refresh component
        // reload data from storage
        // update cart in state
        this.loadData();
    }

    render() {
        const totalAmount = this.calculateTotal(this.state.cart);
        const totalQuantity = this.calculateTotalQuantity(this.state.cart);
        return <Cart totalQuantity={totalQuantity}
            totalAmount={totalAmount}
            cart={this.state.cart}
            onSubmit={() => {
                this.checkout()
            }}
            onItemsChanged={() => this.handleItemsChanged()} />
    }
}

export default CartContainer;