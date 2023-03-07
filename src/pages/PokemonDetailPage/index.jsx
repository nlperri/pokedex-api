import { Box, Heading, Img, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PokemonContext } from '../../contexts/PokemonContext'
import pokeball from '../../assets/pokeballbg.png'
import { PokemonStatBar } from '../../components/PokemonStatBar'

export function PokemonDetailPage() {
  const { pokemons, renderBg, renderTypeOne, renderTypeTwo, isLoading } =
    useContext(PokemonContext)
  const { name } = useParams()

  if (isLoading) {
    return
  }

  const pokemonDetail = pokemons.find((pokemon) => {
    if (pokemon.data.name === name) {
      return pokemon
    }
  })

  const totalBaseStats = pokemonDetail.data.stats.reduce((acc, stat) => {
    return (acc += stat.base_stat)
  }, 0)

  return (
    <main>
      <Box
        gap={'4rem'}
        px={'4rem'}
        display={'flex'}
        flexDir={'column'}
        pt={'3.7rem'}
        h={'110vh'}
      >
        <Heading px={'1rem'}>Detalhes</Heading>
        <Box w={'full'}>
          <Box
            w={'full'}
            h={'38rem'}
            bg={renderBg(pokemonDetail.data)}
            px={'2.75rem'}
            py={'1.6rem'}
            rounded={'12px'}
            bgImage={pokeball}
            bgRepeat={'no-repeat'}
            bgPosition={'right'}
            bgSize={'40rem'}
            display={'flex'}
            gap={'3rem'}
          >
            <Box display={'flex'} flexDir={'column'} gap={'3rem'}>
              <Box
                display={'flex'}
                justifyContent={'center'}
                rounded={'12px'}
                bg={'white'}
                w={'17rem'}
                h={'17rem'}
              >
                <Img src={pokemonDetail.data.sprites.front_default} />
              </Box>
              <Box
                display={'flex'}
                justifyContent={'center'}
                rounded={'12px'}
                bg={'white'}
                w={'17rem'}
                h={'17rem'}
              >
                <Img src={pokemonDetail.data.sprites.back_default} />
              </Box>
            </Box>
            <Box p={'1rem'} bg={'white'} w={'23rem'} rounded={'12px'}>
              <Text
                fontWeight={'semibold'}
                fontSize={'1.4rem'}
                color={'black'}
                mb={'1rem'}
              >
                Base stats
              </Text>
              <Box borderTop={'1px'} borderColor={'gray.100'}>
                {pokemonDetail.data.stats.map((stat) => {
                  return (
                    <PokemonStatBar
                      key={stat.stat.name}
                      statName={stat.stat.name}
                      statValue={stat.base_stat}
                    />
                  )
                })}
                <PokemonStatBar statName={'total'} statValue={totalBaseStats} />
              </Box>
            </Box>
            <Box>
              <Box></Box>
              <Box></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  )
}
