import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 1.875rem;
`
export const OrderContainer = styled.div`
display: flex;
flex-direction: column;
gap: .75rem;
`

export const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  row-gap: 2rem;

  border-radius: 6;
  background-color: ${(props) => props.theme['base-input']};
`


export const BoxHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  div{
    gap: .125rem;
  }

  svg {
    color: ${props => props.theme['purple']};
  }

  #first {
    color: ${props => props.theme['yellow-dark']};
  }
`



// Text formatting
export const Title = styled.h3`
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  color: ${(props) => props.theme['base-subtitle']};
  padding-bottom: 0.9375rem;
`

export const SmallText = styled.p`
  font-size: .875rem;

`
