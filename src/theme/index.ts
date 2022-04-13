import {extendTheme, ITheme} from 'native-base'

export const theme: ITheme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#dafdff',
      100: '#aff3ff',
      200: '#80e9ff',
      300: '#52e0fe',
      400: '#30d6fd',
      500: '#22bde4',
      600: '#1193b2',
      700: '#006980',
      800: '#003f4f',
      900: '#00161e'
    }
  },
  components: {
    Heading: {
      baseStyle: () => ({color: 'primary.800'})
    }
  }
})
