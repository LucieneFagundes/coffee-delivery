import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import {
  ButtonCart,
  ButtonLocalization,
  HeaderContainer,
  NavButtons,
} from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  //TODO : Estilizar o ButtonCart para quando houver item no carrinho

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} />
      </NavLink>

      <NavButtons>
        <ButtonLocalization>
          <MapPin size={22} />
          Rio de Janeiro, RJ
        </ButtonLocalization>
        <NavLink to="/checkout" title="checkout">
          <ButtonCart>
            <ShoppingCart size={22} weight="fill" />
          </ButtonCart>
        </NavLink>
      </NavButtons>
    </HeaderContainer>
  )
}
