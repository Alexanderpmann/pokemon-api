import axios from 'axios';
import { useEffect, useState } from 'react';


const ApiCall = props => {
    const [pokemon, setPokemon] = useState(null);
    const [inputpokemon, setInputPokemon] = useState("")
    const [apiPokemon, setApiPokemon] = useState("charizard")
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + apiPokemon)
            .then(res => {
                setError(null)
                setPokemon(res.data)
            })
            .catch(err => setError(err))
    }, [apiPokemon])
    //  ^ This is called a dependency array and what it does is any time something in that array changes it triggers useEffect
    // However, if you FORGET to put an array in there (even an empty one) the useEffect will call infinitely!
    
    const shinyPokemon = e => {
        e.preventDefault();
        setApiPokemon(inputpokemon);
        setError(null);
    }

const pokeStyle = {
    backgroundColor: "crimson",
    color: "ghostwhite",
    padding: "5px",
    border: "2px solid black",
    boxShadow: "5px 5px 20px black",
}

    return(
        <div style={pokeStyle}>
            <h2>Shiny Pokedex</h2>
            <hr/>
            <input type="text" name="newPokemon" onChange ={(e) => setInputPokemon(e.target.value)}/>
            <input type="submit" value="Search PokeDex" onClick={shinyPokemon} />
            <br/>
            <br/>
            { 
                error ? <h3>Error, please try again</h3> : pokemon ? <>
                <img src={pokemon.sprites.front_shiny} alt="Shiny front sprite" />
                <img src={pokemon.sprites.back_shiny} alt="Shiny back sprite" />
                <h3>Shiny Hunting Results: {pokemon.name}</h3>
                </> : ""
            }
        </div>
    );
}

export default ApiCall;