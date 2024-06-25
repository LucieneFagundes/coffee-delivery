import backgroundImg from '../../../../assets/backgroundImg.png'
import CoffeCup from '../../../../assets/coffee_cup.svg'
import { Icon } from '../../../../components/Icon'
import {
  BoxQualities,
  ColLeft,
  ColRight,
  Subtitle,
  Title,
  Wrapper,
} from './style'

export function Intro() {
  return (
    <Wrapper backgroundImg={backgroundImg}>
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
            <Icon variant="shoppingCart" color="yellow-dark" weight="fill" />
            Compra simples e segura
          </p>
          <p>
            <Icon variant="package" color="base-text" weight="fill" />
            Embalagem mantém o café intacto
          </p>
          <p>
            <Icon variant="timer" color="yellow" weight="fill" />
            Entrega rápida e rastreada
          </p>
          <p>
            <Icon variant="coffee" color="purple" weight="fill" />O café chega
            fresquinho até você
          </p>
        </BoxQualities>
      </ColLeft>
      <ColRight>
        <img src={CoffeCup} alt="Copo de café com grãos de café em volta" />
      </ColRight>
    </Wrapper>
  )
}
