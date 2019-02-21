import React, { Component } from "react";
import categories from './categories';
class index extends Component {
  render() {
    return <categories onClick={(sortBy, sortValue) => {
        this.props.onSort(sortBy, sortValue);
      }}/>;
  }
}

export default index;
