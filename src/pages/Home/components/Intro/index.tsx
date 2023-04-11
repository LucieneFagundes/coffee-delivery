import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import CoffeCup from '../../../../assets/coffee_cup.svg'
import {
  BoxQualities,
  ColLeft,
  ColRight,
  IconGray,
  IconPurple,
  IconYellow,
  IconYellowDark,
  Subtitle,
  Title,
  Wrapper,
} from './style'

export function Intro() {
  return (
    <Wrapper>
      <ColLeft>
        <div>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
        </div>
        <BoxQualities>
          <p>
            <IconYellowDark>
              <ShoppingCart size={16} weight="fill" />
            </IconYellowDark>
            Compra simples e segura
          </p>
          <p>
            <IconGray>
              <Package size={16} weight="fill" />
            </IconGray>
            Embalagem mantém o café intacto
          </p>
          <p>
            <IconYellow>
              <Timer size={16} weight="fill" />
            </IconYellow>
            Entrega rápida e rastreada
          </p>
          <p>
            <IconPurple>
              <Coffee size={16} weight="fill" />
            </IconPurple>
            O café chega fresquinho até você
          </p>
        </BoxQualities>
      </ColLeft>
      <ColRight>
        <img src={CoffeCup} alt="Copo de café com grãos de café em volta" />
      </ColRight>
    </Wrapper>
  )
}
