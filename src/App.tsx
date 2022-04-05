import React from 'react'
import {NativeBaseProvider} from 'native-base'

import HomeView from './views/Home'
import {theme} from './theme'

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <HomeView />
    </NativeBaseProvider>
  )
}

export default App
