import '../App.css';
import { useState } from 'react';

function PokemonCard({ pokemonList }) {
    return (
        <div className="cardContainer">
            {pokemonList.map((pokemon, index) => (
                < div key={index} >
                    < figure className='card' style={{ backgroundColor: pokemon.color }}>
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