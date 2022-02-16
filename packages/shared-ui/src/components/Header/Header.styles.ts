import { FcIdea } from 'react-icons/fc'
import styled, { css } from 'styled-components'

// import { HeaderProps } from '.'

export const Container = styled.header`
  ${({ theme }) => css`
    background: #8e2de2; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #4a00e0,
      #8e2de2
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #4a00e0,
      #8e2de2
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  `}
`

export const Content = styled.header`
  ${({ theme }) => css`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const LogoImage = styled(FcIdea)`
  ${({ theme }) => css`
    width: 50px;
    height: 50px;
  `}
`
