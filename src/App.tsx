import React from 'react'
import {NativeBaseProvider} from 'native-base'
import { NavigationContainer } from '@react-navigation/native';

import {theme} from './theme'
import RootNavigator from './navigators/RootNavigator';
import AuthState from './context/auth/AuthState';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <AuthState>
          <RootNavigator />
        </AuthState>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default App
