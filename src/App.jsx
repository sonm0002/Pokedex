import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Title from "./Components/Title.jsx"
import PokemonCard from './Components/PokemonCard'
import './App.css?inline'

function App() {

  return (
    <>
      <div>
        <Title />
        <div className="cardContainer">
          <PokemonCard url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" text="bulbasaur" color="lightgreen" />
          <PokemonCard url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" text="charmander" color="lightsalmon" />
          <PokemonCard url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" text="squirtle" color="lightblue" />
        </div>
      </div>

    </>
  )
}

export default App
