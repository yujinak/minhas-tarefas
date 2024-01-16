import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  width: 100%;
  max-width: 547px;
  font-size: 14px;
  font-weight: bold;
  color: ${variaveis.cinzaMedio};

  textarea {
    resize: none;
    margin: 16px 0;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }
  label {
    margin-right: 6px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
