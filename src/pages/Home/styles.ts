import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const MenuCoffee = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
  margin-bottom: 1rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
  }
`

export const CoffeeList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 2.5rem;

  @media (max-width: 768px) {
    column-gap: 1rem;
  }

  @media (max-width: 380px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
