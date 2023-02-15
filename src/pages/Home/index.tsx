import { Intro } from './components/Intro'
import { MenuCoffee } from './components/MenuCoffee'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <MenuCoffee />
    </HomeContainer>
  )
}
