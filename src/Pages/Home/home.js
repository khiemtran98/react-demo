import React, { Component } from 'react';
import Product from '../../components/product-item';
import Data from '../../components/data';

class Home extends Component {
    render() {
        let products = [];
        Data.forEach(element => {
            products.push(<Product data={element} />)
        });
        return (
            <div>
                <main>
                    <div className="container">

                        <nav className="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5">

                            <span className="navbar-brand">Categories:</span>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                                aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="basicExampleNav">

                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">All
                                <span className="sr-only">(current)</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Shirts</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Sport wears</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Outwears</a>
                                    </li>

                                </ul>

                                <form className="form-inline">
                                    <div className="md-form my-0">
                                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                    </div>
                                </form>
                            </div>

                        </nav>

                        <section className="text-center mb-4">

                            <div id="product" className="row wow fadeIn">
                                {products}
                            </div>

                        </section>

                        <nav className="d-flex justify-content-center wow fadeIn">
                            <ul className="pagination pg-blue">

                                <li className="page-item disabled">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>

                                <li className="page-item active">
                                    <a className="page-link" href="#">1
                            <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">3</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">4</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">5</a>
                                </li>

                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </main>
            </div>
        )
    }
}

export default Home;