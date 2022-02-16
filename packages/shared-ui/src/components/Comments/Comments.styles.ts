import styled, { css } from 'styled-components'

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 980px;
  margin: 0 auto;
`

export const Title = styled.h2`
  font-size: 2.5rem;
  margin: 20px 0;
  color: #363f5f;
`

export const Wrapper = styled.li`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem 2rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    strong {
      color: #363f5f;
      font-weight: 600;
    }

    p {
      font-weight: 100;
    }
  `}
`
