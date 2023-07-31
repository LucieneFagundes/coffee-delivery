import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 1.875rem;
`
export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  row-gap: 2rem;

  border-radius: 6;
  background-color: ${(props) => props.theme['base-card']};
`

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  div {
    gap: 0.125rem;
  }

  svg {
    color: ${(props) => props.theme['purple']};
  }

  #first {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Input = styled.input`
  padding: 0.75rem;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  font-size: 0.875rem;
`
export const AlignButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`

export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;

  background-color: ${(props) => props.theme['base-button']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 6;

  text-transform: uppercase;
  font-size: 0.75rem;

  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme['purple']};
  }

  svg {
    color: ${(props) => props.theme['purple']};
    font-size: 1rem;
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
  font-size: 0.875rem;
`
