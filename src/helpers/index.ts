import { IGame } from '@/interfaces'

export const pageTitle = 'My Favorite Games'

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

export const currencyMask = (value: string) => {
  value = value.replace(/\D/g, '')

  return value
}

export const getCartLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem('cart') || 'null')
  return cart
}

export const addToCart = (item: IGame) => {
  const cart: IGame[] =
    JSON.parse(localStorage.getItem('cart') || 'false') || []
  const isItemInCart = cart.some((cartItem) => cartItem.id === item.id)
  if (isItemInCart) return

  localStorage.setItem('cart', JSON.stringify([...cart, item]))
}

export const addOnlyOneToCart = (item: IGame) =>
  localStorage.setItem('cart', JSON.stringify([item]))

export const removeFromCart = (id: number) => {
  const cart = getCartLocalStorage() || []
  const newCart = cart.filter((item: IGame) => item.id !== id)
  localStorage.setItem('cart', JSON.stringify(newCart))
}

export const emptyCart = () => localStorage.setItem('cart', '[]')
