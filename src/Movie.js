// Setting up React
import {Component} from 'react'

// Defines our component
class Movie extends Component {
 // Render some UI
 render() {
  // return some UI
  return (
  <div>
   <h1>Lord of the Rings: {this.props.title} </h1>
   <p>{this.props.hours}h {this.props.minutes}m </p>
  </div>
 )}
}

export default Movie;