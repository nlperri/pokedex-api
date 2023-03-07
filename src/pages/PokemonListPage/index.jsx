import { Box, Heading, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { PokemonCard } from '../../components/PokemonCard'
import { PokemonContext } from '../../contexts/PokemonContext'

export function PokemonListPage() {
  const { pokemons, pokedex } = useContext(PokemonContext)

  const filteredPokemonList = pokemons.filter(
    (pokemon) =>
      !pokedex.find(
        (pokemonInPokedex) => pokemon.data.id === pokemonInPokedex.id
      )
  )

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
          {filteredPokemonList.map((pokemon) => {
            return <PokemonCard key={pokemon.data.id} pokemon={pokemon.data} />
          })}
        </Box>
      </Box>
    </main>
  )
}
