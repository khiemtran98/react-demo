import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap'

class Product extends Component {
    render() {
        let url = "/products/" + this.props.data["id"];
        return (
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">

                    <div className="view overlay">
                        <img src={this.props.data["img_url"]} className="card-img-top" style={{ minHeight: 382 }}
                            alt="" />
                        <LinkContainer to={url}>
                            <a>
                                <div className="mask rgba-white-slight"></div>
                            </a>
                        </LinkContainer>
                        {/* <a href={url}> */}
                        {/* <div className="mask rgba-white-slight"></div> */}
                        {/* </a> */}
                    </div>

                    <div className="card-body text-center">
                        {/* <a href={url} className="grey-text">
                            <h5>{this.props.data["type"]}</h5>
                        </a> */}
                        <LinkContainer to={url}>
                            <a className="grey-text">
                                <h5>{this.props.data["type"]}</h5>
                            </a>
                        </LinkContainer>
                        <h5>
                            <strong>
                                {/* <a href={url} className="dark-grey-text">{this.props.data["name"]}
                                    <span className="badge badge-pill danger-color">NEW</span>
                                </a> */}
                                <LinkContainer to={url}>
                                    <a className="dark-grey-text">
                                        {this.props.data["name"]}
                                        <span className="badge badge-pill danger-color">NEW</span>
                                    </a>
                                </LinkContainer>
                            </strong>
                        </h5>

                        <h4 className="font-weight-bold blue-text">
                            <strong>{this.props.data["price"]}</strong>
                        </h4>

                    </div>

                </div>

            </div>
        )
    };
};

export default Product;