import React from 'react';
import './pokeCard.css';
import PokeBall from '../ball.svg'

function PokeCard({ pokemon }) {
    const type_Colors = {
        normal: 'A8A878',
        fighting: 'C03028',
        flying: 'A890F0',
        poison: 'A040A0',
        ground: 'E0C068',
        rock: 'B8A038',
        bug: 'A8B820',
        ghost: '705898',
        steel: 'B8B8D0',
        fire: 'F08030',
        water: '6890F0',
        grass: '729F3F',
        electric: 'F8D030',
        psychic: 'F85888',
        ice: '98D8D8',
        dragon: '7038F8',
        dark: '705848',
        fairy: 'F8D030'
    }
    return (
        <div className="container">
            <div className="card">
                <div className="card-img">
                    <img src={pokemon.sprites.other['official-artwork']['front_default']}/>
                </div>
                <div className="card-name">
                    {pokemon.name}
                </div>
                <div className="card-types">
                    {pokemon.types.map(type => {
                        return (
                            <div className="card-type">
                                <div
                                    className="card-Type-Color" 
                                    style={{backgroundColor: `#${type_Colors[type.type.name]}`, color: 'white'}}
                                >
                                    {type.type.name}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="card-info">
                    {/* <div className="weight">
                        <p className= "title">Weight</p>
                        <p>{pokemon.weight}</p>
                    </div>
                    <div className="height">
                        <p className= "title">Height</p>
                        <p>{pokemon.height}</p>
                    </div>
                    <div className="ability">
                        <p className= "title">Ability</p>
                        <p>{pokemon.abilities[0].ability.name}</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default PokeCard;