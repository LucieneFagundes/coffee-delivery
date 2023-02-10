import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`

export const NavButtons = styled.nav`
  display: flex;
  gap: 0.75rem;
`

const BaseButton = styled.button`
  border: none;
  border-radius: 6px;
  padding: 8px;

  cursor: pointer;
`

export const ButtonLocalization = styled(BaseButton)`
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  display: flex;
  align-items: center;
  gap: 4px;
`

export const ButtonCart = styled(BaseButton)`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`
