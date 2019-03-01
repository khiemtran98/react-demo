import React from 'react';
// import { changeItem, deleteItem } from '../../services/cart';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { data, onItemsChanged, modifyCartItem, removeItem } = this.props;
        return <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4 className="my-8">{data.product["name"]}</h4>
                        <small className="text-muted">{data.product["type"]}</small>
                    </div>
                    <div className="col md-auto" style={{ margin: 'auto' }}>
                        <input type="number" min="1" value={data['quantity']} style={{ width: 50 }} /*onChange={e => {
                            changeItem(data['id'], e.target.value)
                            onItemsChanged();
                        }} */
                            onChange={e => { modifyCartItem(data.product, e.target.value) }} />
                    </div>
                    <div className="col col-lg-1" style={{ margin: 'auto' }}>
                        <span className="text-muted">{data.product["price"]}</span>
                    </div>
                    <div className="col col-lg-1" style={{ margin: 'auto' }}>
                        <button className="btn-danger" onClick={() => {
                            // deleteItem(data["id"]);
                            removeItem(data.product.id);
                            onItemsChanged(data["id"]);
                        }}></button>
                    </div>
                </div>
            </div>
        </li>
    }
}

export default CartItem;