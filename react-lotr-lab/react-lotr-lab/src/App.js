import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
    {
    title: "Fellowhip of the Ring",
    hours: 2,
    minutes: 58,
  },
  {
    title: "Fellowship of the Ring",
    hours: 2,
    minutes: 59,

  },
  {
    title: "Return of the King",
    hours: 3,
    minutes: 22,

  }
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {movies.map((movie) => <Movie title={movie.title} hours={movie.hours} minutes={movie.minutes}/>)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
