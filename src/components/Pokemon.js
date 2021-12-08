import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Pokemon.css'


const Pokemon = ({pokemon}) => {
    const [pokemonData, setPokemonData] = useState('');
    const [endPoint, setEndPoint] = useState('https://pokeapi.co/api/v2/pokemon/'+pokemon);

    useEffect(() => {
        async function getPokemonData() {
            try {
                const result = await axios.get(endPoint);
                setPokemonData(result.data);
                console.log(result);
            } catch (e) {
                console.error(e);
            }
        }
        getPokemonData();
        console.log(pokemonData);
    }, [])

    return (
        <div>
            {pokemonData && <>
                <h2>{pokemonData.name.toUpperCase()}</h2>
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
};

export default Pokemon;