/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import { ICartItem } from '@/interfaces'
import { HeaderSearch, PaymentMethod, CardData } from '@/types'
import { createContext } from 'react'

const initialValueContext = {
  headerSearch: {
    headerInput: '',
  },
  setHeaderSearch: (state: HeaderSearch) => {},

  reseted: false,
  setReseted: (state: boolean) => {},

  registerSuccess: false,
  setRegisterSuccess: (state: boolean) => {},

  logged: false,
  setLogged: (state: boolean) => {},

  cart: [],
  setCart: (state: ICartItem[]) => {},

  showCart: false,
  setShowCart: (state: boolean) => {},

  paymentMethod: {
    pix: true,
    creditCard: false,
    bankSlip: false,
  },
  setPaymentMethod: (state: PaymentMethod) => {},

  cardData: {
    cardData: {
      cardNumber: '',
      cardName: '',
      cardDate: '',
      cardCvv: '',
      cardPortions: '1',
    },
  },
  setCardData: (state: CardData) => {},
}

const CoursesPlatformContext = createContext(initialValueContext)

export default CoursesPlatformContext
