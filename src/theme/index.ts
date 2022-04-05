import {extendTheme, ITheme} from 'native-base'

export const theme: ITheme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#f8f0f2',
      100: '#e4ebf4',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#282828',
      900: '#120b0d'
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
