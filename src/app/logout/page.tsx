'use client'

import GamesPlatformContext from '@/context/Context'
import { pageTitle, removerUserLocalStorage } from '@/helpers'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

export default function Logout() {
  const router = useRouter()
  const { setLoginResponse } = useContext(GamesPlatformContext)

  useEffect(() => {
    removerUserLocalStorage()
    setLoginResponse({ error: '', success: '' })
    router.push('/home')
  }, [router, setLoginResponse])

  return (
    <div className="mt-24 xxl:mt-20">
      <title>{`${pageTitle} - Sair`}</title>
      <div>Saindo...</div>
    </div>
  )
}
