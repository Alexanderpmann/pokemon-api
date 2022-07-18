import axios from 'axios';
import {useState} from 'react'

const PokemonList = () => {
    const [pokemons, setPokemons] = useState(null)
    const [numberOfPokemon, setNumberOfPokemon] = useState(0)

    const getPokemon = () => {
        console.log("searching pokedex...")
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(res => {
                setPokemons(res.data)
                setNumberOfPokemon(res.data.count)
            })
            .catch(error => {
                console.log('there is no missing no in this dex!', error)
            })
    }

    return (
        <div className='container' onClick={getPokemon}>
            <button className='btn'>
                Generate Pokemon List
            </button>
            <h3>Pokedex Count: {numberOfPokemon}</h3>
            <hr/>

            {pokemons.map((pokemon, Pokemons) => {
                return (
                    <div className='container'>
                        <h3>{pokemon.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default PokemonList;