export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family: 'Roboto',
    extraLight: 100,
    light: 300,
    normal: 400,
    bold: 600,
    extraBold: 900
  },
  colors: {
    primary: '#075985',
    secondary: '#78716C',
    mainBg: '#F6F9FC',
    white: '#F9FAFB',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    success: '#16A34A',
    danger: '#DC2626',
    alert: '#EAB308',
    info: '#0284C7',

    blue: '#5429CC',
    blueLight: '#6933FF',
    red: '#E52E4D',
    green: '#33CC95',
    textTitle: '#363F5F',
    textBody: '#969CB3',
    background: '#F0F2F5',
    shape: '#FFFFFF',

    border: '#d7d7d7',
    formBackground: '#e7e9ee'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {},
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
