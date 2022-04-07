import React from 'react'
import {Box, Heading} from 'native-base'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const {Screen, Navigator} = createBottomTabNavigator()

const ResumeView = () => {
  return (
    <Box>
      <Heading>Resumen View</Heading>
    </Box>
  )
}

const HomeNavigator = () => {
  return (
    <Navigator>
      <Screen name="resume" component={ResumeView} />
    </Navigator>
  )
}

export default HomeNavigator
