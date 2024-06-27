/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import { ILoading, IResponseState, PaymentMethod } from '@/interfaces'
import { createContext } from 'react'

const initialValueContext = {
  reseted: false,
  setReseted: (state: boolean) => {},

  paymentMethod: {
    pix: true,
    creditCard: false,
    bankSlip: false,
  },
  setPaymentMethod: (state: PaymentMethod) => {},

  showMenu: {
    filters: false,
    myAccount: false,
  },
  setShowMenu: (state: { filters: boolean; myAccount: boolean }) => {},

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

  filters: {
    myGames: 'alphabetical',
    myFavorites: 'alphabetical',
    myEvaluations: 'date',
  },
  setFilters: (state: {
    myGames: string
    myFavorites: string
    myEvaluations: string
  }) => {},
}

const GamesPlatformContext = createContext(initialValueContext)

export default GamesPlatformContext
