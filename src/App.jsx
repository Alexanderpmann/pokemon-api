import './App.css';
import ApiCall from './components/ApiCall';
import 'bootstrap/dist/css/bootstrap.css';
// import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="App">
      <h1>Poke Api</h1>
      <ApiCall/>
    </div>
  );
}

export default App;
