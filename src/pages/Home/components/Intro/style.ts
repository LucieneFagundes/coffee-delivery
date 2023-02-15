import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  gap: 3.375rem;
`

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  line-height: 130%;
  margin-bottom: 1rem;

  color: ${(props) => props.theme['base-title']};
`
export const Subtitle = styled.h3`
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
  margin-bottom: 4.125rem;
`

export const BoxQualities = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 20px 40px;

  p {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    color: ${(props) => props.theme['base-text']};
    line-height: 130%;
  }
`
const BaseIcon = styled.span`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 999px;
  color: ${(props) => props.theme.white};
`

export const IconYellowDark = styled(BaseIcon)`
  background: ${(props) => props.theme['yellow-dark']};
`
export const IconGray = styled(BaseIcon)`
  background: ${(props) => props.theme['base-text']};
`
export const IconYellow = styled(BaseIcon)`
  background: ${(props) => props.theme['yellow']};
`
export const IconPurple = styled(BaseIcon)`
  background: ${(props) => props.theme['purple']};
`