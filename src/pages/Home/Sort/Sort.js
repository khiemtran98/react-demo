import React, { Component } from "react";
class Sort extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="dropdown-list">
            <button type="button" className="btn btn-sm btn-success" onClick={() =>this.props.onClick('name',1) }>
              A - Z
            </button>
            <button type="button" className="btn btn-sm btn-success" onClick={() =>this.props.onClick('name',-1) }>
              Z - A
            </button>
            <button type="button" className="btn btn-sm btn-success" onClick={() =>this.props.onClick('price',1) }>
              0$ - 999$
            </button>
            <button type="button" className="btn btn-sm btn-success" onClick={() =>this.props.onClick('price',-1) }>
              999$ - 0$
            </button>
          </div>
        </div>
      </div>
    );
  }
}



export default Sort;

