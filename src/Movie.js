import React, { Component } from 'react';

class Movie extends Component {
    render() {
        return(
            <div class="lotr-style">
                <h1>{this.props.title}</h1>
                <p>{this.props.hours}h {this.props.minutes}min</p>
            </div>
        )
    }
}

export default Movie;