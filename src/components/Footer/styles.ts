import styled from 'styled-components'
import { colors } from '../../Styles/GlobalStyles'

export const FooterContainer = styled.footer`
  background-color: ${colors.begeClaro};
  padding: 40px 0;
  text-align: center;
  margin-top: 120px;
`

export const Logo = styled.img`
  width: 125px;
`

export const SectionSocial = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
  margin-bottom: 80px;

  img {
    width: 24px;
    height: 24px;
  }
`

export const Disclaimer = styled.p`
  font-size: 10px;
  line-height: 12px;
  max-width: 480px;
  margin: 0 auto;
  color: ${colors.marrom};
`