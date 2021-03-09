import { Component } from "react";

class MovieDeets extends Component {
  render() {
    return (
      <div>
        <h2>The Lord of the Rings: {this.props.title} </h2>
        <p>
          {this.props.hours}h {this.props.minutes}min
        </p>
      </div>
    );
  }
}

export default MovieDeets;
