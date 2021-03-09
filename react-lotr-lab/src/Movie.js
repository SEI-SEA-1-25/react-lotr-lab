import {Component} from 'react'

/// Define compenent 
class Movie extends Component {
    //UI render
    render() {
        return(
            <div>
                <h1>Lord Of The Rings: {this.props.title}</h1>
                <p>{this.props.hours}h {this.props.minutes} </p>
            </div>
        )
    }
}


export default Movie