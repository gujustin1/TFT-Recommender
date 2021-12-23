import './App.css';
import FilterableProductTable from './Components/FilterableProductTable';
//import ItemTable from "./Components/ItemTable"
//import FilterableProductTable from './Components/FilterableProductTable';

/*fetch('localhost:3000/getRecommenders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    item: "New Item"
  })
}).then(res => {
  res.json()
}).then(data => console.log(data))
.catch(error => console.log('ERROR'))*/

  /*fetch('http://localhost:3000/recommendChamps/Infinity Edge')
  .then(res => res.json())
  .then((data) => {
      console.log(data);
  })
  .catch(error => console.log("ERROR"));*/

function App(){
  return (
    <div className="App">
    <h1>Team Fight Tactics Champion Recommender</h1>
    <div className="App">
      <FilterableProductTable/>
    </div>
    </div>
  );

}
  
export default App;
