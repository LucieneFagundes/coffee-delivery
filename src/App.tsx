import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { CoffeeContext, CoffeeProvider } from './contexts/CoffeeContext'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <CoffeeProvider>
          <Router />
        </CoffeeProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
