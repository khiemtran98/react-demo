import React, { Component } from 'react';
import { changeItem, deleteItem } from '../../services/cart';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.data['quantity']
        }
        this.changeQuantity = this.changeQuantity.bind(this);
    }

    changeQuantity(e) {
        if (e.target.value > -1) {
            this.setState({
                quantity: e.target.value
            })
            changeItem(this.props.data['id'], this.state.quantity)
            this.props.onItemsChanged();
        }
    }

    render() {
        return <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4 className="my-8">{this.props.data["name"]}</h4>
                        <small className="text-muted">{this.props.data["type"]}</small>
                    </div>
                    <div className="col md-auto" style={{ margin: 'auto' }}>
                        <input type="number" value={this.state.quantity} style={{ width: 50 }} onChange={this.changeQuantity} />
                    </div>
                    <div className="col col-lg-1" style={{ margin: 'auto' }}>
                        <span className="text-muted">{this.props.data["price"]}</span>
                    </div>
                    <div className="col col-lg-1" style={{ margin: 'auto' }}>
                        <button className="btn-danger" onClick={() => {
                            deleteItem(this.props.data["id"]);
                            this.props.onItemsChanged(this.props.data["id"]);
                        }}></button>
                    </div>
                </div>
            </div>
        </li>
    };
};

export default CartItem;