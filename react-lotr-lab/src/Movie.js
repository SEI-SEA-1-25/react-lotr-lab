import {Component} from 'react'


// Define our component
class Movie extends Component {
  // Tell it to render some UI using the render method
  render() {
    return (
      <div>
        <h1>Lord of The Rings</h1>
        <p>{this.props.hours}m {this.props.minutes}m</p>
      </div>
    )
  }
    
}



export default Movie