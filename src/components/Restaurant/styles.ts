import styled from 'styled-components'
import { colors } from '../../Styles/GlobalStyles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${colors.branco};
  border: 1px solid ${colors.marrom};
  position: relative;
  
  .container-interno {
    padding: 8px;
  }

  .header-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Imagem = styled.div`
  width: 100%;
  height: 217px;
  background-size: cover;
  background-repeat: no-repeat;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
`

export const Nota = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;

  img {
    margin-left: 8px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const Botao = styled(Link)`
  background-color: ${colors.marrom};
  color: ${colors.begeClaro};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
`