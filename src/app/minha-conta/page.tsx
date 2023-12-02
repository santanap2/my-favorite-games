/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import LateralMenu from '@/components/LateralMenu'
import LoggedUser from '@/components/LoggedUser'
import CoursesPlatformContext from '@/context/Context'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

export default function MinhaConta() {
  const { logged, setLogged, showMenu, setShowMenu } = useContext(
    CoursesPlatformContext,
  )

  const router = useRouter()

  useEffect(() => {
    if (!logged) {
      setLogged(false)
      router.push('/login')
    }
    setShowMenu({ ...showMenu, myAccount: true })
  }, [])

  return (
    <div className="w-full">
      <LateralMenu />
      <LoggedUser />
    </div>
  )
}
