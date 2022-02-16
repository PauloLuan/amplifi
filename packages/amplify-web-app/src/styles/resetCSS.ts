import { createGlobalStyle, css } from 'styled-components'

export const CSSReset = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      &:before,
      &:after {
        box-sizing: inherit;
      }
    }

    html {
      @media (min-width: 1080px) {
        font-size: 97.5%; // 15px
      }

      @media (min-width: 720px) {
        font-size: 87.5%; // 14px
      }
    }

    body {
      font-family: 'Roboto';
      font-size: 400;
    }

    button {
      cursor: pointer;
    }

    a:link {
      text-decoration: none;
    }

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `}
`
