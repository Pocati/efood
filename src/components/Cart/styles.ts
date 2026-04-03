import styled from 'styled-components'
import { colors } from '../../Styles/GlobalStyles'
import lixeira from '../../../public/lixeira.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
  display: none;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const Sidebar = styled.aside`
  background-color: ${colors.marrom};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  button {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.bege};
  font-weight: bold;
  font-size: 14px;
  margin-top: 40px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.bege};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${colors.marrom};
    font-weight: 900;
    font-size: 18px;
    margin-bottom: 8px;
  }

  span {
    color: ${colors.marrom};
    font-size: 14px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: #fff;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
    background-size: contain;
    background-repeat: no-repeat;
  }
`