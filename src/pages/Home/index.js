import React, { Component } from 'react';
import Data from '../../components/data';
import Navbar from './navbar';
import Paging from './paging';
import Product from '../../components/product-item';

class Home extends Component {
    render() {
        let products = [];
        Data.forEach(element => {
            products.push(<Product data={element} />)
        });
        return (
            <main style={{ marginTop: 70 }}>
                <div className="container">
                    <Navbar />
                    <section className="text-center mb-4">
                        <div id="product" className="row wow fadeIn">
                            {products}
                        </div>
                    </section>
                    <Paging />

                </div>
            </main>
        )
    }
}

export default Home;