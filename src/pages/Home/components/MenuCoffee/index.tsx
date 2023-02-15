import { ShoppingCartSimple } from 'phosphor-react'
import ExpressoAmericano from '../../../../assets/coffee/expresso_americano.png'
import {
  Wrapper,
  CoffeeCard,
  CoffeeName,
  Description,
  ControlBuy,
  Price,
  AmountCoffee,
  Button,
  Menu,
  Tag,
} from './styles'

export function MenuCoffee() {
  return (
    <Wrapper>
      <h2>Nossos cafés</h2>
      <Menu>
        <CoffeeCard>
          <img src={ExpressoAmericano} alt="Xicará de café americano" />
          <Tag>tradicional</Tag>
          <CoffeeName>Expresso Tradicional</CoffeeName>
          <Description>
            O tradicional café feito com água quente e grâos moídos
          </Description>
          <ControlBuy>
            <Price>
              R$<span>9,90</span>
            </Price>

            <AmountCoffee type="number" defaultValue={0} min="0" />
            <Button>
              <ShoppingCartSimple size={22} weight="fill" />
            </Button>
          </ControlBuy>
        </CoffeeCard>
      </Menu>
    </Wrapper>
  )
}
