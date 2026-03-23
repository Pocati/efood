import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Duas colunas conforme o Figma */
  column-gap: 80px;               /* Espaçamento horizontal largo */
  row-gap: 48px;                  /* Espaçamento vertical entre as linhas */
  margin-top: 80px;
  margin-bottom: 120px;

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 32px;
    margin-top: 40px;
  }
`