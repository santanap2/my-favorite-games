/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import LoadingSpinner from '@/components/LoadingSpinner'
import GamesPlatformContext from '@/context/Context'
import { pageTitle } from '@/helpers'
import { requestLogout } from '@/services/user.requests'
import { redirect } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

export default function Logout() {
  const { setLoginResponse, setIsAuthenticated, isAuthenticated } =
    useContext(GamesPlatformContext)

  if (!isAuthenticated) redirect('/home')

  useEffect(() => {
    requestLogout()
    setIsAuthenticated(false)
    setLoginResponse({ error: '', success: '' })

    setTimeout(() => {
      redirect('/home')
    }, 500)
  }, [])

  return (
    <>
      {!isAuthenticated && null}
      {isAuthenticated && (
        <div className="mt-24 xxl:mt-20 w-full flex flex-col items-center justify-center gap-4 h-[400px]">
          <title>{`${pageTitle} - Sair`}</title>
          <LoadingSpinner colored />
          <span className="text-lg font-semibold">Saindo...</span>
        </div>
      )}
    </>
  )
}
