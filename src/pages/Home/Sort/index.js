import React, { Component } from "react";
import Sort from './Sort';
class index extends Component {
  render() {
    return <Sort onClick={(sortBy, sortValue) => {
        this.props.onSort(sortBy, sortValue);
      }}/>;
  }
}

export default index;
