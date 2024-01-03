import { IGame, IOrderData } from '@/interfaces'

export const sortOrdersByDate = (orders: IOrderData[]) => {
  const result = orders.sort((a, b) => {
    const dataA = new Date(a.created_at)
    const dataB = new Date(b.created_at)

    if (dataA > dataB) {
      return -1
    } else if (dataA < dataB) {
      return 1
    } else {
      return 0
    }
  })

  return result
}

export const sortProductsByName = (products: IGame[]) => {
  const copy = [...products]
  const result = copy.sort((a, b) => {
    const nomeA = a.name.toLowerCase()
    const nomeB = b.name.toLowerCase()

    if (nomeA < nomeB) {
      return -1
    } else if (nomeA > nomeB) {
      return 1
    } else {
      return 0
    }
  })

  return result
}
