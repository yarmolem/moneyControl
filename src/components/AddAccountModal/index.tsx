import React from 'react'
import { Button, Center, FormControl, Input, Modal, Text } from 'native-base';

interface Props {
  isOpen: boolean
  onClose: () => void
}

const AddAccountModal = ({ isOpen, onClose }: Props) => {
  return (
    <Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header fontSize="lg">
            <Text fontSize="lg" fontWeight="bold">Agregar wallet</Text>
          </Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label >
                <Text fontSize="lg">Alias</Text>
              </FormControl.Label>
              <Input fontSize="lg" />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label fontSize="lg">
                <Text fontSize="lg">Cantidad</Text>
              </FormControl.Label>
              <Input fontSize="lg" />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button onPress={onClose} variant="ghost" colorScheme="blueGray" >
                <Text fontSize="lg">Cancelar</Text>
              </Button>
              <Button onPress={onClose} fontSize="lg">
                <Text fontSize="lg" color="white">Guardar</Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  )
}

export default AddAccountModal
