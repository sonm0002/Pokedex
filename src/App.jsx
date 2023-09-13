import Title from "./Components/Title.jsx"
import PokemonCard from './Components/PokemonCard'
import './App.css?inline'

function App() {

  return (
    <>
      <div>
        <Title />
        <div className="cardContainer">
          <PokemonCard />
        </div>
      </div>

    </>
  )
}

export default App
