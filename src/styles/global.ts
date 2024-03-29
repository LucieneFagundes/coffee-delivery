import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['base-text']};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }

  @media (max-width:1024px) {
    body{
      padding: .25rem;
    }
  }
  @media (max-width: 430px) {
   html {
    font-size: 87.5%;
   }
  }
`
