import React, { Component } from 'react';
// const axios = require('axios');

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shoppingCart: 0
        }
    }
    componentWillMount() {
        // axios.get('./cart.json')
        //   .then( response => {
        //     this.setState({
        //       shoppingCart: response.data.cart.length
        //   });
        // });
        let data = JSON.parse(localStorage.getItem('cart'));
        if (data !== null) {
            this.setState({
                shoppingCart: data["amount"]
            })
        }
       }
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
                <div className="container">

                <a className="navbar-brand waves-effect" href="/">
                    <strong className="blue-text">Khiem Tran</strong>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link waves-effect" href="/">Trang chủ
                        <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link waves-effect" href="/">Giới thiệu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link waves-effect" href="/">Liên hệ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link waves-effect" href="/">Chính sách</a>
                    </li>
                    </ul>

                    <ul className="navbar-nav nav-flex-icons">
                    <li className="nav-item">
                        <a className="nav-link waves-effect" href="/checkout">
                        <span className="badge red z-depth-1 mr-1">{this.state.shoppingCart}</span>
                        <i className="fas fa-shopping-cart"></i>
                        <span className="clearfix d-none d-sm-inline-block"> Giỏ hàng </span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.facebook.com/" className="nav-link waves-effect" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://twitter.com/" className="nav-link waves-effect" target="_blank">
                        <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link border border-light rounded waves-effect">
                        <i className="fab fa-github mr-2"></i>Tài khoản
                        </a>
                    </li>
                    </ul>

                </div>
                </div>
            </nav>
        )
    };
}

export default Navbar;