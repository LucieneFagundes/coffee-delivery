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
import { priceFormatter } from '../../../../utils/formatter'
import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

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
  const { handleAddCoffee } = useContext(CoffeeContext)

  let arrayTags = coffee.tag
  let tags = arrayTags.flatMap((tag) => tag.split(','))

  function handleCount() {
    let amount = document.getElementById(
      `amount-coffee-${coffee.id}`,
    ) as HTMLInputElement
    let value = Number(amount.value)

    if (value === 0) return

    const newCoffee = {
      ...coffee,
      quantity: value,
    }

    handleAddCoffee(newCoffee)
  }

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
          <span>{priceFormatter.format(coffee.price)}</span>
        </Price>
        <BoxInput>
          <InputNumber id={`amount-coffee-${coffee.id}`} min={0} max={99} />
          <Button onClick={handleCount}>
            <ShoppingCartSimple size={22} weight="fill" />
          </Button>
        </BoxInput>
      </ControlBuy>
    </CoffeeCard>
  )
}
