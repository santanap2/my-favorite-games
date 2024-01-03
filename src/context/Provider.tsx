'use client'

import { useEffect, useState } from 'react'
import { IChildren } from '@/interfaces'
import GamesPlatformContext from './Context'
import { getUserByToken } from '@/services/user.requests'

export const ContextGamesPlatform = ({ children }: IChildren) => {
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0

  const [reseted, setReseted] = useState(false)

  const [showCart, setShowCart] = useState(false)

  const [screenSize, setScreenSize] = useState(windowWidth)

  const [showMenu, setShowMenu] = useState({
    filters: !(screenSize <= 1280),
    myAccount: !(screenSize <= 1280),
  })

  const [paymentMethod, setPaymentMethod] = useState({
    pix: true,
    creditCard: false,
    bankSlip: false,
  })

  const [showSearchInputMobile, setShowSearchInputMobile] = useState(false)

  const [loading, setLoading] = useState({
    registerUser: false,
    updateUserData: false,
    login: false,
    cart: false,
  })

  const [registerResponse, setRegisterResponse] = useState({
    error: '',
    success: '',
  })

  const [userDataResponse, setUserDataResponse] = useState({
    error: '',
    success: '',
  })

  const [loginResponse, setLoginResponse] = useState({ error: '', success: '' })

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const [showPopUpMenu, setShowPopUpMenu] = useState(false)

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

  useEffect(() => {
    const checkUserAuthentication = async () => {
      const response = await getUserByToken().catch((error) => {
        if (error) setIsAuthenticated(false)
      })
      if (response && response.status === 200) setIsAuthenticated(true)
    }

    checkUserAuthentication()
  }, [])

  const contextValues = {
    reseted,
    setReseted,

    showCart,
    setShowCart,

    screenSize,
    setScreenSize,

    showMenu,
    setShowMenu,

    paymentMethod,
    setPaymentMethod,

    showSearchInputMobile,
    setShowSearchInputMobile,

    loading,
    setLoading,

    registerResponse,
    setRegisterResponse,

    userDataResponse,
    setUserDataResponse,

    loginResponse,
    setLoginResponse,

    isAuthenticated,
    setIsAuthenticated,

    showPopUpMenu,
    setShowPopUpMenu,
  }

  return (
    <GamesPlatformContext.Provider value={contextValues}>
      {children}
    </GamesPlatformContext.Provider>
  )
}
