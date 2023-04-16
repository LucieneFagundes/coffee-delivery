import { ShoppingCartSimple } from 'phosphor-react'
import { InputNumber } from '../../../../components/InputNumber'
import {
  CoffeeCard,
  CoffeeName,
  Description,
  ControlBuy,
  Price,
  Button,
  Tag,
  CoffeeImage,
  BoxInput,
} from './styles'

interface Coffee {
  id: number
  image: string
  name: string
  tag: string[]
  description: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function Coffee({ coffee }: CoffeeProps) {
  let arrayTags = coffee.tag
  let tags = arrayTags.flatMap((tag) => tag.split(','))

  let myPriceFormat = coffee.price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })

  return (
    <CoffeeCard>
      <CoffeeImage src={coffee.image} alt={coffee.name} />
      <Tag>
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </Tag>
      <CoffeeName>{coffee.name}</CoffeeName>
      <Description>{coffee.description}</Description>
      <ControlBuy>
        <Price>
          R$
          <span>{myPriceFormat}</span>
        </Price>
        <BoxInput>
          <InputNumber id="amount-coffee" min={0} max={99} />
          <Button>
            <ShoppingCartSimple size={22} weight="fill" />
          </Button>
        </BoxInput>
      </ControlBuy>
    </CoffeeCard>
  )
}
