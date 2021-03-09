import React from 'react'
import { Component } from 'react'

class Movie extends Component {
    render () {
        return (
            <div class="Movie">   
               <h1>{this.props.title}</h1> 
               <p>{this.props.runtime}</p>
            </div>
        ) 
    }
}


export default Movie;