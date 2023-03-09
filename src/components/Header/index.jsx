import { Box, Button, Image, Text } from '@chakra-ui/react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { MdArrowBackIosNew } from 'react-icons/md'
import { goToPokedex, goToPokemonList } from '../../router/coordinator'
import { useContext } from 'react'
import { PokemonContext } from '../../contexts/PokemonContext'

export function Header() {
  const { pokedex, addToPokedex, removeFromPokedex, isLoading, pokemons } =
    useContext(PokemonContext)
  const navigate = useNavigate()
  const location = useLocation()
  const param = /^\/pokemon\/.+/.test(location.pathname)
  const pokemonParam = location.pathname.split('/').splice(2, 1).toString()
  const pokemon = pokemons.filter((poke) => {
    return poke.data.name === pokemonParam
  })

  return (
    <header>
      <Box
        display={'grid'}
        gridTemplateColumns={'repeat(3,1fr)'}
        px={'2.5rem'}
        justify={'space-between'}
        align={'center'}
        pt={'1.3rem'}
        pb={'1.6rem'}
        bg={'white'}
        w={'full'}
        h={'10rem'}
      >
        {location.pathname !== '/' ? (
          <Box
            onClick={() => goToPokemonList(navigate)}
            display={'flex'}
            alignItems={'center'}
            gap={'1'}
            _hover={{ cursor: 'pointer' }}
          >
            <MdArrowBackIosNew color={'black'} />
            <Text
              display={'flex'}
              textDecor={'underline'}
              fontWeight={'bold'}
              color={'black'}
            >
              Todos os pokémons
            </Text>
          </Box>
        ) : (
          <Box visibility={'hidden'} display={'flex'} alignItems={'center'}>
            <MdArrowBackIosNew color={'black'} />
            <Text color={'black'}>Todos os pokémons</Text>
          </Box>
        )}

        <Box display={'flex'} justifyContent={'center'}>
          <Image w={'19rem'} src={logo} />
        </Box>
        <Box display={'flex'} justifyContent={'end'} alignItems={'center'}>
          {location.pathname === '/' && (
            <Button
              onClick={() => goToPokedex(navigate)}
              bg={'blue.200'}
              w={'17rem'}
              h={'4.6rem'}
              _hover={{
                bg: 'blue.300',
                cursor: 'pointer',
              }}
              _active={{ bg: 'blue.400' }}
            >
              Pokedéx
            </Button>
          )}
          {param &&
            (pokedex.find(
              (pokemonInPokedex) => pokemonInPokedex.name === pokemonParam
            ) ? (
              <Button
                onClick={() => removeFromPokedex(pokemon[0].data)}
                w={'14rem'}
                h={'3.5rem'}
                bg={'red.100'}
                _hover={{
                  bg: 'red.200',
                  cursor: 'pointer',
                }}
                _active={{ bg: 'red.300' }}
              >
                Excluir da Pokedéx
              </Button>
            ) : (
              <Button
                onClick={() => addToPokedex(pokemon[0].data)}
                w={'14rem'}
                h={'3.5rem'}
                bg={'#41e34b'}
                _hover={{
                  bg: '#3bcc44',
                  cursor: 'pointer',
                }}
                _active={{ bg: '#34b63c' }}
              >
                Adicionar na Pokedéx
              </Button>
            ))}
        </Box>
      </Box>
    </header>
  )
}
