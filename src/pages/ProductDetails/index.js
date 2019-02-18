import React, { Component } from 'react';
import Data from '../../components/data';
import RelatedProducts from './related-product';
const queryString = require('query-string');

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 1
        }
        this.getData = this.getData.bind(this);
        this.setAmount = this.setAmount.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    getData() {
        let parsed = queryString.parse(this.props.location.search);
        let [product] = Data.filter(element => element["id"] === parseInt(parsed.id));
        return product;
    }

    setAmount(e) {
        if (e.target.value >= 1) {
            this.setState({
                amount: e.target.value
            })
        }
    }

    addToCart() {
        let product = this.getData();
        let item = {
            "id": product.id,
            "type": product.type,
            "name": product.name,
            "price": product.price,
            "amount": this.state.amount
        };
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (cart === null) {
            localStorage.setItem("cart", "[" + JSON.stringify(item) + "]");
        }
        else {
            let checkAlreadyExist = false;
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].id === item.id) {
                    cart[i].amount = parseInt(cart[i].amount) + parseInt(item.amount);
                    checkAlreadyExist = true;
                    break;
                }
            }
            if (!checkAlreadyExist) {
                cart.push(item);
            }
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }

    render() {
        let product = this.getData();
        return (
            <div>
                <main className="mt-5 pt-4">
                    <div className="container dark-grey-text mt-5">

                        <div className="row wow fadeIn">

                            <div className="col-md-6 mb-4">
                                <img src={product["img-url"]} className="img-fluid" alt="" />

                            </div>

                            <div className="col-md-6 mb-4">

                                <div className="p-4">

                                    <div className="mb-3">
                                        <a href="">
                                            <span className="badge purple mr-1">{product["type"]}</span>
                                        </a>
                                        <a href="">
                                            <span className="badge blue mr-1">New</span>
                                        </a>
                                        <a href="">
                                            <span className="badge red mr-1">Bestseller</span>
                                        </a>
                                    </div>

                                    <p className="lead">
                                        <span className="mr-1">
                                            <del>$200</del>
                                        </span>
                                        <span>{product["price"]}</span>
                                    </p>

                                    <p className="lead font-weight-bold">{product["name"]}</p>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor suscipit libero eos atque quia ipsa
                                    sint voluptatibus!
                            Beatae sit assumenda asperiores iure at maxime atque repellendus maiores quia sapiente.</p>

                                    <form className="d-flex justify-content-left" action="/checkout">
                                        <input type="number" value={this.state.amount} aria-label="Search" className="form-control" style={{ width: 100 }} onChange={this.setAmount} />
                                        <button className="btn btn-primary btn-md my-0 p" type="submit" onClick={this.addToCart}>Add to cart
                                <i className="fas fa-shopping-cart ml-1"></i>
                                        </button>

                                    </form>

                                </div>

                            </div>

                        </div>

                        <hr />

                        <RelatedProducts />

                    </div>
                </main>
            </div>
        )
    };
};

export default ProductDetails;