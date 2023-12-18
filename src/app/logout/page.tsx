'use client'

import GamesPlatformContext from '@/context/Context'
import { pageTitle } from '@/helpers'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

export default function Logout() {
  const router = useRouter()
  const { setLogged } = useContext(GamesPlatformContext)

  useEffect(() => {
    setLogged(false)
    router.push('/home')
  }, [router, setLogged])

  return (
    <div className="mt-24 lg:mt-20">
      <title>{`${pageTitle} - Sair`}</title>
      <div>Saindo...</div>
    </div>
  )
}
