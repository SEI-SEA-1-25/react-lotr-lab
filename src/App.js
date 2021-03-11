import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "The Fellowship of the Ring",
    hour: "2h",
    min: "58min"
  }, 
  {
    title: "The Two Towers",
    hour: "2h",
    min: "59min"
  },
  {
    title: "The Return of the King",
    hour: "3hr",
    min:  "21min"
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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {movies.map((movie) => <Movie title={movie.title} hour={movie.hour} min={movie.min}/>)}
        {/* <Movie 
          title={movies[0].title}
          hour={movies[0].hour}
          min={movies[0].min}
        />
        <Movie 
          title={movies[1].title}
          hour={movies[1].hour}
          min={movies[1].min}
        />
        <Movie 
          title={movies[2].title}
          hour={movies[2].hour}
          min={movies[2].min}
        /> */}
      </header>
        
    </div>
  );
}

export default App;
