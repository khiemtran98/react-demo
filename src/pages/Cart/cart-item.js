import React from 'react';
import { changeItem, deleteItem } from '../../services/cart';
import { connect } from 'react-redux'
import { removeFromCart } from "../../actions/shoppingCart";

class CartItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { data, onItemsChanged } = this.props;
        return <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4 className="my-8">{data["name"]}</h4>
                        <small className="text-muted">{data["type"]}</small>
                    </div>
                    <div className="col md-auto" style={{ margin: 'auto' }}>
                        <input type="number" min="1" value={data['quantity']} style={{ width: 50 }} onChange={e => {
                            changeItem(data['id'], e.target.value)
                            onItemsChanged();
                        }} />
                    </div>
                    <div className="col col-lg-1" style={{ margin: 'auto' }}>
                        <span className="text-muted">{data["price"]}</span>
                    </div>
                    <div className="col col-lg-1" style={{ margin: 'auto' }}>
                        <button className="btn-danger" onClick={() => {
                            deleteItem(data["id"]);
                            onItemsChanged(data["id"]);
                            this.props.removeItem(data);
                        }}></button>
                    </div>
                </div>
            </div>
        </li>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: item => dispatch(removeFromCart(item))
    }
}

export default connect(null, mapDispatchToProps)(CartItem);