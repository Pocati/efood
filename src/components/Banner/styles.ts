import styled from 'styled-components'
import { colors } from '../../Styles/GlobalStyles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-top: 25px;
  padding-bottom: 32px;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`

export const Categoria = styled.span`
  font-weight: 100;
  font-size: 32px;
  color: ${colors.branco};
`

export const Titulo = styled.h2`
  font-weight: 900;
  font-size: 32px;
  color: ${colors.branco};
`