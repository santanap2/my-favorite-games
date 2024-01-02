/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import { ILoading, IResponseState, PaymentMethod } from '@/interfaces'
import { createContext } from 'react'

const initialValueContext = {
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

  showMenu: {
    filters: false,
    myAccount: true,
  },
  setShowMenu: (state: { filters: boolean; myAccount: boolean }) => {},

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
