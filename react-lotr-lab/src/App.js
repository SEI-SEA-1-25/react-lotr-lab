import logo from "./logo.svg";
import "./App.css";
import MovieDeets from "./MovieDeets.js";
import Title from "./Title";

const movieOne = {
  title: "The Fellowship of the Ring",
  hours: 2,
  minutes: 58,
};

const movieTwo = {
  title: "The Two Towers",
  hours: 2,
  minutes: 59,
};

const movieThree = {
  title: "The Return Of The King",
  hours: 3,
  minutes: 21,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <img src={logo} className="App-logo" alt="logo" />

        <MovieDeets
          title={movieOne.title}
          hours={movieOne.hours}
          minutes={movieOne.minutes}
        />
        <MovieDeets
          title={movieTwo.title}
          hours={movieTwo.hours}
          minutes={movieTwo.minutes}
        />
        <MovieDeets
          title={movieThree.title}
          hours={movieThree.hours}
          minutes={movieThree.minutes}
        />
      </header>
    </div>
  );
}

export default App;
