import React, { Component } from 'react';
import Form from './form';
// const axios = require('axios');

class Checkout extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cart: [],
  //     amount: 0,
  //     total: 0
  //   }
  //   this.calculateAmount = this.calculateAmount.bind(this);
  //   this.calculateTotal = this.calculateTotal.bind(this);
  //   this.deleteCart = this.deleteCart.bind(this);
  // };

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

  render() {
    // let cartItems = [];
    // if (this.state.cart.length > 0) {
    //   this.state.cart.forEach(element => {
    //     cartItems.push(<CartItem data={element} />)
    //   });
    // }

    return (
      <main className="mt-5 pt-4">
        <div className="container wow fadeIn">

          <h2 className="my-5 h2 text-center">Đặt hàng</h2>

          <div className="row">

            <Form />

          </div>

        </div>
      </main>
    )
  }
};

export default Checkout;