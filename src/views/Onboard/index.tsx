import React from 'react'
import {Keyboard, TouchableWithoutFeedback} from 'react-native'
import {Box, Button, Heading, Input, Text, useDisclose, CloseIcon, IconButton} from 'native-base'

import {Wallet} from '../../interfaces'
import useForm from '../../hooks/useForm'
import { formatCurrency } from '../../utils/formatCurrency'
import AddAccountModal from '../../components/AddAccountModal'
import {AuthInitialState, useAuthContext} from '../../context/auth/AuthState'

const OnboardView = () => {
  const {loginAction} = useAuthContext()
  const {isOpen, onOpen, onClose} = useDisclose()
  const {values, handleChange, onSubmit, setFields} = useForm<AuthInitialState>(
    { initialValues: {username: '', wallets: []} }
  )

  const handleAddWallet = (wallet: Wallet) => {
    setFields({...values, wallets: [...values.wallets, wallet]})
  }

  const handleDelete = (id: string) => {
    setFields({...values, wallets: values.wallets.filter((w) => w.id !== id)})
  }

  const handleSubmit = () => {
    loginAction(values)
  }

  return (
    <>
      <AddAccountModal
        isOpen={isOpen}
        onClose={onClose}
        onAddWallet={handleAddWallet}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Box p={3} flex={1} alignItems="center">
          <Box w="90%" flex={1}>
            <Heading textAlign="center" fontSize="5xl" my={6}>
              Wallet App
            </Heading>

            <Input
              mb={6}
              variant="underlined"
              placeholder="Nombre de usuario"
              value={values.username}
              onChangeText={v => handleChange('username', v)}
            />

            <Box>
              <Button onPress={onOpen} variant="outline" mb={6}>
                Agregar wallet
              </Button>
              {values.wallets.length === 0 ? (
                <Text textAlign="center" color="gray.600">
                  No has registrado cuentas
                </Text>
              ) : (
                values.wallets.map(({id, name, amount, currency}) => (
                  <Box
                    key={`wallet-${id}`}
                    py={2}
                    px={3}
                    mb={3}
                    shadow="1"
                    rounded="md"
                    bg="primary.700"
                    flexDirection="row"
                    alignItems="center">
                    <Box flexDirection="column">
                      <Box ml={3}>
                        <Text color="white" fontSize={16} fontWeight="semibold">
                          Nombre: <Text fontWeight="light">{name}</Text>
                        </Text>
                      </Box>

                      <Box ml={3}>
                        <Text color="white" fontSize={16} fontWeight="semibold">
                          Moneda: <Text fontWeight="light">{currency}</Text>
                        </Text>
                      </Box>

                      <Box ml={3}>
                        <Text color="white" fontSize={16} fontWeight="semibold">
                          Monto:{' '}
                          <Text fontWeight="light">
                            {formatCurrency({ amount, currency })}
                          </Text>
                        </Text>
                      </Box>
                    </Box>

                    <Box ml="auto">
                      <IconButton
                        onPress={() => handleDelete(id)}
                        icon={<CloseIcon color="white" size={5} />}
                      />
                    </Box>
                  </Box>
                ))
              )}
            </Box>

            <Button
              mt="auto"
              onPress={() => onSubmit(handleSubmit)}
              isDisabled={
                values.username.trim().length === 0 ||
                values.wallets.length === 0
              }>
              Continuar
            </Button>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    </>
  )
}

export default OnboardView
