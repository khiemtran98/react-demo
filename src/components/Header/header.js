import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import CartQuantity from './cart-quantity';

const Header = ({ cartQuantity }) => {
    return (
        <Navbar bg="dark" variant="dark" className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
            <div className="container">
                <LinkContainer to="" className="navbar-brand waves-effect">
                    <Navbar.Brand>
                        <strong className="blue-text">Store</strong>
                    </Navbar.Brand>
                </LinkContainer>

                <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Button>

                <Nav className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="item">
                            <LinkContainer to="/home">
                                <Nav.Link className="nav-link waves-effect">Trang chủ</Nav.Link>
                            </LinkContainer></li>
                        <li className="item">
                            <LinkContainer to='/about'>
                                <Nav.Link className="nav-link waves-effect">Giới thiệu</Nav.Link>
                            </LinkContainer></li>
                        <li className="item">
                            <LinkContainer to='/contact'>
                                <Nav.Link className="nav-link waves-effect">Liên hệ</Nav.Link>
                            </LinkContainer></li>
                        <li className="item">
                            <LinkContainer to='/terms'>
                                <Nav.Link className="nav-link waves-effect">Chính sách</Nav.Link>
                            </LinkContainer>
                        </li>
                    </ul>
                </Nav>

                <ul className="navbar-nav nav-flex-icons">
                    <li className="nav">
                        <LinkContainer to='/cart'>
                            <Nav.Link className="nav-link waves-effect">
                                <CartQuantity cartQuantity={cartQuantity} />
                                <i className="fas fa-shopping-cart"></i>
                                <span className="clearfix d-none d-sm-inline-block"> Giỏ hàng </span>
                            </Nav.Link>
                        </LinkContainer>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.facebook.com/" className="nav-link waves-effect" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://twitter.com/" className="nav-link waves-effect" target="_blank">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link border border-light rounded waves-effect">
                            <i className="fab fa-github mr-2"></i>Tài khoản
                        </a>
                    </li>
                </ul>
            </div>
        </Navbar>
    )
};

export default Header;