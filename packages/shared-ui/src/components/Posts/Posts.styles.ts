import styled from 'styled-components'

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: #363f5f;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto;
  gap: 20px;
`

export const Card = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  height: 350px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
`

export const CardContent = styled.div`
  padding: 20px;

  strong {
  }

  p {
    margin-top: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
