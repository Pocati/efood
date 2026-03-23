import { createGlobalStyle } from 'styled-components'

export const colors = {
  branco: '#FFFFFF',
  bege: '#FFF8F2',
  marrom: '#E66767',
  begeClaro: '#FFEBD9'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${colors.bege};
    color: ${colors.marrom};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`