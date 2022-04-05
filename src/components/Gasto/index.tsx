import React from 'react'
import {Box, HStack, Image, Text, VStack} from 'native-base'

const Gasto = () => {
  return (
    <VStack space={3} bg="white" p={3} rounded="md" mb={1}>
      <HStack space={6}>
        <Box w={55} h={55} bg="primary.800" rounded="md" p={2}>
          <Image
            w="full"
            h="full"
            alt="Logo Netflix"
            source={require('../../assets/images/icon_netflix.png')}
          />
        </Box>

        <Box flex={1}>
          <Text fontWeight="bold" fontSize={16}>
            Suscripción netflix
          </Text>
          <Text color="gray.500">Por 1 mes</Text>
        </Box>

        <Box>
          <Text fontWeight="bold" fontSize={16}>
            -S/ 18.90
          </Text>
          <Text color="gray.500">22-03-2022</Text>
        </Box>
      </HStack>
    </VStack>
  )
}

export default Gasto
