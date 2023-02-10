import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import {
  ButtonCart,
  ButtonLocalization,
  HeaderContainer,
  NavButtons,
} from './styles'

export function Header() {
  //TODO : Estilizar o ButtonCart para quando houver item no carrinho

  return (
    <HeaderContainer>
      <img src={logo} />

      <NavButtons>
        <ButtonLocalization>
          <MapPin size={22} />
          Rio de Janeiro, RJ
        </ButtonLocalization>
        <ButtonCart>
          <ShoppingCart size={22} weight="fill" />
        </ButtonCart>
      </NavButtons>
    </HeaderContainer>
  )
}
