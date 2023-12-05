/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import { ICartItem, ILateralFilters } from '@/interfaces'
import { HeaderSearch, PaymentMethod, CardData, userOrders } from '@/types'
import { createContext } from 'react'
import orders from '@/data/userOrders'
import { courses } from '@/data/courses'

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

  userOrders: {
    orders,
  },
  setUserOrders: (state: userOrders) => {},

  showMenu: {
    filters: false,
    myAccount: true,
  },
  setShowMenu: (state: { filters: boolean; myAccount: boolean }) => {},

  filteredProducts: courses,
  setFilteredProducts: (state: ICartItem[]) => {},
}

const CoursesPlatformContext = createContext(initialValueContext)

export default CoursesPlatformContext
