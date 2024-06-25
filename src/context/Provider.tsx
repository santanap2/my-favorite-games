'use client'

import { useEffect, useState } from 'react'
import { IChildren } from '@/interfaces'
import GamesPlatformContext from './Context'

export const ContextGamesPlatform = ({ children }: IChildren) => {
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0

  const [reseted, setReseted] = useState(false)

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

  const [filters, setFilters] = useState({ myGames: 'alphabetical' })

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
    reseted,
    setReseted,

    screenSize,
    setScreenSize,

    showMenu,
    setShowMenu,

    paymentMethod,
    setPaymentMethod,

    loading,
    setLoading,

    registerResponse,
    setRegisterResponse,

    userDataResponse,
    setUserDataResponse,

    loginResponse,
    setLoginResponse,

    filters,
    setFilters,
  }

  return (
    <GamesPlatformContext.Provider value={contextValues}>
      {children}
    </GamesPlatformContext.Provider>
  )
}
