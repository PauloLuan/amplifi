import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    body {
      background-color: '#F0F2F5';
    }

    #root {
      height: 100vh;
    }
  `}
`
