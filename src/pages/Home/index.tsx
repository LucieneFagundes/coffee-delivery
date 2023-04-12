import { useState } from 'react'
import { Coffee } from './components/Coffee'
import { Intro } from './components/Intro'
import { CoffeeList, HomeContainer, MenuCoffee } from './styles'
import products from '../../../db.json'

interface CoffeeType {
  id: number
  image: string
  name: string
  tag: string[]
  description: string
  price: number
}

export function Home() {
  const [coffee, setCoffee] = useState<CoffeeType[]>(products)

  return (
    <>
      <HomeContainer>
        <Intro />
        <MenuCoffee>
          <h2>Nossos cafés</h2>
          <CoffeeList>
            {coffee.map((c) => (
              <Coffee key={c.id} coffee={c} />
            ))}
          </CoffeeList>
        </MenuCoffee>
      </HomeContainer>
    </>
  )
}
