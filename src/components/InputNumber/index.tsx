import { Minus, Plus } from 'phosphor-react'
import { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import { ButtonControl, InputLabel, Wrapper } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  initialValue?: number
}

export function InputNumber({ initialValue, ...props }: InputProps) {
  const [value, setValue] = useState(initialValue || 0)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value))
  }

  function handleLessClick() {
    setValue(value - 1)
  }
  function handleMoreClick() {
    setValue(value + 1)
  }

  return (
    <>
      <Wrapper>
        <ButtonControl onClick={handleLessClick} disabled={value <= 0}>
          <Minus size={14} weight="bold" />
        </ButtonControl>
        <InputLabel
          type="number"
          id={props.id}
          value={value}
          onChange={handleInputChange}
          {...props}
        />
        <ButtonControl onClick={handleMoreClick}>
          <Plus size={14} weight="bold" />
        </ButtonControl>
      </Wrapper>
    </>
  )
}
