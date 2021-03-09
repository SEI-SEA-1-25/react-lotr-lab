import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        [
        <Movie title={"Fellowship of the Ring"} hours={3} minutes={48} />
        <Movie title={"The Two Towers"} hours={3} minutes={43} />
        <Movie title={"Return of the King"} hours={4} minutes={11} />
        ]
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
