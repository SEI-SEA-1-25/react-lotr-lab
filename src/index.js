import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Movie from './Movie';
import reportWebVitals from './reportWebVitals';

const property = {
  title: [
    "The Fellowship of the Ring",
    "The Two Towers",
    "The Return of the King"
  ],
  hours: [
    "2h",
    "2h",
    "3h"
  ],
  minutes: [
    "58min",
    "59min",
    "21min"
  ]
}

ReactDOM.render(
  <React.StrictMode>
    <Movie title={property.title[0]} 
           hours={property.hours[0]} 
           minutes={property.minutes[0]}
    />
    <Movie title={property.title[1]} 
           hours={property.hours[1]} 
           minutes={property.minutes[1]}
    />
    <Movie title={property.title[2]} 
           hours={property.hours[2]} 
           minutes={property.minutes[2]}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
