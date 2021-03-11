import React from 'react'
import { Component } from 'react'

class Movie extends Component {
    render () {
        return (
            <div class="Movie">   
               <h1>Lord of the Rings: {this.props.title}</h1> 
               <p>{this.props.hour} {this.props.min}</p>
            </div>
        ) 
    }
}


export default Movie;