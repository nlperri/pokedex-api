import {
  Box,
  Button,
  Heading,
  Img,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import pokeball from '../../assets/pokeball.svg'
import { useContext } from 'react'
import { PokemonContext } from '../../contexts/PokemonContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { goToPokemonDetail } from '../../router/coordinator'
import { GotchaModal } from '../GotchaModal'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { DeleteModal } from '../DeleteModal'

export function PokemonCard({ pokemon }) {
  const {
    isLoading,
    addToPokedex,
    removeFromPokedex,
    renderBg,
    renderTypeOne,
    renderTypeTwo,
  } = useContext(PokemonContext)

  const { isOpen, onClose, onOpen } = useDisclosure()

  const location = useLocation()
  const navigate = useNavigate()

  if (isLoading) {
    return
  }

  const closeModal = () => {
    onClose()
    addToPokedex(pokemon)
  }

  const closeDeleteModal = () => {
    onClose()
    removeFromPokedex(pokemon)
  }

  return (
    <Box
      position={'relative'}
      mb={'2.5rem'}
      pt={'1.5rem'}
      pl={'1.5rem'}
      rounded={'12px'}
      w={'27.5rem'}
      minW={'12rem'}
      h={'13rem'}
      bg={renderBg(pokemon)}
      bgImage={pokeball}
      bgRepeat={'no-repeat'}
      bgPosition={'right'}
      display={'flex'}
      gap={'7rem'}
    >
      <Box>
        <Text>#{pokemon.id}</Text>
        <Text textTransform='capitalize' fontSize={'2rem'} fontWeight={'bold'}>
          {pokemon.name}
        </Text>
        <Box display={'flex'} gap={'1'}>
          <Img src={renderTypeOne(pokemon)} />
          {pokemon.types[1] ? <Img src={renderTypeTwo(pokemon)} /> : ''}
        </Box>
        <Text
          onClick={() => goToPokemonDetail(navigate, pokemon.name)}
          cursor={'pointer'}
          textDecor={'underline'}
          pt={'2.8rem'}
        >
          Detalhes
        </Text>
      </Box>

      <Img
        display={{ base: 'none', lg: 'block', md: 'block' }}
        h={`${pokemon.name !== 'metapod' && '10rem'}`}
        right={'6'}
        bottom={'16'}
        position={'absolute'}
        src={`${pokemon.sprites.other.dream_world.front_default}`}
      />
      <Box display={'flex'} flexDir={'column-reverse'}>
        {location.pathname === '/' ? (
          <>
            <Button
              onClick={onOpen}
              right={'8'}
              bottom={'3'}
              position={'absolute'}
              fontWeight={'light'}
              color={'black'}
              h={'2.3rem'}
              w={'9rem'}
            >
              Capturar!
            </Button>
            <GotchaModal isOpen={isOpen} onClose={closeModal} />
          </>
        ) : (
          <>
            <Button
              onClick={onOpen}
              right={'8'}
              bottom={'3'}
              position={'absolute'}
              fontWeight={'light'}
              h={'2.3rem'}
              w={'9rem'}
              bg={'red.100'}
              _hover={{
                bg: 'red.200',
              }}
              _active={{
                bg: 'red.300',
              }}
            >
              Excluir
            </Button>
            <DeleteModal isOpen={isOpen} onClose={closeDeleteModal} />
          </>
        )}
      </Box>
    </Box>
  )
}
