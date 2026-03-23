import styled from 'styled-components'
import { colors } from '../../Styles/GlobalStyles'

export const TagContainer = styled.div`
  background-color: ${colors.marrom};
  color: ${colors.begeClaro};
  padding: 6px 4px;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  margin-left: 8px;
`

const Tag = ({ children }: { children: string }) => (
    <TagContainer>{children}</TagContainer>
)

export default Tag