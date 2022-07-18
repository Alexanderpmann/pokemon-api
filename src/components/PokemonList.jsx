import { useState } from 'react'
import axios from 'axios'

const PokemonList = () => {
  // set up state variables
  const [pokemonList, setPokemonList] = useState([])
  const [numberOfPokemon, setNumberOfPokemon] = useState(0)

  // function to get pokemon data when called
  const getPokemon = () => {
    console.log('starting fetch to get pokemon')
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0')
      .then(convertedResponse => {
        console.log('pokemon convertedResponse data:', convertedResponse)
        setPokemonList(convertedResponse.data.results) // sets the list of pokemon to the pokemonList state
        // set the number of pokemon to the number of pokemon in the list
        setNumberOfPokemon(convertedResponse.data.count)
      })
      .catch(error => {
        // if there is an error
        console.log('=== We have a Pokemon ERROR ===:', error)
      })
  }

  const pokeStyle2 = {
    backgroundColor: "crimson",
    color: "gold",
    padding: "5px",
    border: "2px solid black",
    boxShadow: "2px 2px 1px black",
    margin: "3px",
}

const pokeStyle3 = {
  backgroundColor: "darkslategray",
  color: "ghostwhite",
  padding: "5px",
  border: "2px solid crimson",
  boxShadow: "5px 5px 20px darkslategray",
}

  return (
    <div style={pokeStyle3} className='container' onClick={getPokemon}>
      <button className='btn btn-outline-white btn-danger shadow-sm border border-2px mt-2 mb-3 p-2'>
        Click to See Full List of Pokemon!
      </button>
      <h4>Pokemon Registered in Dex: {numberOfPokemon}</h4>
      <hr />

      {pokemonList.map((pokemon, index) => {
        return (
          <div style={pokeStyle2} className='' key={index}>
            <h4>{pokemon.name}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default PokemonList