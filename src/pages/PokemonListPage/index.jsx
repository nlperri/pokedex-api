import { Box, Heading, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { PokemonCard } from '../../components/PokemonCard'
import { PokemonContext } from '../../contexts/PokemonContext'

export function PokemonListPage() {
  const { pokemons } = useContext(PokemonContext)

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
        <Box gap={'1.25rem'} flexWrap={'wrap'} display={'flex'}>
          {pokemons.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                pokemonUrl={pokemon.url}
              />
            )
          })}
        </Box>
      </Box>
    </main>
  )
}
