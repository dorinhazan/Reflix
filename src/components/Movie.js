import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Movie extends Component {
    isRented = (e) => {
        this.props.isRented(e.target.id)
    }
    notRented = (t) => {
        this.props.notRented(t.target.id)
    }
    render() {
        const moviesNotRented = this.props.moviesData.filter(l => l.isRented === false)

        let movie = moviesNotRented.map(m => {
            return (
                <div class="eachMovie">
                        <div id="title">{m.title}
                        </div>
                    <Link to={`/movies/${m.id}`}><img src={m.img} width="200px"></img></Link><br></br>
                    <i id={m.id} className="complete" onClick={this.isRented} class="fas fa-plus"></i>

                    </div>
            )
        })
        const moviesRented = this.props.moviesData.filter(r => r.isRented === true)

        let rentedMovie = moviesRented.map(l =>
            <div class="rentedMovie">
                <div id="title2">{l.title}</div>
                <Link to={`/movies/${l.id}`}>
                <img src={l.img} width="200px"></img>
                </Link><br></br>
                <i className="complete" id={l.id} onClick={this.notRented} class="fas fa-minus"></i>
            </div>)

        return (
            <div class="movie">
                <div> Catalog<div> {movie}</div></div>
                <div> Rented <div>{rentedMovie}</div></div>
            </div>
        )

    }
}

export default Movie;
