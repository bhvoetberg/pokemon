import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import PokemonCard from "./components/PokemonCard";

function App() {
    const [pokemonData, setPokemonData] = useState('');
    const [endPoint, setEndPoint] = useState('https://pokeapi.co/api/v2/pokemon');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getPokemonData() {
            setLoading(true);
            try {
                const result = await axios.get(endPoint);
                setPokemonData(result.data);
            } catch (e) {
                console.error(e);
            }
            setLoading(false);
        }
        getPokemonData();


    }, [endPoint]);

    return (
        <>
            <h1>PoKeMoN!</h1>

            <nav>
                <button type="button" disabled={!pokemonData.previous} name="back" onClick={() => setEndPoint(pokemonData.previous)}>Vorige</button>
                <button type="button" disabled={!pokemonData.next} name="forward" onClick={() => setEndPoint(pokemonData.next)}>Volgende</button>
            </nav>

            {loading && <h3><em>We komen er aan, even geduld! ...</em></h3>}

            <div className="pokemon-list">
                {pokemonData &&
                    pokemonData.results.map((pokemon) => {
                        return <PokemonCard key={pokemon.name} endPoint={pokemon.url}/>
                    })}
            </div>
        </>
    )
}

export default App;
