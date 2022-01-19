import ReactDOM from 'react-dom';
import React from 'react';
import Pokedex from './pokedex';
import pokemon from './pokedex.css';

class Pokecard extends React.Component {
    render() {
        const eeveePokemon = { id: 133, pokemonName: 'eevee', type: 'normal', hiddenAbility: 'anticipation' };
        return (
            <div className="Pokecard">
                <p>{eeveePokemon.pokemonName}</p>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} />
                <p>{eeveePokemon.type}</p>
                <p>{eeveePokemon.hiddenAbility}</p>
            </div>
        )
    }
}

export default Pokecard;

//component naming convention = capitalize first letter!!!