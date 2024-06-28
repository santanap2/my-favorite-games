'use client'

import { useState } from 'react'
import { IChildren } from '@/interfaces'
import GamesPlatformContext from './Context'

export const ContextGamesPlatform = ({ children }: IChildren) => {
  const [reseted, setReseted] = useState(false)

  const [showMenu, setShowMenu] = useState({
    filters: false,
    myAccount: false,
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

  const [filters, setFilters] = useState({
    myGames: 'alphabetical',
    myFavorites: 'alphabetical',
    myEvaluations: 'date',
  })

  const contextValues = {
    reseted,
    setReseted,

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
