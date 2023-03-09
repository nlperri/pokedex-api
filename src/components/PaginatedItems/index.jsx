import { useContext, useState } from 'react'
import { Box } from '@chakra-ui/react'
import ReactPaginate from 'react-paginate'
import { PokemonCard } from '../PokemonCard'
import { PokemonContext } from '../../contexts/PokemonContext'

function PokemonsList({ currentPokemons }) {
  return (
    <Box gap={'1.25rem'} flexWrap={'wrap'} display={'flex'}>
      {currentPokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.data.id} pokemon={pokemon.data} />
      })}
    </Box>
  )
}

export function PaginatedPokemons({ pokemonsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0)

  const endOffset = itemOffset + pokemonsPerPage
  const { pokemons, pokedex } = useContext(PokemonContext)

  const filteredPokemonList = pokemons.filter(
    (pokemon) =>
      !pokedex.find(
        (pokemonInPokedex) => pokemon.data.id === pokemonInPokedex.id
      )
  )
  const currentItems = filteredPokemonList.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(filteredPokemonList.length / pokemonsPerPage)

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * pokemonsPerPage) % filteredPokemonList.length

    setItemOffset(newOffset)
  }

  return (
    <>
      <PokemonsList currentPokemons={currentItems} />
      <ReactPaginate
        breakLabel='...'
        nextLabel='>'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel='<'
        renderOnZeroPageCount={null}
        className='pagination'
      />
    </>
  )
}
