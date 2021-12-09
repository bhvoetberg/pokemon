import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Pokemon from "./components/Pokemon";


function App() {
    const [pokemonData, setPokemonData] = useState('');
    const [endPoint, setEndPoint] = useState('https://pokeapi.co/api/v2/pokemon');

    useEffect(() => {
        async function getPokemonList() {
            try {
                const result = await axios.get(endPoint);
                setPokemonData(result.data);
                // setEndPoint(result.data.next);
                console.log(result);
                // console.log(endPoint);
            } catch (e) {
                console.error(e);
            }
        }
        getPokemonList();

    }, [endPoint]);


    return (
        <>
            <h1>PoKeMoN!</h1>
            <p>Endpoint = {endPoint}</p>
            <p>NextEndpoint = {pokemonData.next}</p>

            <nav>
                <button type="button" name="back" onClick={() => setEndPoint(pokemonData.previous)}>Vorige</button>
                <button type="button" name="forward" onClick={() => setEndPoint(pokemonData.next)}>Volgende</button>
            </nav>
            <div className="pokemon-list">
                {pokemonData &&
                    pokemonData.results.map((pokemon) => {
                        return <Pokemon pokemon={pokemon.name}/>
                    })}
            </div>
        </>
    )
}

export default App;
