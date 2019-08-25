import React, { Component } from 'react';

class MovieDetail extends Component {

  render() {
    let id = this.props.match.params.movieId
    console.log(id)
    const detailMovie=this.props.moviesData[id]
    console.log(detailMovie)

    return (
        <div id="eachMovie">
          <h1>{detailMovie.title}</h1>
          <img src={detailMovie.img} width="100px"></img>
          <div>{detailMovie.descrShort}</div>
        </div>
      )
  }

}

export default MovieDetail;
