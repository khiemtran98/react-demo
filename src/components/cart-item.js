import React, { Component } from 'react';

class CartItem extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 className="my-0">{this.props.data["name"] + ' (' + this.props.data["amount"] + ')'}</h6>
                    <small className="text-muted">{this.props.data["type"]}</small>
                    </div>
                    <span className="text-muted">{this.props.data["price"]}</span>
            </li>
        )
    };
};

export default CartItem;