import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import OnboardView from '../views/Onboard'
import HomeNavigator from './HomeNavigator'
import { useAuthContext } from '../context/auth/AuthState'

const {Navigator, Screen} = createNativeStackNavigator()

const authViews = () => (
  <>
    <Screen name="onboard" component={OnboardView} />
  </>
)

const homeViews = () => (
  <>
    <Screen name="home" component={HomeNavigator} />
  </>
)

const RootNavigator = () => {
  const { isAuth } = useAuthContext()

  return (
    <Navigator screenOptions={{headerShown: false}}>
      {isAuth ? homeViews() : authViews()}
    </Navigator>
  )
}

export default RootNavigator
