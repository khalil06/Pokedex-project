import React,{ Component } from "react";
import './Pokecard.css'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component{
    render(){
        const { id, name, type, base_experience } = this.props.poke;
        //const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        let imgUrl = `${POKE_API}${padToThree(id)}.png`;
        return(
            <div class="Pokecard">
                <h2>{name}</h2>
                <img src={imgUrl} class="Pokecard-img"/>
                <p>Type : {type}</p>
                <p>Exp : {base_experience}</p>
            </div>
        );
    }
}

export default Pokecard;