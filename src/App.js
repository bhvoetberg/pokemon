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
            <Pokemon pokemonData={pokemonData}/>
        </div>
    );
}

export default App;
