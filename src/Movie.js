import React from 'react'
import { Component } from 'react'
import './Movie.css';


class Movie extends Component {
    render() {
        return (
            <div class="container">
                <h1>Lord of the Rings: {this.props.title}</h1>
                <p>{this.props.hours} {this.props.minutes}</p> 
            </div>
        )
         
    }
}

export default Movie