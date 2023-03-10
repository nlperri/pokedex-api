import { Box, Heading, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { PaginatedPokemons } from '../../components/PaginatedItems'
import { PokemonCard } from '../../components/PokemonCard'
import { PokemonContext } from '../../contexts/PokemonContext'

export function PokemonListPage() {
  return (
    <main>
      <Box
        gap={'4rem'}
        px={{ lg: '4rem', md: '0', base: '0' }}
        mx={{ lg: '0', md: 'auto', base: 'auto' }}
        display={'flex'}
        flexDir={'column'}
        pt={'3.7rem'}
      >
        <Heading>Todos Pokémons</Heading>
        <PaginatedPokemons pokemonsPerPage={20} />
      </Box>
    </main>
  )
}
