import React, { Component } from "react";
import Sort from "./Sort";
import Search from "./Search";
class Control extends Component {
  // onSearch = key => {
  //   this.props.onSearch(key);
  // };

  render() {
    return (
      <div>
        <Search />
        <Sort onSort={this.props.onSort} />
      </div>
    );
  }
}

export default Control;
