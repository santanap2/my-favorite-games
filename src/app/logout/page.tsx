'use client'

import CoursesPlatformContext from '@/context/Context'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

export default function Logout() {
  const router = useRouter()
  const { setLogged } = useContext(CoursesPlatformContext)

  useEffect(() => {
    setLogged(false)
    router.push('/home')
  }, [router, setLogged])

  return (
    <div className="mt-24">
      <div>Saindo...</div>
    </div>
  )
}
