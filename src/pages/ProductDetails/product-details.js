import RelatedProducts from './related-product';
import { Modal } from 'react-bootstrap';

import React from 'react'

export default function productDetails({ product, setQuantity, addToCart, popupShow, closePopup }) {
    return (
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

                            <form className="d-flex justify-content-left">
                                <input type="number" defaultValue='1' min='1' aria-label="Search" className="form-control" style={{ width: 100 }} onChange={setQuantity} />
                                <button className="btn btn-primary btn-md my-0 p" type="submit" onClick={e => {
                                    addToCart();
                                    e.preventDefault();
                                    // Popup = new PopupClass();
                                    // let messageText = "Message text";
                                    // let messageName = "New message";
                                    // Popup.show(messageText, messageName);
                                    // alert('Thêm thành công vào giỏ hàng!')
                                }}>Add to cart
                                    <i className="fas fa-shopping-cart ml-1"></i>
                                </button>

                                <Modal
                                    size="sm"
                                    show={popupShow}
                                    onHide={closePopup}
                                    aria-labelledby="example-modal-sizes-title-sm"
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="example-modal-sizes-title-sm">
                                            Store
                                    </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Thêm vào giỏ hàng thành công!</Modal.Body>
                                </Modal>

                            </form>

                        </div>

                    </div>

                </div>

                <hr />

                <RelatedProducts />

            </div>
        </main >
    )
}
