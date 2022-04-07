import React from 'react'
import {Box, Button, Heading, Input, Text, useDisclose} from 'native-base'
import AddAccountModal from '../../components/AddAccountModal'

const OnboardView = () => {
  const { isOpen, onOpen, onClose } = useDisclose()

  return (
    <>
    <AddAccountModal isOpen={isOpen} onClose={onClose} />
    <Box p={3} flex={1} alignItems="center" justifyContent="center">
      <Box w="90%">
        <Heading textAlign="center" fontSize="5xl" mb={6}>
          Wallet App
        </Heading>

        <Input fontSize="lg" variant="underlined" placeholder="Nombre de usuario" mb={6} />

        <Box>
          <Button onPress={onOpen} variant="outline" mb={6} fontSize="lg">
            AGREGAR WALLET
          </Button>
          <Text textAlign="center" color="gray.600" fontSize="lg">
            No has registrado cuentas
          </Text>
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default OnboardView
