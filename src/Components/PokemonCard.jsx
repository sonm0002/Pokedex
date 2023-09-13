import '../App.css';
import { useState } from 'react';

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        color: "lightgreen",
    },
    {
        name: "charmander",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        color: "lightsalmon",
    },
    {
        name: "squirtle",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        color: "lightblue",
    },
    {
        name: "mew",
    }
];

function PokemonCard() {
    return (
        <div className="cardContainer">
            {pokemonList.map((pokemon, index) => (
                < div key={index} >
                    <figure className='card' style={{ backgroundColor: pokemon.color }}>
                        {!pokemon.imgSrc ?
                            <p className="card-noimg" >???</p>
                            :
                            < img src={pokemon.imgSrc} alt={pokemon.name} className="card-img" />
                        }
                        <figcaption style={{ color: pokemon.imgSrc ? 'white' : 'black' }}>{pokemon.name}</figcaption>
                    </figure >
                </div>
            ))
            }
        </div >
    );
}

export default PokemonCard;