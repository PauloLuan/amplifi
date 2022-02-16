import styled, { css } from 'styled-components'
import { HomeProps } from '.'

export const Container = styled.div<HomeProps>`
  ${({ theme }) => css`
    background: white;
  `}
`
