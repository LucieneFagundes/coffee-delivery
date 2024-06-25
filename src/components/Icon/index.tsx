import { IconProps as PhosphorIconProps } from 'phosphor-react'
import ICON_MAPPER from './IconMapper'
import { Container, IconColor } from './styles'

type IconProps = PhosphorIconProps & {
  variant: keyof typeof ICON_MAPPER
  color: IconColor
  size?: number
}

export const Icon = ({ variant, color, size = 16, ...props }: IconProps) => {
  const Component = ICON_MAPPER[variant]

  return (
    <Container color={color}>
      <Component size={size} {...props} />
    </Container>
  )
}
