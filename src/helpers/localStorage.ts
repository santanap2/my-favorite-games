import { IPayloadJWT } from '@/interfaces'

// export const getCartLocalStorage = () => {
//   if (typeof window !== 'undefined') {
//     const cart = JSON.parse(localStorage.getItem('cart') || 'null')
//     return cart
//   }
//   return ''
// }

// export const addToCart = (item: IGame) => {
//   if (typeof window !== 'undefined') {
//     const cart: IGame[] =
//       JSON.parse(localStorage.getItem('cart') || 'false') || []
//     const isItemInCart = cart.some((cartItem) => cartItem.id === item.id)
//     if (isItemInCart) return
//
//     localStorage.setItem('cart', JSON.stringify([...cart, item]))
//   }
// }

// export const addOnlyOneToCart = (item: IGame) => {
//   if (typeof window !== 'undefined') {
//     localStorage.setItem('cart', JSON.stringify([item]))
//   }
// }

// export const removeFromCart = (id: number) => {
//   if (typeof window !== 'undefined') {
//     const cart = getCartLocalStorage() || []
//     const newCart = cart.filter((item: IGame) => item.id !== id)
//     localStorage.setItem('cart', JSON.stringify(newCart))
//   }
// }

// export const emptyCart = () => {
//   if (typeof window !== 'undefined') {
//     localStorage.setItem('cart', '[]')
//   }
// }

export const addUserLocalStorage = (user: IPayloadJWT) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('userData', JSON.stringify(user))
  }
}

export const getUserLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const user = JSON.parse(localStorage.getItem('userData') || 'null')
    return user
  }
  return ''
}

export const removeUserLocalStorage = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('userData')
  }
}
