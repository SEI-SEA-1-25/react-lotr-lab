import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js';

class App extends Component {

  render() {
    const movies = [{
      subtitle: "The Fellowship of the Ring",
      runtime: {
        hour: 2,
        minute: 58
      }
    }, {
      subtitle: "The Two Towers",
      runtime: {
        hour: 2,
        minute: 59
      }
    }, {
      subtitle: "The Return of the King",
      runtime: {
        hour: 3,
        minuts: 21
      }
    }];

    const movieComponents = movies.map(movie => {
      return <Movie movie={movie} />
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {movieComponents}
        </header>
      </div>
    );
  }
}

export default App;