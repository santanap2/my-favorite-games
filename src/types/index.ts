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

export type CardData = {
  cardData: {
    cardNumber: string
    cardName: string
    cardDate: string
    cardCvv: string
    cardPortions: string
  }
}
