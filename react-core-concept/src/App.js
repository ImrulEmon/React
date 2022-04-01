import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </div>
  );
}
function Person() {
  const personStyle ={
    width:"50%",
    borderRadius:"10px",
    margin:"5% auto"

  }
  return (
    <div style={personStyle} className='Person'>
      <h3 style={{backgroundColor:"skyblue",borderRadius:"5px",width:'50%',margin:"2%auto"}}>Imrul Emon</h3>
      <p style={{ fontWeight: 'bold', fontStyle: "italic", color: "orange" }}>Job : Student</p>
    </div>
  )
}

export default App;
