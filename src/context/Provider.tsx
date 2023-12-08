'use client'

import { useEffect, useMemo, useState } from 'react'
import GamesPlatformContext from './Context'
import { IChildren } from '@/interfaces'
import orders from '@/data/userOrders'
import { games } from '@/data/games'

export const ContextGamesPlatform = ({ children }: IChildren) => {
  const [headerSearch, setHeaderSearch] = useState({
    headerInput: '',
  })

  const [reseted, setReseted] = useState(false)

  const [registerSuccess, setRegisterSuccess] = useState(false)

  const [logged, setLogged] = useState(false)

  const [cart, setCart] = useState([])

  const [showCart, setShowCart] = useState(false)

  const [screenSize, setScreenSize] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setScreenSize(window.innerWidth))
    return () => {
      window.removeEventListener('resize', () =>
        setScreenSize(window.innerWidth),
      )
    }
  }, [])

  const [showMenu, setShowMenu] = useState({
    filters: !(screenSize <= 600),
    myAccount: !(screenSize <= 600),
  })

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

  const [userOrders, setUserOrders] = useState({
    orders,
  })

  const [filteredProducts, setFilteredProducts] = useState(games)

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

      showMenu,
      setShowMenu,

      paymentMethod,
      setPaymentMethod,

      cardData,
      setCardData,

      userOrders,
      setUserOrders,

      filteredProducts,
      setFilteredProducts,
    }),
    [
      headerSearch,
      reseted,
      registerSuccess,
      logged,
      cart,
      showCart,
      showMenu,
      paymentMethod,
      cardData,
      userOrders,
      filteredProducts,
    ],
  )

  return (
    <GamesPlatformContext.Provider value={context}>
      {children}
    </GamesPlatformContext.Provider>
  )
}
