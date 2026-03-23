import styled from 'styled-components'
import { colors } from '../../Styles/GlobalStyles'

export const FormContainer = styled.div`
  color: ${colors.begeClaro};

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .form-group {
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;

    label {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    input {
      background-color: ${colors.begeClaro};
      border: 1px solid ${colors.begeClaro};
      height: 32px;
      padding: 0 8px;
      font-weight: bold;
      color: #4b4b4b;
    }
  }

  .flex-group {
    display: flex;
    gap: 34px;
    
    .form-group {
      width: 100%;
    }
  }

  .margin-top {
    margin-top: 24px;
  }
`