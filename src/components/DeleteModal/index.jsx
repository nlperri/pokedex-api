import {
  ModalOverlay,
  Modal,
  ModalContent,
  ModalBody,
  Text,
  useDisclosure,
  Heading,
  Box,
} from '@chakra-ui/react'

export function DeleteModal({ isOpen, onClose }) {
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
              <Heading>Oh, no!</Heading>
              <Text>O Pokémon foi removido da sua Pokedéx</Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
