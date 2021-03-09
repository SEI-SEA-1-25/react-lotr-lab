import { Component } from 'react';

class Movie extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.hours} hours, {this.props.minutes} minutes</p>

            </div>
        )
    }
}

export default Movie;