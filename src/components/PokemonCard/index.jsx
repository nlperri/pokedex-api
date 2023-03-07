import { Box, Button, Img, Text } from '@chakra-ui/react'
import pokeball from '../../assets/pokeball.svg'
import { useContext, useEffect, useState } from 'react'

import { PokemonContext } from '../../contexts/PokemonContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { goToPokemonDetail } from '../../router/coordinator'

export function PokemonCard({ pokemon }) {
  const {
    isLoading,
    addToPokedex,
    removeFromPokedex,
    renderBg,
    renderTypeOne,
    renderTypeTwo,
  } = useContext(PokemonContext)

  const location = useLocation()
  const navigate = useNavigate()

  if (isLoading) {
    return
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
      bg={renderBg(pokemon)}
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
          <Img src={renderTypeOne(pokemon)} />
          {pokemon.types[1] ? <Img src={renderTypeTwo(pokemon)} /> : ''}
        </Box>
        <Text
          onClick={() => goToPokemonDetail(navigate, pokemon.name)}
          cursor={'pointer'}
          textDecor={'underline'}
          pt={'2.8rem'}
        >
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
