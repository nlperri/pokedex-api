import { Box, Button, Img, Text } from '@chakra-ui/react'
import pokeball from '../../assets/pokeball.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import bug from '../../assets/types/bug.svg'
import dark from '../../assets/types/dark.svg'
import dragon from '../../assets/types/dragon.svg'
import electric from '../../assets/types/electric.svg'
import fairy from '../../assets/types/fairy.svg'
import fighting from '../../assets/types/fighting.svg'
import fire from '../../assets/types/fire.svg'
import flying from '../../assets/types/flying.svg'
import ghost from '../../assets/types/ghost.svg'
import grass from '../../assets/types/grass.svg'
import ground from '../../assets/types/ground.svg'
import ice from '../../assets/types/ice.svg'
import normal from '../../assets/types/normal.svg'
import poison from '../../assets/types/poison.svg'
import psychic from '../../assets/types/psychic.svg'
import rock from '../../assets/types/rock.svg'
import steel from '../../assets/types/steel.svg'
import water from '../../assets/types/water.svg'

export function PokemonCard({ name, pokemonUrl }) {
  const [pokemon, setPokemon] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  async function fetchPokemon() {
    try {
      const response = await axios.get(pokemonUrl)

      setPokemon(response.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchPokemon()
  }, [])

  if (isLoading) {
    return
  }

  function renderBg() {
    const type = pokemon.types[0].type.name

    switch (type) {
      case 'normal':
        return 'brown'
      case 'grass':
        return 'green.100'
      case 'fire':
        return 'orange'
      case 'water':
        return 'blue.100'
      case 'bug':
        return 'green.200'
    }
  }

  function renderTypeOne() {
    const type = pokemon.types[0].type.name

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
    }
  }

  function renderTypeTwo() {
    const type = pokemon.types[1].type.name

    switch (type) {
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
    <Box
      position={'relative'}
      mb={'2.5rem'}
      pt={'1.5rem'}
      pl={'1.5rem'}
      rounded={'12px'}
      w={'27.5rem'}
      h={'13rem'}
      bg={renderBg()}
      bgImage={pokeball}
      bgRepeat={'no-repeat'}
      bgPosition={'right'}
      display={'flex'}
      gap={'7rem'}
    >
      <Box>
        <Text>#{pokemon.id}</Text>
        <Text textTransform='capitalize' fontSize={'2rem'} fontWeight={'bold'}>
          {name}
        </Text>
        <Box display={'flex'} gap={'1'}>
          <Img src={renderTypeOne()} />
          {pokemon.types[1] ? <Img src={renderTypeTwo()} /> : ''}
        </Box>
        <Text cursor={'pointer'} textDecor={'underline'} pt={'2.8rem'}>
          Detalhes
        </Text>
      </Box>

      <Img
        w={`${pokemon.name !== 'kakuna' && '10rem'}`}
        right={'6'}
        bottom={'16'}
        position={'absolute'}
        src={`${pokemon.sprites.other.dream_world.front_default}`}
      />
      <Box display={'flex'} flexDir={'column-reverse'}>
        <Button
          right={'8'}
          bottom={'3'}
          position={'absolute'}
          fontWeight={'light'}
          color={'black'}
          h={'2.3rem'}
          w={'9rem'}
        >
          Capturar!
        </Button>
      </Box>
    </Box>
  )
}
