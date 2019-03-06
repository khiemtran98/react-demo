import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PaginationDemo extends Component {
    static propTypes = {
        pages: PropTypes.number.isRequired,
        onPageSelected: PropTypes.func.isRequired
    }

    state = {
        selectedPage: 1
    }

    render() {
        const items = [];
        const defaultStyle = {
            display: 'inline-block',
            width: '40px',
            height: '40px',
            border: '1px solid #212121',
            fontSize: '20px',
            color: 'white',
            textAlign: 'center'
        }

        const defaultItemBg = '';
        const defaultItemColor = 'black';
        const selectedCellBg = '#007bff';
        const selectedItemColor = 'white';

        const handleItemcClick = (page) => {
            this.setState({
                selectedPage: page
            });

            this.props.onPageSelected(page);
        }

        for (let i = 0; i < this.props.pages; i++) {
            items.push(<div style={{ ...defaultStyle, background: this.state.selectedPage === i + 1 ? selectedCellBg : defaultItemBg, color: this.state.selectedPage === i + 1 ? selectedItemColor : defaultItemColor }}
                onClick={() => handleItemcClick(i + 1)}>{i + 1}</div>);
        }

        return <div className="row" style={{ justifyContent: 'center' }}>
            {items}
        </div>
    }
}
