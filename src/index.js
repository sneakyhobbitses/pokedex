import ReactDOM from 'react-dom';
import React from 'react';
import Pokecard from './pokecard';
import Pokedex from './pokedex';
import './pokedex.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>POKEDEX</h1>
                <p><Pokecard
                    id='133' /></p>
            </div>
        )
    }
}

console.log('henlo');
ReactDOM.render(<App />, document.getElementById('root'));