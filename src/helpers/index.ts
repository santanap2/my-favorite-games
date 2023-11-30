import { ICartItem } from '@/interfaces'

export const calcSum = (cart: ICartItem[]) => {
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

export const creditCardMask = (number: string) => {
  number = number
    .replace(/\D/g, '')
    .replace(/^(\d{4})(\d)/g, '$1 $2')
    .replace(/^(\d{4})\s(\d{4})(\d)/g, '$1 $2 $3')
    .replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g, '$1 $2 $3 $4')
  return number
}

export const credCardDateMask = (number: string) => {
  number = number.replace(/\D/g, '').replace(/^(\d{2})(\d)/g, '$1/$2')
  return number
}

export const cvvMask = (number: string) => {
  number = number.replace(/\D/g, '')
  return number
}

export const phoneNumberMask = (number: string) => {
  if (!number) return ''
  number = number
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d)(\d{4})$/, '$1-$2')
  return number
}
