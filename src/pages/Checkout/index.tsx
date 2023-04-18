import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  BoxHeader,
  CheckoutContainer,
  OrderBox,
  OrderContainer,
  SmallText,
  Title,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderContainer>
        <Title>Complete seu pedido</Title>
        <OrderBox>
          <BoxHeader>
            <MapPinLine size={22} id="first" />
            <div>
              <p>Endereço de entrega</p>
              <SmallText>
                Informe o endereço onde deseja receber seu pedido
              </SmallText>
            </div>
            <br />
          </BoxHeader>
          <form>
            <input type="number" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </form>
        </OrderBox>
        <OrderBox>
          <BoxHeader>
            <CurrencyDollar size={22} />
            <div>
              <p>Pagamento</p>
              <SmallText>
                O pagamento é feito na entrega. Escolha a forma que deseja
                pagar.
              </SmallText>
            </div>
          </BoxHeader>
          <div>
            <button>Cartão de crédito</button>
            <button>Cartão de débito</button>
            <button>Dinheiro</button>
          </div>
        </OrderBox>
      </OrderContainer>
      <div>
        <Title>Cafés selecionados</Title>
      </div>
    </CheckoutContainer>
  )
}
