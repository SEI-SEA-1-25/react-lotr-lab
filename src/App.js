import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const rings1 = {
  title: "The Fellowship of the Ring",
  hour: "2h",
  min: "58min"
}
const rings2 = {
  title: "The Two Towers",
  hour: "2h",
  min: "59min"
}
const rings3 = {
  title: "The Return of the King",
  hour: "3hr",
  min:  "21min"
}
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
        <Movie 
          title={rings1.title}
          hour={rings1.hour}
          min={rings1.min}
        />
        <Movie 
          title={rings2.title}
          hour={rings2.hour}
          min={rings2.min}
        />
        <Movie 
          title={rings3.title}
          hour={rings3.hour}
          min={rings3.min}
        />
      </header>
        
    </div>
  );
}

export default App;
