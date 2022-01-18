import ReactDOM from 'react-dom';
import React from 'react';
import Pokedex from './pokedex';
import pokemon from './pokedex.css';

class Pokecard extends React.Component {
    render() {
        return (
            <div className="Pokecard">
                <p>{<Pokedex />}</p>
            </div>
        )
    }
}

export default Pokecard;

//component naming convention = capitalize first letter!!!