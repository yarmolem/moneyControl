import React from 'react'
import uuid from 'react-native-uuid'
import { Button, Center, CheckIcon, FormControl, Input, Modal, Select, Text } from 'native-base';
import { Currency, Wallet } from '../../interfaces';
import useForm from '../../hooks/useForm';

interface Props {
  isOpen: boolean
  onClose: () => void
  onAddWallet: (w: Wallet) => void
}

const AddAccountModal = ({isOpen, onClose, onAddWallet}: Props) => {

  const { values, handleChangeText, onSubmit, clear } = useForm<Wallet>({
    initialValues: { id: '', name: '', amount: 0, currency: '' as Currency }
  })

  const handleSubmit = () => {
    onAddWallet({...values, id: uuid.v4() as string })
    onClose()
    clear()
  }

  return (
    <Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>
            <Text fontWeight="bold">Agregar wallet</Text>
          </Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>
                <Text>Alias</Text>
              </FormControl.Label>
              <Input
                value={values.name}
                onChangeText={handleChangeText('name')}
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>
                <Text>Cantidad</Text>
              </FormControl.Label>
              <Input
                value={String(values.amount)}
                onChangeText={handleChangeText('amount')}
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>
                <Text>Moneda</Text>
              </FormControl.Label>
              <Select
                minWidth="200"
                selectedValue={values.currency}
                accessibilityLabel="Selecciona una moneda"
                placeholder="Selecciona una moneda"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="5" />
                }}
                onValueChange={handleChangeText('currency')}>
                <Select.Item label="Dólares" value="USD" />
                <Select.Item label="Soles" value="PEN" />
              </Select>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button onPress={onClose} variant="ghost" colorScheme="blueGray">
                <Text>Cancelar</Text>
              </Button>
              <Button onPress={() => onSubmit(handleSubmit)}>
                <Text color="white">Guardar</Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  )
}

export default AddAccountModal
