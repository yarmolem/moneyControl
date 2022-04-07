import {extendTheme, ITheme} from 'native-base'

export const theme: ITheme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#def3ff',
      100: '#b0d9ff',
      200: '#80bffe',
      300: '#50a5fc',
      400: '#248cfa',
      500: '#0e72e0',
      600: '#0359af',
      700: '#003f7e',
      800: '#00264e',
      900: '#000e1f'
    }
  },
  components: {
    Text: {
      baseStyle: () => ({color: 'primary.800'})
    },
    Heading: {
      baseStyle: () => ({color: 'primary.800'})
    },
    Divider: {
      baseStyle: () => ({bg: 'primary.200'})
    }
  }
})
