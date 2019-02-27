import React, { Component } from "react";
import Data from "../../components/data";
import Navbar from "./navbar";
import Paging from "./paging";
import Product from "../../components/product-item";
import Control from "./Control";
import { searchProducts } from "../../services/product";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "name",
      sortValue: 1,
      products: [],
      keyword: ""
    };
  }
  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    });
  };
  onSearch = (keyword) => {
    this.setState({
      keyword: keyword
    });
  }
  componentDidMount() {
    this.setState({
      products: Data
    });
  }
  render() {
    let { sortBy, sortValue, products, keyword, sortOrder } = this.state;
    // const products = searchProducts(keyword, sortOrder);

    if (keyword) {
      products = products.filter((data) => {
        return data.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
    }

    if (sortBy === "name") {
      products.sort((a, b) => {
        if (a.name > b.name) return sortValue;
        else if (a.name < b.name) return -sortValue;
        else return 0;
      });
    }
    else if (sortBy === "price") {
      products.sort((a, b) => {
        if (a.price > b.price) return sortValue;
        else if (a.price < b.price) return -sortValue;
        else return 0;
      });
    }
    // Data lower than function
    let element = products.map(e => {
      return <Product data={e} key={e.id} />;
    });

    return (
      <main style={{ marginTop: 100 }}>
        <div className="container">
          <Navbar />
          <div>{this.props.userName}</div>
          <Control
            onSort={this.onSort} sortBy={sortBy} sortValue={sortValue}
            onSearch={this.onSearch}
          />
          <section className="text-center mb-4">
            <div id="product" className="row wow fadeIn">
              {element}
            </div>
          </section>
          <Paging />
        </div>
      </main>
    );
  }
}

export default Home;
