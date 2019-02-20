import React, { Component } from 'react';
import { getCart } from '../../services/cart';
import { getProduct } from '../../services/product';
import ProductDetails from './product-details';

class ProductDetailsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
        this.setQuantity = this.setQuantity.bind(this);
        this.addToCart = this.addToCart.bind(this);
    };

    setQuantity(e) {
        if (e.target.value >= 1) {
            this.setState({
                quantity: e.target.value
            })
        }
    };

    addToCart() {
        let product = getProduct(this.props.location.search);
        let item = {
            "id": product.id,
            "type": product.type,
            "name": product.name,
            "price": product.price,
            "quantity": this.state.quantity
        };
        let cart = getCart();
        if (cart === null) {
            localStorage.setItem("cart", "[" + JSON.stringify(item) + "]");
        }
        else {
            let checkAlreadyExist = false;
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].id === item.id) {
                    cart[i].quantity = parseInt(cart[i].quantity) + parseInt(item.quantity);
                    checkAlreadyExist = true;
                    break;
                }
            }
            if (!checkAlreadyExist) {
                cart.push(item);
            }
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    };
    render() {
        let product = getProduct(this.props.location.search);
        return <ProductDetails product={product} setQuantity={this.setQuantity} addToCart={this.addToCart} />
    };
};

export default ProductDetailsContainer;
