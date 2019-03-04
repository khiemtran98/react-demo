import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import Form from './form';
import { SubmitCheckout } from '../../actions/checkout';
// const axios = require('axios');

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // cart: [],
      // amount: 0,
      // total: 0
      popupShow: false
    }
    // this.handleShow = this.handleShow.bind(this);
    // this.calculateAmount = this.calculateAmount.bind(this);
    // this.calculateTotal = this.calculateTotal.bind(this);
    // this.deleteCart = this.deleteCart.bind(this);
  };

  // componentWillMount() {
  //   // axios.get('./cart.json')
  //   //   .then( response => {
  //   //     this.setState({
  //   //       cart: response.data.cart
  //   //   });
  //   // })
  //   let localStorageCart = JSON.parse(localStorage.getItem('cart'));
  //   if (localStorageCart !== null) {
  //     this.setState({
  //       cart: localStorageCart
  //     })
  //   }
  // }

  // componentDidMount() {
  //   this.calculateAmount();
  //   this.calculateTotal();
  // }

  // calculateAmount() {
  //   let productAmounts = 0;
  //   this.state.cart.forEach(element => {
  //     productAmounts += parseInt(element.amount);
  //   });
  //   this.setState({
  //     amount: productAmounts
  //   });
  // }

  // calculateTotal() {
  //   let result = 0;
  //   this.state.cart.forEach(element => {
  //     result += parseInt(element.amount) * parseInt(element.price);
  //   })
  //   this.setState({
  //     total: result + '$'
  //   })
  // }

  // deleteCart() {
  //   localStorage.clear();
  //   this.setState({
  //     cart: [],
  //     amount: 0,
  //     total: 0
  //   })
  // }

  // handleShow() {
  //   this.setState({
  //     popupShow: true
  //   })
  // }

  handleClose() {
    this.setState({
      popupShow: false
    })
  }

  Submit(info) {
    this.props.saveInfo(info);
    this.setState({
      popupShow: true
    })
  }

  render() {
    // let cartItems = [];
    // if (this.state.cart.length > 0) {
    //   this.state.cart.forEach(element => {
    //     cartItems.push(<CartItem data={element} />)
    //   });
    // }

    return (
      <>
        <main className="mt-5 pt-4">
          <div className="container wow fadeIn">

            <h2 className="my-5 h2 text-center">Đặt hàng</h2>

            <div className="row">

              <Form submit={info => this.Submit(info)} />

            </div>

          </div>
        </main>

        <Modal
          size="sm"
          show={this.state.popupShow}
          onHide={() => this.handleClose()}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Store
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Đặt hàng thành công!</Modal.Body>
        </Modal>
      </>
    )
  }
};

const mapDispatchToProps = dispatch => {
  return {
    saveInfo: info => dispatch(SubmitCheckout(info))
  }
}

export default connect(null, mapDispatchToProps)(Checkout);