import { useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import bug from '../assets/types/bug.svg'
import dark from '../assets/types/dark.svg'
import dragon from '../assets/types/dragon.svg'
import electric from '../assets/types/electric.svg'
import fairy from '../assets/types/fairy.svg'
import fighting from '../assets/types/fighting.svg'
import fire from '../assets/types/fire.svg'
import flying from '../assets/types/flying.svg'
import ghost from '../assets/types/ghost.svg'
import grass from '../assets/types/grass.svg'
import ground from '../assets/types/ground.svg'
import ice from '../assets/types/ice.svg'
import normal from '../assets/types/normal.svg'
import poison from '../assets/types/poison.svg'
import psychic from '../assets/types/psychic.svg'
import rock from '../assets/types/rock.svg'
import steel from '../assets/types/steel.svg'
import water from '../assets/types/water.svg'

export const PokemonContext = createContext()

export function PokemonContextProvider({ children }) {
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [pokedex, setPokedex] = useState([])
  const { onClose, isOpen } = useDisclosure()

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

  useEffect(() => {
    const pokedexFromLocalStorage = localStorage.getItem('pokedex')
    if (pokedexFromLocalStorage) {
      setPokedex(JSON.parse(pokedexFromLocalStorage))
    }
  }, [])

  useEffect(() => {
    if (pokedex.length > 0) {
      localStorage.setItem('pokedex', JSON.stringify(pokedex))
    }
  }, [pokedex])

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

  function renderBg(pokemon) {
    const type = pokemon.types[0].type.name

    switch (type) {
      case 'bug':
        return '#76A866'
      case 'dark':
        return '#70657B'
      case 'dragon':
        return '#004170'
      case 'electric':
        return '#E7BF0D'
      case 'fairy':
        return '#EA85E4'
      case 'fighting':
        return '#D96D8C'
      case 'fire':
        return '#EAAB7D'
      case 'flying':
        return '#6892B0'
      case 'ghost':
        return '#7587BD'
      case 'grass':
        return '#729F92'
      case 'ground':
        return '#E7A888'
      case 'ice':
        return '#59C5B4'
      case 'normal':
        return '#BF9762'
      case 'poison':
        return '#B978BA'
      case 'psychic':
        return '#F88C90'
      case 'rock':
        return '#C7B78B'
      case 'steel':
        return '#ADADAD'
      case 'water':
        return '#71C3FF'
      default:
        return '#BF9762'
    }
  }

  function renderType(type) {
    switch (type) {
      case 'normal':
        return normal
      case 'grass':
        return grass
      case 'fire':
        return fire
      case 'water':
        return water
      case 'bug':
        return bug
      case 'dark':
        return dark
      case 'dragon':
        return dragon
      case 'electric':
        return electric
      case 'fairy':
        return fairy
      case 'fighting':
        return fighting
      case 'flying':
        return flying
      case 'ghost':
        return ghost
      case 'ground':
        return ground
      case 'ice':
        return ice
      case 'poison':
        return poison
      case 'psychic':
        return psychic
      case 'rock':
        return rock
      case 'steel':
        return steel
    }
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        isLoading,
        addToPokedex,
        pokedex,
        removeFromPokedex,
        renderBg,
        renderType,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}
