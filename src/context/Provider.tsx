'use client'

import { useMemo, useState } from 'react'
import CoursesPlatformContext from './Context'
import { IChildren } from '@/interfaces'

export const ContextCoursesPlatform = ({ children }: IChildren) => {
  const [loginInputs, setLoginInputs] = useState({
    emailLogin: '',
    passwordLogin: '',
    remember: false,
  })

  const [headerSearch, setHeaderSearch] = useState({
    headerInput: '',
  })

  const [resetPassword, setResetPassword] = useState({
    emailReset: '',
  })

  const [registerUser, setRegisterUser] = useState({
    emailRegister: '',
    passwordRegister: '',
  })

  const [registerSuccess, setRegisterSuccess] = useState(false)

  const [logged, setLogged] = useState(false)

  const [cart, setCart] = useState([])

  const [showCart, setShowCart] = useState(false)

  const [paymentMethod, setPaymentMethod] = useState({
    pix: true,
    creditCard: false,
    bankSlip: false,
  })

  const [cardData, setCardData] = useState({
    cardData: {
      cardNumber: '',
      cardName: '',
      cardDate: '',
      cardCvv: '',
      cardPortions: '1',
    },
  })

  const context = useMemo(
    () => ({
      headerSearch,
      setHeaderSearch,

      loginInputs,
      setLoginInputs,

      resetPassword,
      setResetPassword,

      registerUser,
      setRegisterUser,

      registerSuccess,
      setRegisterSuccess,

      logged,
      setLogged,

      cart,
      setCart,

      showCart,
      setShowCart,

      paymentMethod,
      setPaymentMethod,

      cardData,
      setCardData,
    }),
    [
      headerSearch,
      loginInputs,
      resetPassword,
      registerUser,
      registerSuccess,
      logged,
      cart,
      showCart,
      paymentMethod,
      cardData,
    ],
  )

  return (
    <CoursesPlatformContext.Provider value={context}>
      {children}
    </CoursesPlatformContext.Provider>
  )
}
