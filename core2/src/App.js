import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter(props) {
 const [count,setCount] = useState(0);
const handleIncrease = () => setCount(count+1);
const handleDecrease = () => setCount(count-1);
  return(
    <div>
      <h1>Count : {count} </h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

export default App;
