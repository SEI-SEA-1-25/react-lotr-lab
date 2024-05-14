import React from 'react'
import { Component } from 'react'


class Movie extends Component {
    render() {
        return (
            <div class="styling">
                <h3>Lord of the Rings: {this.props.title}</h3>
                <p>{this.props.hours}h {this.props.minutes}min</p>
            </div>
        )
    }
}






export default Movie;