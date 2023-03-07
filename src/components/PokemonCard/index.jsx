import { Box, Button, Img, Text } from '@chakra-ui/react'
import pokeball from '../../assets/pokeball.svg'
import { useContext, useEffect, useState } from 'react'
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
import { PokemonContext } from '../../contexts/PokemonContext'
import { useLocation } from 'react-router-dom'

export function PokemonCard({ pokemon }) {
  const { isLoading, addToPokedex, removeFromPokedex } =
    useContext(PokemonContext)

  const location = useLocation()

  if (isLoading) {
    return
  }

  function renderBg() {
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

  function renderTypeTwo() {
    const type = pokemon.types[1].type.name

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
          {pokemon.name}
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
        h={`${pokemon.name !== 'metapod' && '10rem'}`}
        right={'6'}
        bottom={'16'}
        position={'absolute'}
        src={`${pokemon.sprites.other.dream_world.front_default}`}
      />
      <Box display={'flex'} flexDir={'column-reverse'}>
        {location.pathname === '/' ? (
          <Button
            onClick={() => addToPokedex(pokemon)}
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
        ) : (
          <Button
            onClick={() => removeFromPokedex(pokemon)}
            right={'8'}
            bottom={'3'}
            position={'absolute'}
            fontWeight={'light'}
            h={'2.3rem'}
            w={'9rem'}
            bg={'red.100'}
            _hover={{
              bg: 'red.200',
            }}
            _active={{
              bg: 'red.300',
            }}
          >
            Excluir
          </Button>
        )}
      </Box>
    </Box>
  )
}
