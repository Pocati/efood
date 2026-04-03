import styled from 'styled-components'
import { colors } from '../../Styles/GlobalStyles'

export const Card = styled.div`
  background-color: ${colors.branco};
  border: 1px solid ${colors.marrom};
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;

  > img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Content = styled.div`
  padding: 8px;
  border-top: none;
  display: flex;
  flex-direction: column;
  flex: 1;

  /* Estilo do botão Saiba Mais dentro do Content */
  .botao-saiba-mais {
    background-color: ${colors.marrom};
    color: ${colors.begeClaro};
    font-size: 14px;
    font-weight: 700;
    padding: 4px 6px;
    text-decoration: none;
    display: inline-block;
    width: fit-content;
    margin-top: auto;
  }
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h3 {
    font-weight: 700;
    font-size: 18px;
    color: ${colors.marrom};
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      font-weight: 700;
      font-size: 18px;
      color: ${colors.marrom};
    }

    img {
      width: 21px;
      height: 21px;
    }
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.marrom};
  margin-bottom: 16px;
`