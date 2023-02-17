import { useEffect, useState } from 'react'
import { getCoffee } from '../../api/axios'
import { Coffee } from './components/Coffee'
import { Intro } from './components/Intro'
import { CoffeeList, HomeContainer, MenuCoffee } from './styles'

interface CoffeeType {
  id: number
  image: string
  name: string
  tag: string[]
  description: string
  price: number
}

export function Home() {
  const [coffee, setCoffee] = useState<CoffeeType[]>([])

  async function returnAllCoffees() {
    var data = await getCoffee()
    setCoffee(data)
  }

  useEffect(() => {
    returnAllCoffees()
  }, [])
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
