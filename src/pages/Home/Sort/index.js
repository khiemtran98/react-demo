import React, { Component } from "react";
import Sort from './Sort';

class SortContainer extends Component {
  render() {
    return <Sort onClick={(sortBy, sortOrder) => {
      this.props.onSort(sortBy, sortOrder);
    }} />;
  }
}

export default SortContainer;
