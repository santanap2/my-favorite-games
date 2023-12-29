'use client'

import LoadingSpinner from '@/components/LoadingSpinner'
import GamesPlatformContext from '@/context/Context'
import { pageTitle, removeUserLocalStorage } from '@/helpers'
import { logoutAuthCookie } from '@/helpers/cookies'
import { removeTokenFromHeaders } from '@/services'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

export default function Logout() {
  const router = useRouter()
  const { setLoginResponse } = useContext(GamesPlatformContext)

  useEffect(() => {
    removeUserLocalStorage()
    removeTokenFromHeaders()
    logoutAuthCookie()
    setLoginResponse({ error: '', success: '' })
    router.push('/home')
  }, [router, setLoginResponse])

  return (
    <div className="mt-24 xxl:mt-20">
      <title>{`${pageTitle} - Sair`}</title>
      <div>Saindo...</div>
      <LoadingSpinner />
    </div>
  )
}
