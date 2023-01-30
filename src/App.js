import './App.css';
import Countries from './components/Countries/Countries';
import Country from './components/Country/Country';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      {/* <Country></Country> */}
    </div>
  );
}

// function LoadCountries(){
//   const [countries, setCountries] = useState([]);
//   useEffect( () => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[])
//   return (
//     <div>
//       <h1>Visiting Every Country ......</h1>
//       <h3>Available Countries : {countries.length}</h3>
//     </div>
//   )
// }
export default App;
