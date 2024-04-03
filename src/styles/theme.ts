export default {
  grid: {
    container: '50.2rem',
    gutter: '1.6rem'
  },
  border: {
    radius: '0.8rem'
  },
  font: {
    family:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    primary: '#71bb00',
    secondary: '#3CD3C1',
    white: '#FAFAFA',
    black: '#2b2b2b',
    xblack: '#313131',
    xxblack: '#343434',
    brownishgray: '#5f5f5f',
    warmgray: '#7a7a7a',
    xwarmgray: '#9f9f9f',
    gray: '#494949',
    grayishbrown: '#3b3b3b',
    xgrayishbrown: '#4b4b4b'
  },
  spacings: {
    xxxsmall: '0.8rem',
    xxsmall: '1.2rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.4rem',
    xxlarge: '4.8rem',
    xxxlarge: '5.6rem'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
