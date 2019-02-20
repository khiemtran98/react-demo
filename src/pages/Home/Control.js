import React, { Component } from 'react';
import Sort from './Sort';

class Control extends Component {

    render() {
        
        return (
            <div>
            <Sort onSort = {this.props.onSort}
            sortBy = {this.props.sortBy}
            sortValue = {this.props.sortValue}
            />
            </div>
        )
    }
}

export default Control;