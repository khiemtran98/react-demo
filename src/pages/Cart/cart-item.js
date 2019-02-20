import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        return (
            <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4 className="my-8">{this.props.data["name"]}</h4>
                            <small className="text-muted">{this.props.data["type"]}</small>
                        </div>
                        <div className="col md-auto" style={{ margin: 'auto' }}>
                            <input type="number" value={this.props.data["quantity"]} style={{ width: 50 }} />
                        </div>
                        <div className="col col-lg-1" style={{ margin: 'auto' }}>
                            <span className="text-muted">{this.props.data["price"]}</span>
                        </div>
                        <div className="col col-lg-1" style={{ margin: 'auto' }}>
                            <button className="btn-danger" onClick={this.props.deleteCart}></button>
                        </div>
                    </div>
                </div>
            </li>
        )
    };
};

export default CartItem;