import successOrder from '../../assets/successOrder.png'
import { Icon } from '../../components/Icon'
import {
  Content,
  DetailsContainer,
  IconText,
  LabelContainer,
  Subtitle,
  SuccessContainer,
  Title,
} from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <Title>Uhu! Pedido confirmado</Title>
      <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>

      <Content>
        <DetailsContainer>
          <IconText>
            <Icon variant="mapPin" color="purple" size={16} weight="fill" />
            <LabelContainer>
              <span>
                Entrega em <b>Rua João Daniel Martinelli, 102</b>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </LabelContainer>
          </IconText>
          <IconText>
            <Icon variant="timer" color="yellow" size={16} weight="fill" />
            <LabelContainer>
              <span>Previsão de entrega</span>
              <span>20 min - 30 min</span>
            </LabelContainer>
          </IconText>
          <IconText>
            <Icon
              variant="currentDolar"
              color="yellow-dark"
              size={16}
              weight="fill"
            />
            <LabelContainer>
              <span>Pagamento na entrega</span>
              <span>Cartão de Crédito</span>
            </LabelContainer>
          </IconText>
        </DetailsContainer>
        <img src={successOrder} style={{ flex: 1 }} />
      </Content>
    </SuccessContainer>
  )
}
