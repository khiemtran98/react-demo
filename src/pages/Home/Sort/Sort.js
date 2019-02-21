import React, { Component } from "react";
class Sort extends Component {
  render() {
    return (
      <div>
        
          <div className="dropdown" style={{marginLeft:743}}>
            <button type="button" className="btn btn-sm btn-success" onClick={() =>this.props.onClick('name',1) }>
              A -> Z
            </button>
            <button type="button" className="btn btn-sm btn-success" onClick={() =>this.props.onClick('name',-1) }>
              Z -> A
            </button>
            <button type="button" className="btn btn-sm btn-success" onClick={() =>this.props.onClick('price',1) }>
              0 -> 9
            </button>
            <button type="button" className="btn btn-sm btn-success" onClick={() =>this.props.onClick('price',-1) }>
              9 -> 0
            </button>
            
          </div>
       
      </div>
    );
  }
}



export default Sort;

