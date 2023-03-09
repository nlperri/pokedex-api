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
        px={'4rem'}
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
