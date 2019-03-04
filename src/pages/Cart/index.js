import React from 'react';
import { connect } from 'react-redux';
import Cart from './cart';
import { Button, Modal } from 'react-bootstrap';
import { removeFromCart } from "../../actions/shoppingCart";

class CartContainer extends React.Component {

    handleClose = () => {
        this.setState({
            show: false
        });
    }

    handleDelete = () => {
        this.setState({
            show: false
        },
            () => {
                this.props.removeItem(this.state.productID);
            });
    }

    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            show: false
        }
    };

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

    render() {
        const totalAmount = this.calculateTotal(this.state.cart);
        const totalQuantity = this.calculateTotalQuantity(this.state.cart);
        return <>
            <Cart totalQuantity={totalQuantity}
                totalAmount={totalAmount}
                cart={this.props.cart}
                onDeleteItem={(productID) => {
                    this.setState({ show: true, productID: productID });
                }} />

            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xoá sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có muốn xoá sản phẩm khỏi giỏ hàng?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Huỷ bỏ
                    </Button>
                    <Button variant="primary" onClick={productID => this.handleDelete(productID)}>
                        Xoá sản phẩm
                    </Button>
                </Modal.Footer>
            </Modal></>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: productID => dispatch(removeFromCart(productID))
    }
}

export default connect(null, mapDispatchToProps)(CartContainer);
