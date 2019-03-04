import React from 'react';
import { SubmitCheckout } from '../../actions/checkout';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            nickName: null,
            email: null,
            address1: null,
            address2: null,
            country: null,
            state: null,
            zip: null,
            sameShippingAddressBillingAddress: false,
            saveInformationNextTime: false,
            // creditCard: true,
            // debitCard: false,
            // paypal: false,
            paymentMethod: 'Credit card',
            nameOnCard: '',
            creditCardNumber: null,
            expiration: null,
            cvv: null
        };
    }

    render() {
        return (
            <div className="col-md-8 mb-4">

                <div className="card">

                    <form className="card-body" onSubmit={e => {
                        e.preventDefault();
                        this.props.submit(this.state);
                    }}>

                        <div className="row">

                            <div className="col-md-6 mb-2">

                                <div className="md-form ">
                                    <input type="text" id="firstName" className="form-control" value={this.state.firstName} onChange={e => this.setState({ firstName: e.target.value })} required />
                                    <label htmlFor="firstName" className="">First name</label>
                                </div>

                            </div>

                            <div className="col-md-6 mb-2">

                                <div className="md-form">
                                    <input type="text" id="lastName" className="form-control" value={this.state.lastName} onChange={e => this.setState({ lastName: e.target.value })} required />
                                    <label htmlFor="lastName" className="">Last name</label>
                                </div>

                            </div>

                        </div>

                        <div className="md-form input-group pl-0 mb-5">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="text" className="form-control py-0" aria-describedby="basic-addon1" value={this.state.nickName} onChange={e => this.setState({ nickName: e.target.value })} required />
                        </div>

                        <div className="md-form mb-5">
                            <input type="text" id="email" className="form-control" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} required />
                            <label htmlFor="email" className="">Email (optional)</label>
                        </div>

                        <div className="md-form mb-5">
                            <input type="text" id="address" className="form-control" value={this.state.address1} onChange={e => this.setState({ address1: e.target.value })} required />
                            <label htmlFor="address" className="">Address</label>
                        </div>

                        <div className="md-form mb-5">
                            <input type="text" id="address-2" className="form-control" value={this.state.address2} onChange={e => this.setState({ address2: e.target.value })} />
                            <label htmlFor="address-2" className="">Address 2 (optional)</label>
                        </div>

                        <div className="row">

                            <div className="col-lg-4 col-md-12 mb-4">

                                <label htmlFor="country">Country</label>
                                <select className="custom-select d-block w-100" id="country" value={this.state.country} onChange={e => this.setState({ country: e.target.value })} required>
                                    <option value="">Choose...</option>
                                    <option value="United States">United States</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid country.
                        </div>

                            </div>

                            <div className="col-lg-4 col-md-6 mb-4">

                                <label htmlFor="state">State</label>
                                <select className="custom-select d-block w-100" id="state" value={this.state.state} onChange={e => this.setState({ state: e.target.value })} required>
                                    <option value="">Choose...</option>
                                    <option value="California">California</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please provide a valid state.
                        </div>

                            </div>

                            <div className="col-lg-4 col-md-6 mb-4">

                                <label htmlFor="zip">Zip</label>
                                <input type="text" className="form-control" id="zip" placeholder="" required value={this.state.zip} onChange={e => this.setState({ zip: e.target.value })} />
                                <div className="invalid-feedback">
                                    Zip code required.
                        </div>

                            </div>

                        </div>

                        <hr />

                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="same-address" checked={this.state.sameShippingAddressBillingAddress} onChange={e => {
                                if (!this.state.sameShippingAddressBillingAddress) {
                                    this.setState({ sameShippingAddressBillingAddress: true })
                                }
                                else {
                                    this.setState({ sameShippingAddressBillingAddress: false })
                                }
                            }
                            } />
                            <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="save-info" checked={this.state.saveInformationNextTime} onChange={e => {
                                if (!this.state.saveInformationNextTime) {
                                    this.setState({ saveInformationNextTime: true })
                                }
                                else {
                                    this.setState({ saveInformationNextTime: false })
                                }
                            }
                            } />
                            <label className="custom-control-label" htmlFor="save-info">Save this information htmlFor next time</label>
                        </div>

                        <hr />

                        <div className="d-block my-3">
                            <div className="custom-control custom-radio">
                                <input id="credit" name="paymentMethod" type="radio" className="custom-control-input"
                                    onChange={e => {
                                        if (e.target.checked) {
                                            this.setState({
                                                paymentMethod: 'Credit card'
                                            })
                                        }
                                    }}
                                    // checked={this.state.creditCard} onChange={e => {
                                    //     if (!this.state.creditCard) {
                                    //         this.setState({
                                    //             creditCard: true,
                                    //             debitCard: false,
                                    //             paypal: false
                                    //         })
                                    //     }
                                    // }}
                                    required />
                                <label className="custom-control-label" htmlFor="credit">Credit card</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input id="debit" name="paymentMethod" type="radio" className="custom-control-input"
                                    onChange={e => {
                                        if (e.target.checked) {
                                            this.setState({
                                                paymentMethod: 'Debit card'
                                            })
                                        }
                                    }}
                                    // checked={this.state.debitCard} onChange={e => {
                                    //     if (!this.state.debitCard) {
                                    //         this.setState({
                                    //             debitCard: true,
                                    //             creditCard: false,
                                    //             paypal: false
                                    //         })
                                    //     }
                                    // }} 
                                    required />
                                <label className="custom-control-label" htmlFor="debit">Debit card</label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input"
                                    onChange={e => {
                                        if (e.target.checked) {
                                            this.setState({
                                                paymentMethod: 'Paypal'
                                            })
                                        }
                                    }}
                                    // checked={this.state.paypal} onChange={e => {
                                    //     if (!this.state.paypal) {
                                    //         this.setState({
                                    //             paypal: true,
                                    //             creditCard: false,
                                    //             debitCard: false
                                    //         })
                                    //     }
                                    // }} 
                                    required />
                                <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cc-name">Name on card</label>
                                <input type="text" className="form-control" id="cc-name" placeholder="" required value={this.state.nameOnCard} onChange={e => this.setState({ nameOnCard: e.target.value })} />
                                <small className="text-muted">Full name as displayed on card</small>
                                <div className="invalid-feedback">
                                    Name on card is required
                        </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="cc-number">Credit card number</label>
                                <input type="text" className="form-control" id="cc-number" placeholder="" required value={this.state.creditCardNumber} onChange={e => this.setState({ creditCardNumber: e.target.value })} />
                                <div className="invalid-feedback">
                                    Credit card number is required
                        </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="cc-expiration">Expiration</label>
                                <input type="text" className="form-control" id="cc-expiration" placeholder="" required value={this.state.expiration} onChange={e => this.setState({ expiration: e.target.value })} />
                                <div className="invalid-feedback">
                                    Expiration date required
                        </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="cc-expiration">CVV</label>
                                <input type="text" className="form-control" id="cc-cvv" placeholder="" required value={this.state.cvv} onChange={e => this.setState({ cvv: e.target.value })} />
                                <div className="invalid-feedback">
                                    Security code required
                        </div>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>

                    </form>

                </div>

            </div>
        )
    }
};

export default Form;