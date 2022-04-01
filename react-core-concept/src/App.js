import logo from './logo.svg';
import './App.css';

function App() {
  let number = 50000;
  const singer={
    name : 'Mr Fox',
    job : 'musician'
  }
  const singerStyle ={
    color : "#61DAFB",
    fontStyle : "italic",
    fontFamily:"monospace"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={singerStyle} className="container">
          <p style={{color:"white"}}>I am here</p> 
          <p>My number = {number+12}</p>
          <p>Singer : {singer.name} | Job : {singer.job.toUpperCase()}</p>
        </div>
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
