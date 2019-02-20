import React from 'react';

const Submition = ({ totalAmount, onSubmit }) => {
    return <form className="card p-2">
        <div className="input-group">
            {/* <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" readOnly={true} value={totalAmount} /> */}
            <span className="form-control">{totalAmount + '$'}</span>
            <div className="input-group-append">
                <a href="/checkout" className="btn btn-secondary btn-md waves-effect m-0" type="button" onClick={onSubmit}>Thanh toán</a>
            </div>
        </div>
    </form>
};

export default Submition;