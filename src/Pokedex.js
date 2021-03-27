import React, {Component} from 'react';
import Pokecard from './Pokecard';
import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends Component{
    render(){
        return(
            <div className="Pokedex">
                    <div class="Pokedex-navbar">
                    <ul class="Pokedex-navbar">
                        <li class="Pokedex-navitem"><h1>Home</h1></li>
                        <li class="Pokedex-navitem"><h1>Play</h1></li>
                        <li class="Pokedex-navitem"><h1>About</h1></li>
                        <li class="Pokedex-navitem"><h1>Pokedex</h1></li>
                    </ul>

                    </div>
                <div class="Pokedex-components">
                    {Pokemon.map(Poke => 
                        <Pokecard
                        poke={Poke}
                        />
                    )}
                </div>
            </div>
        )
    }
}
export default Pokedex;
                        // name ={Poke.name}
                        // id ={Poke.id}
                        // type={Poke.type}
                        // base_experience={Poke.base_experience}