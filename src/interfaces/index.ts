import { FunctionComponent, ReactNode } from 'react'

export interface ICard {
  image: string
  name: string
  category: string
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
  category: {
    id: number
    name: string
    namePt: string
  }
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

export interface ICategory {
  name: string
  namePt: string
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
  user?: {
    created_at: string
    email: string
    id: number
    name: string
    phone: string
  }
  value: number
}

export interface ICardData {
  cardNumber: string
  cardName: string
  cardDate: string
  cardCvv: string
  cardPortions: string
}

export interface IPaymentData {
  paymentMethod: string
  cardData?: ICardData
}

export interface IFiltersData {
  [key: string]: boolean
}

export interface IEvaluation {
  id: number
  created_at: Date
  stars: number
  description: string
  user: { name: string }
  productId: number
  product: IGame
}

export interface IGameWithOrderInfo extends IGame {
  orderInfo: {
    id: number
    date: Date
  }
}
