import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  max-width: 1024px;
  margin: 80px auto 120px;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: 1024px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 32px;
    margin-top: 40px;
  }
`