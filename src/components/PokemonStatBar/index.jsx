import { Box, Container, Flex, Progress, Text } from '@chakra-ui/react'

export function PokemonStatBar({ statValue, statName }) {
  const getStatName = (name) => {
    switch (name) {
      case 'hp':
        return 'HP'
      case 'special-attack':
        return 'Sp. Atk'
      case 'special-defense':
        return 'Sp. Def'
      case 'attack':
        return 'Attack'
      case 'defense':
        return 'Defense'
      case 'speed':
        return 'Speed'
      default:
        return name
    }
  }

  if (statName === 'total') {
  }

  return (
    <Flex
      borderBottom={'1px'}
      borderColor={'gray.100'}
      px={'1.75rem'}
      justify='end'
      gap={'2'}
      align={'center'}
      maxW={'100%'}
      py={'0.2rem'}
    >
      {statName !== 'total' ? (
        <>
          {' '}
          <Box maxW={'full'} display={'flex'} gap={'2'} justify={'end'}>
            <Text fontSize={'0.8rem'} color={'gray.500'}>
              {getStatName(statName)}
            </Text>
            <Text fontSize={'0.8rem'} color={'black'}>
              {statValue}
            </Text>
          </Box>
          <Box width='60%'>
            <Progress
              colorScheme={`${statValue > 49 ? 'yellow' : 'orange'}`}
              bg={'none'}
              value={statValue}
              borderRadius={'12px'}
            />
          </Box>
        </>
      ) : (
        <>
          <Text fontSize={'0.8rem'} color={'gray.500'}>
            total
          </Text>
          <Text fontWeight={'bold'} fontSize={'0.8rem'} color={'black'}>
            {statValue}
          </Text>
          <Box width='60%'></Box>
        </>
      )}
    </Flex>
  )
}
