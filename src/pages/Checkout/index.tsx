import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  AddressForm,
  BoxHeader,
  CheckoutContainer,
  Input,
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
          <AddressForm>
            <Input type="number" placeholder="CEP" style={{ width: '35%' }} />
            <Input type="text" placeholder="Rua" />
            <div style={{ display: 'flex', gap: '12px', }}>
              <Input
                type="text"
                placeholder="Número"
                style={{ width: '35%'}}
              />
              <Input type="text" placeholder="Complemento" style={{ flex: 2 }} />
            </div>
            <div style={{ display: 'flex', gap: '12px' , justifyContent: 'flex-start' }}>
              <Input
                type="text"
                placeholder="Bairro"
                style={{ width: '35%' }}
              />
              <Input type="text" placeholder="Cidade" style={{flex: 2}} />
              <Input type="text" placeholder="UF" style={{width: '10%'}} />
            </div>
          </AddressForm>
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
