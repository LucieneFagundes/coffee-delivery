import {
  ConfirmButton,
  OrderBox,
  OrderContainer,
  Total,
  Title,
  Itens,
  ItemInteraction,
} from './styles'
import coffee from '../../assets/coffee/arabe.png'
import { InputNumber } from '../InputNumber'

export function Order() {
  return (
    <>
      <OrderContainer>
        <Title>Cafés selecionados</Title>
        <OrderBox>
          <Itens>
            <img src={coffee} />
            <ItemInteraction>
              Café Árabe
              <span>
                <InputNumber />
                Remover
              </span>
            </ItemInteraction>
            <span>R$ 9,90</span>
          </Itens>
          <Total>
            <p>
              Total de itens
              <span>R$ 0,00</span>
            </p>
            <p>
              Entrega
              <span>R$ 3,50</span>
            </p>
            <p>
              Total
              <span>R$ 0,00</span>
            </p>
          </Total>
          <ConfirmButton>confirmar pedido</ConfirmButton>
        </OrderBox>
      </OrderContainer>
    </>
  )
}
