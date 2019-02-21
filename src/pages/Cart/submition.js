import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

const Submition = ({ totalAmount, onSubmit }) => {
    return <form className="card p-2">
        <div className="input-group">
            {/* <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" readOnly={true} value={totalAmount} /> */}
            <span className="form-control">{totalAmount + '$'}</span>
            <div className="input-group-append">
                {/* <a href="/checkout" className="btn btn-secondary btn-md waves-effect m-0" type="button" onClick={onSubmit}>Thanh toán</a> */}

                <LinkContainer to="/checkout">
                    <a className="btn btn-secondary btn-md waves-effect m-0" type="button" onClick={onSubmit}>Thanh toán</a>
                </LinkContainer>
            </div>
        </div>
    </form>
};

export default Submition;