import styled from 'styled-components'
import { defaultTheme } from '../../styles/theme/default'

export type IconColor = keyof typeof defaultTheme

type Props = {
  color: IconColor
}

export const Container = styled.span<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 9999px;
  background-color: ${({ color, theme }) => theme[color]};

  svg {
    color: ${({ theme }) => theme.white};
  }
`
