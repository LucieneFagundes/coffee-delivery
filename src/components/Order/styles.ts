import styled from 'styled-components'

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const Title = styled.h3`
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  color: ${(props) => props.theme['base-subtitle']};
  padding-bottom: 0.9375rem;
`

export const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  row-gap: 2rem;

  border-radius: 0.375rem;
  background-color: ${(props) => props.theme['base-card']};
`

export const Itens = styled.div`
  display: flex;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const ItemInteraction = styled.div`
  display: flex;
  flex-direction: column;

  span {
    display: flex;
    flex-direction: row;
  }
`

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 1.5rem 0;
  font-size: 14px;

  p {
    display: flex;
    justify-content: space-between;
  }

  p:last-child {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: bold;
    font-size: 20px;
  }
`
export const ConfirmButton = styled.button`
  background-color: ${(props) => props.theme['yellow']};
  border-radius: 0.375rem;
  border: 0;
  padding: 0.75rem 0.5rem;

  color: #fff;
  text-transform: uppercase;
  font-size: 0.875rem;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme['yellow-dark']};
    transition-duration: 0.5s;
  }

  :focus {
    outline: 0.125rem solid ${(props) => props.theme['purple']};
  }
`
