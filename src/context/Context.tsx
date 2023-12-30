/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import { IGame, ILoading, IResponseState, IUserOrders } from '@/interfaces'
import { HeaderSearch, PaymentMethod } from '@/types'
import { createContext } from 'react'
import orders from '@/data/userOrders'
import { games } from '@/data/games'
import { getUserByToken } from '@/services/user.requests'

const initialValueContext = {
  headerSearch: { headerInput: '' },
  setHeaderSearch: (state: HeaderSearch) => {},

  reseted: false,
  setReseted: (state: boolean) => {},

  showCart: false,
  setShowCart: (state: boolean) => {},

  paymentMethod: {
    pix: true,
    creditCard: false,
    bankSlip: false,
  },
  setPaymentMethod: (state: PaymentMethod) => {},

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
    login: false,
    cart: false,
  },
  setLoading: (state: ILoading) => {},

  registerResponse: { error: '', success: '' },
  setRegisterResponse: (state: IResponseState) => {},

  userDataResponse: { error: '', success: '' },
  setUserDataResponse: (state: IResponseState) => {},

  loginResponse: { error: '', success: '' },
  setLoginResponse: (state: IResponseState) => {},

  isAuthenticated: false,
  setIsAuthenticated: (state: boolean) => {},
}

const GamesPlatformContext = createContext(initialValueContext)

export default GamesPlatformContext
