import React from 'react'
import {Box, Fab, Flex, Icon, Text, Heading} from 'native-base'

import {IconPlus} from '../../svg'
import Gasto from '../../components/Gasto'
import Balance from '../../components/Balance'

const HomeView = () => {
  return (
    <Box bg="blue.100" flex={1}>
      <Box px={3} pt={6} mb={3}>
        <Heading mb={3}>Resumen</Heading>

        <Flex flexDirection="row" flexWrap="wrap">
          <Balance title="Ahorros Soles" currency="S/" value="338.98" />
          <Balance title="Ahorros Dolares" currency="$" value="181.08" />
        </Flex>
      </Box>

      <Box px={6} flex={1}>
        <Box mb={3}>
          <Text fontWeight="semibold" mb={3}>
            Marzo 2022
          </Text>

          <Gasto />
          <Gasto />
        </Box>

        <Box>
          <Text fontWeight="semibold" mb={3}>
            Febrero 2022
          </Text>

          <Gasto />
          <Gasto />
        </Box>
      </Box>

      <Fab
        size="sm"
        shadow={2}
        bg="blue.600"
        renderInPortal
        icon={<Icon color="white" as={IconPlus} name="plus" size="sm" />}
      />
    </Box>
  )
}

export default HomeView
