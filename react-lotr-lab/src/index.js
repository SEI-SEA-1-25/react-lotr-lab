import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Movie from './Movie'

let movieArray = []
class MovieObject{
  constructor(title, hours, minutes){
    this.title = title
    this.hours = hours
    this.minutes = minutes
    movieArray.push(this)
  }
}
new MovieObject("The Lord of the Rings: The Fellowship of The Ring",2,58)
new MovieObject("The Lord of the Rings: The Two Towers",2,59)
new MovieObject("The Lord of the Rings: The Return of The King",3,21)

console.log(movieArray)

const moviesReadyToRender = movieArray.map(movieObj =>{
  return <Movie title={movieObj.title} hours={movieObj.hours} minutes={movieObj.minutes}></Movie>
})
console.log(moviesReadyToRender)

ReactDOM.render(
  <React.StrictMode>
  {moviesReadyToRender}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
