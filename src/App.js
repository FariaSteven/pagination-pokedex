import React, {useEffect, useState} from 'react';
import { getAllPokemon, getPokemon } from './services/getPokemonData';
import PokeCard from './components/PokeCard';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true)
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
  
  useEffect(() => {
    async function fetchdata() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next)
      setPrevUrl(response.prev)
      let pokemon = await loadingPokemon(response.results)
      console.log(pokemon)
      setLoading(false)
    }

    fetchdata()
  }, [])

  const next = async () => {
    setLoading(true)
    let data = await getAllPokemon(nextUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next)
    setPrevUrl(data.previous)
    setLoading(false)
  }

  const prev = async () => {
    if (!prevUrl) return
    setLoading(true)
    let data = await getAllPokemon(prevUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next)
    setPrevUrl(data.previous)
    setLoading(false)
  }

  const loadingPokemon = async (data) => {
    let pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonSet = await getPokemon(pokemon.url);
      return pokemonSet
    }))

    setPokemonData(pokemonData)
  }
console.log(pokemonData)
return (
    <div>
      {loading ? <h1>Loading...</h1> : (
        <>
        <div className="button">
          <button className="next-prev-button" onClick={prev}>Previous</button>
          <button className="next-prev-button" onClick={next}>Next</button>
        </div>
          <div className="container">
            {pokemonData.map((pokemon, index) => {
              return <PokeCard key={index} pokemon={pokemon}/>
            })}
          </div>
          <div className="button">
            <button className="next-prev-button" onClick={prev}>Previous</button>
            <button className="next-prev-button" onClick={next}>Next</button>
          </div>
        </>
      )}
    </div>
  );
}
export default App;
