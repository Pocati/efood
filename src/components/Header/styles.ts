import styled from 'styled-components'
import logo from '../../images/logo.png'
import { colors } from '../../Styles/GlobalStyles'

export const HeaderContainer = styled.header`
  background-color: ${colors.begeClaro};
  background-image: ${logo};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h1 {
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
    color: ${colors.marrom};
    margin-top: 138px;
    max-width: 540px;
    width: 100%;
  }
`

export const Logo = styled.img`
  margin-top: 64px;
  width: 125px;
`