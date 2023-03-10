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
        gridTemplateColumns={{ lg: 'repeat(3,1fr)', md: '1fr', base: '1fr' }}
        px={{ lg: '2.5rem', md: '0', base: '0' }}
        mx={{ md: 'auto', base: 'auto' }}
        justify={'space-between'}
        align={'center'}
        pt={'1.3rem'}
        pb={'1.6rem'}
        bg={'white'}
        w={'100vw'}
        gap={{ lg: '0', md: '1rem', base: '1rem' }}
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
          <Box
            visibility={'hidden'}
            display={{ lg: 'flex', md: 'none', base: 'none' }}
            alignItems={'center'}
          >
            <MdArrowBackIosNew color={'black'} />
            <Text color={'black'}>Todos os pokémons</Text>
          </Box>
        )}

        <Box display={'flex'} justifyContent={'center'}>
          <Image maxW={'19rem'} src={logo} />
        </Box>
        <Box
          display={'flex'}
          justifyContent={{ lg: 'end', md: 'center', base: 'center' }}
          alignItems={'center'}
        >
          {location.pathname === '/' && (
            <Button
              onClick={() => goToPokedex(navigate)}
              bg={'blue.200'}
              w={{ lg: '17rem', md: '15rem', base: '12rem' }}
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
                w={{ lg: '14rem', md: '14rem', base: '12rem' }}
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
                w={{ lg: '14rem', md: '14rem', base: '12rem' }}
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
