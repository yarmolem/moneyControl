import React from 'react'
import {NativeBaseProvider} from 'native-base'
import { NavigationContainer } from '@react-navigation/native';

import {theme} from './theme'
import RootNavigator from './navigators/RootNavigator';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App
