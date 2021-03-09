import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Movie from "./App";
import reportWebVitals from "./reportWebVitals";

const movieName = "The Lord Of The Rigs:";

ReactDOM.render(
  <React.StrictMode>
    <Movie
      movOne={movieName.movOne}
      movTwo={movieName.movTwo}
      movThree={movieName.movThree}
      movFour={movieName.movFour}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
