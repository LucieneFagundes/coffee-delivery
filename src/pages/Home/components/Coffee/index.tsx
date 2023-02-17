import { ShoppingCartSimple } from 'phosphor-react'
import {
  CoffeeCard,
  CoffeeName,
  Description,
  ControlBuy,
  Price,
  AmountCoffee,
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
          R$<span>{coffee.price}</span>
        </Price>
        <BoxInput>
          <AmountCoffee type="number" defaultValue={1} min="1" />
          <Button>
            <ShoppingCartSimple size={22} weight="fill" />
          </Button>
        </BoxInput>
      </ControlBuy>
    </CoffeeCard>
  )
}
