import { Box, Heading } from '@chakra-ui/react'
import { useContext } from 'react'
import { PokemonCard } from '../../components/PokemonCard'
import { PokemonContext } from '../../contexts/PokemonContext'

export function PokedexPage() {
  const { pokedex } = useContext(PokemonContext)

  return (
    <main>
      <Box
        gap={'4rem'}
        px={'4rem'}
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
