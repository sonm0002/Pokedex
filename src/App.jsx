import Title from "./Components/Title.jsx"
import PokemonCard from './Components/PokemonCard'
import './App.css?inline'

function App() {

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

  return (
    <>
      <div>
        <Title />
        <div className="cardContainer">
          <PokemonCard pokemonList={pokemonList} />
        </div>
      </div>

    </>
  )
}

export default App
