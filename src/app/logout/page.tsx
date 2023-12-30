/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import LoadingSpinner from '@/components/LoadingSpinner'
import GamesPlatformContext from '@/context/Context'
import { pageTitle } from '@/helpers'
import { requestLogout } from '@/services/user.requests'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

export default function Logout() {
  const router = useRouter()
  const { setLoginResponse, setIsAuthenticated } =
    useContext(GamesPlatformContext)

  useEffect(() => {
    requestLogout()
    setIsAuthenticated(false)
    setLoginResponse({ error: '', success: '' })

    setTimeout(() => {
      router.push('/home')
    }, 500)
  }, [])

  return (
    <div className="mt-24 xxl:mt-20 w-full flex flex-col items-center justify-center gap-4 h-[400px]">
      <title>{`${pageTitle} - Sair`}</title>
      <LoadingSpinner />
      <span className="text-lg font-semibold">Fazendo logout...</span>
    </div>
  )
}
