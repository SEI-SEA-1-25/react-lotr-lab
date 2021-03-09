import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Movie from './Movie';
import reportWebVitals from './reportWebVitals';

const rings1 = {
  title: "The Lord of the Rings: The Fellowship of the Ring",
  runtime: "2h 58min"
}
const rings2 = {
  title: "The Lord of the Rings: The Two Towers",
  runtime: "2h 59min"
}
const rings3 = {
  title: "The Lord of the Rings: The Return of the King",
  runtime: "3hr 21min"
}
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Movie 
      title={rings1.title}
      runtime={rings1.runtime}
    />
    <Movie 
      title={rings2.title}
      runtime={rings2.runtime}
    />
    <Movie 
      title={rings3.title}
      runtime={rings3.runtime}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
