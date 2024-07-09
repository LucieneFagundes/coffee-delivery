import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import {
  ButtonCart,
  ButtonLocalization,
  HeaderContainer,
  NavButtons,
} from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const { coffee } = useContext(CoffeeContext)
  //TODO : Estilizar o ButtonCart para quando houver item no carrinho
  const count = coffee.reduce((acc, item) => acc + item.quantity, 0)

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
            {count > 0 && <span className="data-count">{count}</span>}
          </ButtonCart>
        </NavLink>
      </NavButtons>
    </HeaderContainer>
  )
}
