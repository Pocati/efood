import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../Styles/GlobalStyles'

export const HeaderBar = styled.header`
  background-image: url('/path-to-your-background.svg');
  padding: 40px 0;
  
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const LinkRestaurantes = styled(Link)`
  font-weight: bold;
  font-size: 18px;
  color: ${colors.marrom

    };
`

export const Carrinho = styled.span`
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`