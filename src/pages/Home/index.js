import React, { Component } from "react";
import Data from "../../components/data";
import Navbar from "./navbar";
import Paging from "./paging";
import Product from "../../components/product-item";
import Control from "./Control";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "name",
      sortValue: 1,
      products: []
    };
  }
  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    });
  };
  componentDidMount() {
    this.setState({
      products: Data
    });
  }
  render() {
    var { sortBy, sortValue, products } = this.state;
    let element = products.map(e => {
      return <Product data={e} key={e.id} />;
    });
    if (sortBy === "name") {
      products.sort((a, b) => {
        if (a.name > b.name) return sortValue;
        else if (a.name < b.name) return -sortValue;
        else return 0;
      });
    }
    else if(sortBy === "price") {
      products.sort((a, b) => {
        if (a.price > b.price) return sortValue;
        else if (a.price < b.price) return -sortValue;
        else return 0;
      });
    }
    return (
      <main style={{ marginTop: 100 }}>
        <div className="container">
          <Navbar />
          <Control onSort={this.onSort} sortBy={sortBy} sortValue={sortValue}  />
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
