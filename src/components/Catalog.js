import React, { Component } from 'react';
import Movie from './Movie';

class Catalog extends Component {
    constructor() {
        super()
        this.state = {}
    }
 
    render() {
        return (
        <div id="catalog">
            <input placeholde="Serach" type="text"></input>
            <Movie moviesData={this.props.moviesData} notRented={this.props.notRented} isRented={this.props.isRented} />
        </div>
        )
    }

}

export default Catalog;
