/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

import { ICartItem } from '@/interfaces'
import {
  HeaderSearch,
  PaymentMethod,
  LoginInputs,
  ResetPassword,
  RegisterUser,
} from '@/types'
import { createContext } from 'react'

const initialValueContext = {
  headerSearch: {
    headerInput: '',
  },
  setHeaderSearch: (state: HeaderSearch) => {},

  loginInputs: {
    emailLogin: '',
    passwordLogin: '',
    remember: false,
  },
  setLoginInputs: (state: LoginInputs) => {},

  resetPassword: {
    emailReset: '',
  },
  setResetPassword: (state: ResetPassword) => {},

  registerUser: {
    emailRegister: '',
    passwordRegister: '',
  },
  setRegisterUser: (state: RegisterUser) => {},

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
}

const CoursesPlatformContext = createContext(initialValueContext)

export default CoursesPlatformContext
