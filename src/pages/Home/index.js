import React, { Component } from "react";
import Data from "../../components/data";
import Navbar from "./navbar";
// import Paging from "./paging";
import Product from "../../components/product-item";
import Control from "./Control";
import { getData, getProducts } from "../../services/product";
import { connect } from "react-redux";
import PaginationDemo from "./PaginationDemo";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: null,
      sortOrder: 1,
      selectedPage: 1,
      data: {
        products: [],
        numOfPages: 0
      }
    };
  }

  componentDidMount() {
    const pageSize = 8;
    let { keyword } = this.props;
    let { sortBy, sortOrder, selectedPage } = this.state;
    getProducts(keyword, sortBy, sortOrder, selectedPage, pageSize).then(data => {
      this.setState({ data })
    })
  }

  onSort = (sortBy, sortOrder) => {
    this.setState({
      sortBy,
      sortOrder
    });
  };

  render() {
    // let { keyword } = this.props;
    // let { sortBy, sortOrder, selectedPage } = this.state;

    // let productData = getData(keyword, sortBy, sortOrder);

    // // Need to refactor
    // const pageSize = 8;
    // const filteredProducts = productData.slice((selectedPage - 1) * pageSize, selectedPage * pageSize);

    const data = this.state.data;
    const numOfPages = data.numOfPages;
    // Data lower than function
    let products = data.products.map(e => <Product data={e} key={e.id} />);

    return (
      <main style={{ marginTop: 100 }}>
        <div className="container">
          {/* <Navbar /> */}
          <Control onSort={this.onSort} />
          <section className="text-center mb-4">
            <div id="product" className="row wow fadeIn">
              {products}
            </div>
          </section>
          {/* <Paging /> */}
          <PaginationDemo pages={numOfPages} onPageSelected={(page) => {
            // Reload products by page
            this.setState({
              selectedPage: page
            })
          }} />
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    keyword: state.Control.keyword
  };
};

export default connect(mapStateToProps)(Home);
