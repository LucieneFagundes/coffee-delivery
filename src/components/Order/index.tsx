import {
  ConfirmButton,
  OrderBox,
  OrderContainer,
  Total,
  Title,
  Item,
  ItemInteraction,
  ItemLabel,
  ItemInfo,
  RemoveButton,
} from './styles'
import coffee from '../../assets/coffee/arabe.png'
import { InputNumber } from '../InputNumber'
import { Trash } from 'phosphor-react'

export function Order() {
  return (
    <>
      <OrderContainer>
        <Title>Cafés selecionados</Title>
        <OrderBox>
          <Item>
            <img src={coffee} />
            <ItemInfo>
              <ItemLabel>
                <span>Café Árabe</span>
                <span>R$ 9,90</span>
              </ItemLabel>
              <ItemInteraction>
                <InputNumber />
                <RemoveButton>
                  <Trash />
                  Remover
                </RemoveButton>
              </ItemInteraction>
            </ItemInfo>
          </Item>
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
