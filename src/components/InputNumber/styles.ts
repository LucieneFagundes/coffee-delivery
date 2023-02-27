import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: .5rem;
  font-size: 1rem;
  width: 4.5rem;
  background: ${(props) => props.theme['base-button']};
`

export const InputLabel = styled.input`
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  width: 1.25rem;
  border-radius: 6px;
  border: none;
  background: transparent;
  text-align: center;
`

export const ButtonControl = styled.button`
  border: none;
  background: transparent;
  color: ${props => props.theme.purple};
  
  :hover{
    color: ${props => props.theme['purple-dark']};
  }
  :disabled{
    color: ${props => props.theme['purple-light']};
  }
`
