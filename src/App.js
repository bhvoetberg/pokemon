import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Pokemon from "./components/Pokemon";

function App() {
    const [pokemonData, setPokemonData] = useState('');
    const [endPoint, setEndPoint] = useState('https://pokeapi.co/api/v2/pokemon/spearow');

    useEffect(() => {
        async function getData() {
            try {
                const result = await axios.get(endPoint);
                setPokemonData(result.data);
            } catch (e) {
                console.error(e);
            }
        }
        getData();
        console.log(pokemonData);
    }, [])

    return (
        <div>
            {pokemonData && <>
                <h2>{pokemonData.name}</h2>
                <img src={pokemonData.sprites.front_default} alt={pokemonData.name}/>
                <h3><strong>Moves: </strong> {pokemonData.moves.length}</h3>
                <h3><strong>Weight: </strong> {pokemonData.weight}</h3>
                <h3><strong>Abilities: </strong></h3>

                {pokemonData.abilities.map((pokemon) => {
                    return <li> {pokemon.ability.name}</li>
                    })}
            </>
            }
        </div>
    );
    // Pokemon(endPoint={en})

}

export default App;
