import { z } from 'zod'

export type HeaderSearch = {
  headerInput: string
}
export type LoginInputs = {
  emailLogin: string
  passwordLogin: string
  remember: boolean
}

export type ResetPassword = {
  emailReset: string
}

export type RegisterUser = {
  emailRegister: string
  passwordRegister: string
}

export type PaymentMethod = {
  pix: boolean
  creditCard: boolean
  bankSlip: boolean
}
