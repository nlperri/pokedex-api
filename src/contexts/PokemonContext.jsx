import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const PokemonContext = createContext()

export function PokemonContextProvider({ children }) {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetchPokemonList()
  }, [])

  async function fetchPokemonList() {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
      setPokemons(response.data.results)
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <PokemonContext.Provider value={{ pokemons }}>
      {children}
    </PokemonContext.Provider>
  )
}
