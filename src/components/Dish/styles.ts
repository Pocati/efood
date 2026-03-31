import styled from 'styled-components'
import { colors } from '../../Styles/GlobalStyles'

export const Card = styled.div`
  background-color: ${colors.marrom};
  padding: 8px;
  color: ${colors.begeClaro};
  display: flex;
  flex-direction: column;
`

export const Imagem = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`

export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  margin: 8px 0;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  flex: 1;
`

export const Botao = styled.button`
  background-color: ${colors.begeClaro};
  color: ${colors.marrom};
  border: none;
  padding: 4px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 16px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  background-color: ${colors.marrom};
  color: ${colors.branco};
  padding: 32px;
  display: flex;
  position: relative;
  z-index: 2;

  img {
    max-width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
  }

  header {
    display: flex;
    justify-content: space-between;

    img {
      width: 16px;
      height: 16px;
      cursor: pointer;
      margin: 0;
    }
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`

export const CloseIcon = styled.img`
  background-color: #fff;
`