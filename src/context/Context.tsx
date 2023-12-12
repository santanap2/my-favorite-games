/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import { IGame, IUserOrders } from '@/interfaces'
import { HeaderSearch, PaymentMethod, CardData } from '@/types'
import { createContext } from 'react'
import orders from '@/data/userOrders'
import { games } from '@/data/games'

const initialValueContext = {
  headerSearch: { headerInput: '' },
  setHeaderSearch: (state: HeaderSearch) => {},

  reseted: false,
  setReseted: (state: boolean) => {},

  registerSuccess: false,
  setRegisterSuccess: (state: boolean) => {},

  logged: false,
  setLogged: (state: boolean) => {},

  cart: [] as IGame[],
  setCart: (state: IGame[]) => {},

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
}

const GamesPlatformContext = createContext(initialValueContext)

export default GamesPlatformContext
