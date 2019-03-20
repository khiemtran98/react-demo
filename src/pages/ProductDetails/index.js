import React, { Component } from 'react';
import { addItem } from '../../services/cart';
import { getProductsById } from '../../services/product';
import ProductDetails from './product-details';
import { connect } from 'react-redux'
import { addToCart } from "../../actions/shoppingCart";
import { ShowPopup, ClosePopup } from "../../actions/product-details-popup";

class ProductDetailsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            product: {}
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
        // 
        let product = getProductsById(this.props.match.params.id);
        let item = {
            "id": product.id,
            "type": product.type,
            "name": product.name,
            "price": product.price,
            "quantity": this.state.quantity
        };

        addItem(item);
        this.props.updateQuantityProp(product, parseInt(this.state.quantity));
        this.props.ShowPopup();
    };
    render() {
        // let product = getProductByID(this.props.location.search);
        let product = {}
        getProductsById(this.props.match.params.id).then(data => {
            this.setState({
                product: data[0]
            })
        });
        return <ProductDetails product={this.state.product} setQuantity={this.setQuantity} addToCart={() => this.addToCart()} popupShow={this.props.popupShow} closePopup={this.props.ClosePopup} />
    };
};

const mapStateToProps = state => {
    return {
        popupShow: state.ui.popupShow
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateQuantityProp: (product, quantity) => dispatch(addToCart(product, quantity)),
        ShowPopup: () => dispatch(ShowPopup()),
        ClosePopup: () => dispatch(ClosePopup())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsContainer);
