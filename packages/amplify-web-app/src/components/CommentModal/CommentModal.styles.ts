import { CgCloseO } from 'react-icons/cg'
import styled, { createGlobalStyle, css } from 'styled-components'

export const CustomCommentModalStyles = createGlobalStyle`
  ${({ theme }) => css`
    .react-modal-overlay {
      background: rgba(0, 0, 0, 0.5);

      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .react-modal-content {
      width: 100%;
      max-width: 576px;
      background-color: #f0f2f5;
      padding: 3rem;
      position: relative;
      border-radius: 0.5rem;
    }
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    h2 {
      color: #363F5F;
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    input, select {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 4rem;
      padding: 1rem;

      border: 1px solid #d7d7d7;
      border-radius: 0.5rem;
      background: #e7e9ee

      font-weight: 600;
      font-size: 1rem;

      &::placeholder {
        color: #363F5F;
      }

      & + input {
        margin-top: 1rem;
      }
    }

    button[type="submit"] {
      width: 100%;
      height: 3rem;
      margin-top: 1.5rem;
      color: #FFFFFF;
      background: #33cc95;
      border: 0;
      border-radius: 0.5rem;
      font-size: 1.5rem;
      font-weight: 100;

      transition: '0.1s ease-in-out';

      &:hover {
        filter: brightness(0.8);
      }
    }

    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: center;
      grid-gap: 0.5rem;
      margin: 1rem 0;
    }
  `}
`

export const CloseButton = styled(CgCloseO)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
`
