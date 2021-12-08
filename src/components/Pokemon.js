import React from 'react';

const Pokemon = ({pokemonData}) => {
    // const [pokemonData, setPokemonData] = useState('');

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
};

export default Pokemon;