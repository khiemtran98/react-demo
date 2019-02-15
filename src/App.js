import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './Pages/Home/home';
import ProductDetails from './Pages/ProductDetail/product-details';
import Checkout from './Pages/Checkout/checkout';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/products/" component={ProductDetails} />
            <Route path="/checkout" component={Checkout} />
          </div>
        </Router>
        <Footer />
      </div>

    )
  }
};

export default App;