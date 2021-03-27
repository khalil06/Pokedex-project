import React, {Component} from 'react';
import Pokecard from './Pokecard';
import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends Component{
    render(){
        return(
            <div className="Pokedex">
                <h1>Pokedex</h1>
                <div class="Pokedex">
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