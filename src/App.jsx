import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Title from "./Components/Title.jsx"
import PokemonCard from './Components/PokemonCard'
import './App.css'

function App() {

  return (
    <>
      <div>
        <Title />
        <PokemonCard />
      </div>

    </>
  )
}

export default App
