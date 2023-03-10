import { Box, Heading } from '@chakra-ui/react'
import { useContext } from 'react'
import { PokemonCard } from '../../components/PokemonCard'
import { PokemonContext } from '../../contexts/PokemonContext'

export function PokedexPage() {
  const { pokedex, isLoading } = useContext(PokemonContext)

  if (isLoading) {
    return
  }
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
        <Heading>Meus Pokémons</Heading>

        <Box gap={'1.25rem'} flexWrap={'wrap'} display={'flex'}>
          {pokedex.map((pokemon) => {
            return <PokemonCard key={pokemon.id} pokemon={pokemon} />
          })}
        </Box>
      </Box>
    </main>
  )
}
