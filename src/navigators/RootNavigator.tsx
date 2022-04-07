import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import OnboardView from '../views/Onboard'
import HomeNavigator from './HomeNavigator'

const {Navigator, Screen} = createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="onboard" component={OnboardView} />
      <Screen name="home" component={HomeNavigator} />
    </Navigator>
  )
}

export default RootNavigator
