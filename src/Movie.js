import React, { Component } from 'react';

class Movie extends Component {
    render() {
        return (
            <div>
                <h1>Lord of the Rings: {this.props.movie.subtitle} </h1>
                <p>{this.props.movie.runtime.hour} hrs {this.props.movie.runtime.minute} mins</p>
            </div>
        );

    }
}

// console.log(this.props.movie)
export default Movie;