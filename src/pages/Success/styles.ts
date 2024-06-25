import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`

export const Title = styled.h1`
  color: ${(props) => props.theme['yellow-dark']};
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
`

export const Subtitle = styled.h3`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  margin-top: 0.25rem;
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  margin-top: 2.5rem;
`

export const DetailsContainer = styled.div<{ theme: string }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme.purple}
      )
      border-box;
  border-radius: 6px 36px;
  border: 2px solid transparent;
`

export const IconText = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`
