export type HeaderSearch = {
  headerInput: string
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
