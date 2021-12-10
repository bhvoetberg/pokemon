import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './PokemonCard.css'


const PokemonCard = ({ endPoint }) => {
    const [pokemonDetails, setPokemonDetails] = useState('');

    useEffect(() => {
        async function getPokemonData() {
            try {
                const result = await axios.get(endPoint);
                setPokemonDetails(result.data);
            } catch (e) {
                console.error(e);
            }
        }
        getPokemonData();
    }, [])


    return (
        <div className="pokemon-card">
            {pokemonDetails && <>
                <h2>{pokemonDetails.name.toUpperCase()}</h2>
                <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name}/>
                <h3><strong>Moves: </strong> {pokemonDetails.moves.length}</h3>
                <h3><strong>Weight: </strong> {pokemonDetails.weight}</h3>
                <h3><strong>Abilities: </strong></h3>
                <ul>
                    {pokemonDetails.abilities.map((pokemon, index) => {
                        return <li key={index}> {pokemon.ability.name}</li>
                    })}
                </ul>
            </>
            }
        </div>
    );
};

export default PokemonCard;