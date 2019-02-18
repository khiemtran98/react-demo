import React from 'react';
import CartItem from './cart-item';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            amount: 0,
            total: 0
        }
        this.calculateAmount = this.calculateAmount.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
        this.deleteCart = this.deleteCart.bind(this);
    };

    componentWillMount() {
        // axios.get('./cart.json')
        //   .then( response => {
        //     this.setState({
        //       cart: response.data.cart
        //   });
        // })
        let localStorageCart = JSON.parse(localStorage.getItem('cart'));
        if (localStorageCart !== null) {
            this.setState({
                cart: localStorageCart
            })
        }
    }

    componentDidMount() {
        this.calculateAmount();
        this.calculateTotal();
    }

    calculateAmount() {
        let productAmounts = 0;
        this.state.cart.forEach(element => {
            productAmounts += parseInt(element.amount);
        });
        this.setState({
            amount: productAmounts
        });
    }

    calculateTotal() {
        let result = 0;
        this.state.cart.forEach(element => {
            result += parseInt(element.amount) * parseInt(element.price);
        })
        this.setState({
            total: result + '$'
        })
    }

    deleteCart() {
        localStorage.clear();
        this.setState({
            cart: [],
            amount: 0,
            total: 0
        })
    }

    render() {
        let cartItems = [];
        if (this.state.cart.length > 0) {
            this.state.cart.forEach(element => {
                cartItems.push(<CartItem data={element} />)
            });
        }

        return (
            <div className="col-md-4 mb-4">

                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Your cart</span>
                    <span className="badge badge-secondary badge-pill">{this.state.amount}</span>
                </h4>

                <ul className="list-group mb-3 z-depth-1">
                    <div id="cart-items">
                        {cartItems}
                        {this.calculateTotal}
                    </div>
                </ul>

                <form className="card p-2">
                    <div className="input-group">
                        <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" readOnly={true} value={this.state.total} />
                        <div className="input-group-append">
                            <button className="btn btn-secondary btn-md waves-effect m-0" type="button" onClick={this.deleteCart}>Xoá giỏ hàng</button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}

export default Cart;