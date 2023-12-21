/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import { IGame, ILoading, IUserOrders } from '@/interfaces'
import { HeaderSearch, PaymentMethod, CardData } from '@/types'
import { createContext } from 'react'
import orders from '@/data/userOrders'
import { games } from '@/data/games'

const initialValueContext = {
  headerSearch: { headerInput: '' },
  setHeaderSearch: (state: HeaderSearch) => {},

  reseted: false,
  setReseted: (state: boolean) => {},

  logged: false,
  setLogged: (state: boolean) => {},

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

  userOrders: orders,
  setUserOrders: (state: IUserOrders[]) => {},

  showMenu: {
    filters: false,
    myAccount: true,
  },
  setShowMenu: (state: { filters: boolean; myAccount: boolean }) => {},

  filteredProducts: games,
  setFilteredProducts: (state: IGame[]) => {},

  showSearchInputMobile: false,
  setShowSearchInputMobile: (state: boolean) => {},

  screenSize: 0,
  setScreenSize: (state: number) => {},

  loading: {
    registerUser: false,
    updateUserData: false,
  },
  setLoading: (state: ILoading) => {},

  registerSuccess: '',
  setRegisterSuccess: (state: string) => {},

  registerError: '',
  setRegisterError: (state: string) => {},

  userDataSuccess: '',
  setUserDataSuccess: (state: string) => {},

  userDataError: '',
  setUserDataError: (state: string) => {},
}

const GamesPlatformContext = createContext(initialValueContext)

export default GamesPlatformContext
