import { FunctionComponent, ReactNode } from 'react'

export interface ICard {
  image: string
  name: string
  genrePt: string
  genre: string
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

export interface IUserProductCard {
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
  name: string
  genre: string
  genrePt: string
  price: number
  id: number
  image: string
  description: string
}

export interface ILastOrderDetail {
  orderNumber: number
  price: number
  date: Date
  status: string
  payment: string
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

export interface PaymentMethod {
  pix: boolean
  creditCard: boolean
  bankSlip: boolean
}

export interface IUserOrders {
  orderNumber: number
  price: number
  date: Date
  payment: string
  status: string
  items: IGame[]
}

export interface IUser {
  email: string
  password: string
}

export interface IRegister extends IUser {
  name: string
  phone: string
}

export interface IUpdateUserData {
  name?: string
  currentEmail: string
  newEmail?: string
  phone?: string
  currentPassword: string
  newPassword?: string
}

export interface ILoading {
  registerUser: boolean
  updateUserData: boolean
  login: boolean
  cart: boolean
}

export interface IResponseState {
  error: string
  success: string
}

export interface IPayloadJWT {
  id: number
  name: string
  email: string
  phone: string
  token: string
}

export interface ISearchParams {
  searchParams: {
    size: string
  }
}

export interface IOrderData {
  id: number
  created_at: Date
  payment_method: string
  products: IGame[]
  status: string
  userId: number
  value: number
}
