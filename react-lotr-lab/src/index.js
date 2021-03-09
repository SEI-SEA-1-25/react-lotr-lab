import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Movie from './Movie';
import reportWebVitals from './reportWebVitals';

const AllMovie = {
  title: [
    'The Fellowship of the Ring',
    'The Two Towers',
    'The Return of the King'
  ],

  hours: [
    2, 2, 3
  ],

  minutes: [
    58, 59, 21
  ]
}

ReactDOM.render(
  <React.StrictMode>
     <Movie title={AllMovie.title[0]} 
           hours={AllMovie.hours[0]} 
           minutes={AllMovie.minutes[0]}
    />
    <Movie title={AllMovie.title[1]} 
           hours={AllMovie.hours[1]} 
           minutes={AllMovie.minutes[1]}
    />
    <Movie title={AllMovie.title[2]} 
           hours={AllMovie.hours[2]} 
           minutes={AllMovie.minutes[2]}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
