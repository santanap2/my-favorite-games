import { FunctionComponent, ReactNode } from 'react'

export interface ICard {
  image: string
  name: string
  area: string
  price: number
  id: number
}

export interface ITextInput {
  target: {
    name: string
    value: string
  }
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

export interface ILastOrderDetail {
  order: number
  name: string
  status: string
  date: Date
  payment: string
}
