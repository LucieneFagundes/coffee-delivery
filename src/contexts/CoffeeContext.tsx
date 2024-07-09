import React, { createContext } from 'react'

interface Coffee {
  id: number
  name: string
  tag: string[]
  description: string
  price: number
  image: string
  quantity: number
}

interface CoffeeContextType {
  coffee: Coffee[]
  handleAddCoffee: (coffee: Coffee) => void
  handleRemoveCoffee: (id: number) => void
}

interface CoffeeProviderProps {
  children: React.ReactNode
}

export const CoffeeContext = createContext<CoffeeContextType>(
  {} as CoffeeContextType,
)

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffee, setCoffee] = React.useState<Coffee[]>([])

  const handleAddCoffee = React.useCallback((coffee: Coffee) => {
    setCoffee((prev) => {
      const existingCoffee = prev.find((c) => c.id === coffee.id)
      if (existingCoffee) {
        console.log('existingCoffee: ', existingCoffee)
        return prev.map((c) =>
          c.id === coffee.id
            ? { ...c, quantity: c.quantity + coffee.quantity }
            : c,
        )
      } else {
        return [...prev, coffee]
      }
    })
  }, [])

  const handleRemoveCoffee = React.useCallback((id: number) => {
    return
    setCoffee((prev) => prev.filter((c) => c.id !== id))
  }, [])

  const coffeeQuantityById = coffee.reduce<Record<number, number>>(
    (acc, item) => {
      acc[item.id] = (acc[item.id] || 0) + item.quantity
      return acc
    },
    {},
  )

  return (
    <CoffeeContext.Provider
      value={{ coffee, handleAddCoffee, handleRemoveCoffee }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
