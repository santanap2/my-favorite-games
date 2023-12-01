'use client'

import { useMemo, useState } from 'react'
import CoursesPlatformContext from './Context'
import { IChildren } from '@/interfaces'

export const ContextCoursesPlatform = ({ children }: IChildren) => {
  const [headerSearch, setHeaderSearch] = useState({
    headerInput: '',
  })

  const [reseted, setReseted] = useState(false)

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

      reseted,
      setReseted,

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
      reseted,
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
