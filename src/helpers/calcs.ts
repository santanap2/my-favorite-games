import { IGame } from '@/interfaces'

export const calcSum = (cart: IGame[]) => {
  let initialSum = 0
  cart.forEach(({ price }) => (initialSum += price))
  return {
    string: initialSum.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    number: initialSum,
  }
}

export const portionPrice = (price: number, portions: number) => {
  const portion = price / portions
  return Number(portion.toFixed(2)).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
}

export const priceToBRL = (price: number) => {
  return price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}
