import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Pokemon from "./components/Pokemon";


function App() {
    const [pokemonList, setPokemonList] = useState('');
    const [endPoint, setEndPoint] = useState('https://pokeapi.co/api/v2/pokemon');

    useEffect(() => {
        async function getPokemonList() {
            try {
                const result = await axios.get(endPoint);
                setPokemonList(result.data.results);
                console.log(result);
            } catch (e) {
                console.error(e);
            }
        }
        getPokemonList();
        console.log(pokemonList);
    }, [])

    return (
        <div className="pokemonList">
            {pokemonList &&
                pokemonList.map((pokemon) => {
                    return <Pokemon pokemon={pokemon.name}/>
            })}
        </div>
    );
}

export default App;
