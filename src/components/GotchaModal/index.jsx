import {
  ModalOverlay,
  Modal,
  ModalContent,
  ModalBody,
  Text,
  Heading,
  Box,
} from '@chakra-ui/react'

export function GotchaModal({ isOpen, onClose }) {
  return (
    <>
      <Modal isCentered size={'md'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody color={'black'}>
            <Box
              display={'flex'}
              flexDir={'column'}
              justifyContent={'center'}
              align={'center'}
              h={'13rem'}
            >
              <Heading>Gotcha!</Heading>
              <Text>O Pokémon foi adicionado a sua Pokedéx</Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
