import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['tom','ron','sam',"bob"];
  const movies=[
    {name:'bb',hero:'hisenbarg'},
    {name:'GOT',hero:'snow'},
    {name:'op',hero:'luffy'},
    {name:'mob',hero:'mob'}
  ]
  return (
    <div className="App">
 
        {
          movies.map(movie=><Movie name={movie.name} hero={movie.hero}></Movie>)
        }
     
      <Movie name={movies[0].name} hero={movies[0].hero}></Movie>
      <ul>
        {
          nayoks.map(nayok=> <li>{nayok}</li>)
        }
      </ul>
       {/* <Person name={nayoks[0]} partner="emma"></Person>
      <Person name={nayoks[1]} partner="emma2"></Person>
      <Person name={nayoks[2]}  partner="emma3"></Person> 
      

      <Friend phone='01700' address='Dhaka'></Friend>
      <Friend phone='01900' address='Rangpur'></Friend>
      <Friend phone='01800' address='Sylhet'></Friend>
      <Friend phone='01500' address='Ctg'></Friend>
      <Friend phone='01600' address='Raj'></Friend>

      <Product name='olive oil' price="500$"></Product>
      <Product name='sunflower oil' price="700$"></Product>
      <Product name='soyabin oil' price="900$"></Product>
      <Product name='pum oil' price="600$"></Product> */}

    </div>
  );
}
function Person(props) {
  console.log(props);
  const personStyle = {
    width: "50%",
    borderRadius: "10px",
    margin: "5% auto"

  }
  return (
    <div style={personStyle} className='Person'>
      <h3 style={{ backgroundColor: "skyblue", borderRadius: "5px", width: '30%', margin: "2%auto" }}>{props.name}</h3>
      <p style={{ fontWeight: 'bold', fontStyle: "italic", color: "black" }}> Partner : {props.partner}</p>
    </div>
  )
}
function Friend(props) {
  console.log(props);
  return (
    <div className='Person'>
      <h3>Phone : {props.phone}</h3>
      <h4>Address : {props.address}</h4>
    </div>
  )
}

function Product(props) {
  console.log(props);
  return(
    <div className='Person'>
      <h3>Product : {props.name}</h3>
      <h4>Price : {props.price}</h4>
    </div>
  )
}

function Movie(props) {
  return(
    <div className='Person'>
      <h2>Title : {props.name}</h2>
      <h3>Hero : {props.hero}</h3>
    </div>
  )
}
export default App;
/**
 *  <Person name='tom' partner="emma"></Person>
      <Person name='tom2' partner="emma2"></Person>
      <Person name='tom3' partner="emma3"></Person> 
      
 */