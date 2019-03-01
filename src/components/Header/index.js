import React, { Component } from 'react';
import { getCart } from '../../services/cart';
import Header from './header';

class HeaderContainer extends Component {
    render() {
        // let data = getCart();
        // let cartQuantity = 0;
        // if (data !== null) {
        //     data.forEach(element => {
        //         cartQuantity += parseInt(element.quantity);
        //     });
        // }
        // return <Header cartQuantity={cartQuantity} />
        return <Header />
    };
}

export default HeaderContainer;