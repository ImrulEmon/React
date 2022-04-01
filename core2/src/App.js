import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}


function User(props) {
  return(
    <div className='user'>
      <h3>Name : {props.name}</h3>
      <p>Email : {props.email}</p>
    </div>
  )
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

function ExternalUsers() {
  const[users,setUsers]=useState([]);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  return(
    <div>
      <h3>External Users</h3>
      {
        users.map(user =><User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}


export default App;
