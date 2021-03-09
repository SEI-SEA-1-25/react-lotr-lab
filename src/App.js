import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

const Fellowship = {
  title: "The Fellowship of the Ring",
  hours: 2,
  minutes: 58
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Movie title={Fellowship.title} hours={Fellowship.hours} minutes={Fellowship.minutes} />
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
