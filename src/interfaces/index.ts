import { FunctionComponent, ReactNode } from 'react'

export interface ICard {
  image: string
  name: string
  area: string
  price: number
  id: number
}

export interface IChildren {
  children: ReactNode
}

export interface IInitialValueContext {
  headerSearch: {
    headerInput: string
  }
  setHeaderSearch: React.Dispatch<React.SetStateAction<string>>

  loginInputs: {
    emailInput: string
    passwordInput: string
    remember: boolean
  }
  setLoginInputs: React.Dispatch<React.SetStateAction<string>>
}

export interface IMenuItem {
  Icon: string | FunctionComponent
  name: string
  size: number
  link: string
  iconClass: string
  especialClass?: string
}

export interface IWelcomeUser {
  username: string
  email: string
}

export interface IUserOrderCard {
  image: string
  name: string
  id: number
}

export interface IParams {
  params: {
    id: string
  }
}

export interface ICartItem {
  area: string
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
  showButton?: boolean
  items: ICartItem[]
}
