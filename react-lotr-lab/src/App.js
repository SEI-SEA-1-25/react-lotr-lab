import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movie1 = {
 title:"Fellowship of the Ring",
 hours: 2,
 minutes: 58,
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Movie title={movie1.title} hours={movie1.hours} minutes={movie1.minutes}/>
        <Movie title={"The Two Towers"} hours={2} minutes={59}/>
        <Movie title={"Return of the Ring"} hours={3} minutes={22}/>  
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
