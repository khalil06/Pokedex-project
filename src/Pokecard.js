import React,{ Component } from "react";
import './Pokecard.css'

class Pokecard extends Component{
    render(){
        const { id, name, type, base_experience } = this.props.poke;
        const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        return(
            <div class="Pokecard">
                <h2>{name}</h2>
                <img src={imgUrl}/>
                <p>Type : {type}</p>
                <p>Exp : {base_experience}</p>
            </div>
        );
    }
}

export default Pokecard;