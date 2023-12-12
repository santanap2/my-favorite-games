'use client'

import { useEffect, useState } from 'react'
import { IChildren, IGame, IUserOrders } from '@/interfaces'
import orders from '@/data/userOrders'
import { games } from '@/data/games'
import GamesPlatformContext from './Context'

export const ContextGamesPlatform = ({ children }: IChildren) => {
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0

  const [headerSearch, setHeaderSearch] = useState({
    headerInput: '',
  })

  const [reseted, setReseted] = useState(false)

  const [registerSuccess, setRegisterSuccess] = useState(false)

  const [logged, setLogged] = useState(false)

  const [cart, setCart] = useState<IGame[]>([])

  const [showCart, setShowCart] = useState(false)

  const [screenSize, setScreenSize] = useState(windowWidth)

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

  const [userOrders, setUserOrders] = useState<IUserOrders[]>(orders)

  const [filteredProducts, setFilteredProducts] = useState(games)

  const [showSearchInputMobile, setShowSearchInputMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => setScreenSize(window.innerWidth))
      return () => {
        window.removeEventListener('resize', () =>
          setScreenSize(window.innerWidth),
        )
      }
    }
  }, [])

  const contextValues = {
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

    screenSize,
    setScreenSize,

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

    showSearchInputMobile,
    setShowSearchInputMobile,
  }

  return (
    <GamesPlatformContext.Provider value={contextValues}>
      {children}
    </GamesPlatformContext.Provider>
  )
}
