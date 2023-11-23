'use client'

import LateralMenu from '@/components/LateralMenu'
import LoggedUser from '@/components/LoggedUser'
import CoursesPlatformContext from '@/context/Context'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

export default function MinhaConta() {
  const { logged, setLogged } = useContext(CoursesPlatformContext)

  const router = useRouter()

  // useEffect(() => {
  //   if (!logged) {
  //     setLogged(false)
  //     router.push('/login')
  //   }
  // }, [logged, router, setLogged])

  return (
    <div>
      <LoggedUser />
    </div>
  )
}
