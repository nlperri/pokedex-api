import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const PokemonContext = createContext()

export function PokemonContextProvider({ children }) {
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [pokedex, setPokedex] = useState([])

  async function getPokemons() {
    let endpoints = []
    for (let i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }
    await axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => {
        setPokemons(res)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getPokemons()
  }, [])

  function addToPokedex(pokemon) {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.id === pokemon.id
    )

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemon]
      setPokedex(newPokedex)
    }
  }

  function removeFromPokedex(pokemon) {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.id !== pokemon.id
    )

    setPokedex(newPokedex)
  }

  return (
    <PokemonContext.Provider
      value={{ pokemons, isLoading, addToPokedex, pokedex, removeFromPokedex }}
    >
      {children}
    </PokemonContext.Provider>
  )
}
