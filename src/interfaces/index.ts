import { FunctionComponent, ReactNode } from 'react'

export interface ICard {
  image: string
  name: string
  areaPt?: string
  area: string
  price: number
  id: number
  description: string
}

export interface IChildren {
  children: ReactNode
}

export interface IMenuItem {
  Icon: string | FunctionComponent
  name: string
  size: number
  link: string
  iconClass: string
  especialClass?: string
}

export interface IUserOrderCard {
  image: string
  name: string
  isGame?: boolean
  gameId: number
  isFavorite?: boolean
  productId: number
}

export interface IGameIDParams {
  params: {
    id: string
  }
}

export interface IGame {
  area: string
  areaPt?: string
  description: string
  id: number
  image: string
  name: string
  price: number
}

export interface ILastOrderDetail {
  orderNumber: number
  price: number
  date: Date
  status: string
  payment: string
  items: IGame[]
}

export interface IGamesGenres {
  camelCaseName: string
  name: string
}

export interface IParamSearch {
  params: {
    search: string
  }
}
