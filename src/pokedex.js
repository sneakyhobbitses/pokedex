import ReactDOM from 'react-dom';
import React from 'react';
import './pokedex.css';
import { type } from '@testing-library/user-event/dist/type';

class Pokedex extends React.Component {
    render() {
        const pokemon = [
            { id: 1, pokemonName: 'eevee', type: 'normal', hiddenAbility: 'anticipation' },
            { id: 2, pokemonName: 'vaporeon', type: 'water', hiddenAbility: 'hydration' },
            { id: 3, pokemonName: 'jolteon', type: 'electric', hiddenAbility: 'quick feet' },
            { id: 4, pokemonName: 'flareon', type: 'fire', hiddenAbility: 'guts' },
            { id: 5, pokemonName: 'espeon', type: 'psychic', hiddenAbility: 'magic bounce' },
            { id: 6, pokemonName: 'umbreon', type: 'dark', hiddenAbility: 'inner focus' },
            { id: 7, pokemonName: 'leafeon', type: 'grass', hiddenAbility: 'chlorophyll' },
            { id: 8, pokemonName: 'glaceon', type: 'ice', hiddenAbility: 'ice body' },
            { id: 9, pokemonName: 'sylveon', type: 'fairy', hiddenAbility: 'pixelate' }
        ];
        const pokemonData = pokemon.map(p => (<p>{p}</p>));
        return (
            <div className='Pokemon'>
                <p>=(^O.O^)=</p>
                <p>~~~~~~~~~~~~~~~~~~~~~~</p>
                <p>{pokemonData}</p>
            </div>
        );
    }
}

export default Pokedex;