import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/products/" component={ProductDetails} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/terms" component={Terms} />
          </div>
        </Router>
        <Footer />
      </div>

    )
  }
};

export default App;