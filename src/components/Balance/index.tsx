import {Box, Text} from 'native-base'
import React from 'react'

interface Props {
  title: string;
  value: string;
  currency: 'S/' | '$'
}

const Balance = ({ title, value, currency }: Props) => {
  return (
    <Box w={130} mr={1} mb={1} bg="blue.600" rounded="md" px={3} py={1}>
      <Text fontSize={12} color="white">
        {title}
      </Text>
      <Text fontWeight="semibold" color="white">
        {currency} {value}
      </Text>
    </Box>
  )
}

export default Balance
