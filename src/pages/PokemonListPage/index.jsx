import { Box, Heading } from '@chakra-ui/react'
import { PaginatedPokemons } from '../../components/PaginatedItems'

export function PokemonListPage() {
  return (
    <main>
      <Box
        gap={'4rem'}
        px={{ lg: '4rem', md: '0', base: '0' }}
        mx={{ lg: '0', md: '1rem', base: '1rem' }}
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
