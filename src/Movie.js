import { Component } from 'react'

class Title extends Component {
  render(){
    return (
      <h2>Lord of the Rings: {this.props.title}</h2>
    )
  }
}

class Movie extends Component {
  render(){
    return (
      <div>
        <Title title={this.props.title}/>
        <p>{this.props.hours}h {this.props.minutes}min</p>
      </div>

    )
  }
}

export default Movie;