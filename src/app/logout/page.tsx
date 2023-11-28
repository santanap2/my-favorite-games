'use client'

import LateralMenu from '@/components/LateralMenu'
import CoursesPlatformContext from '@/context/Context'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

export default function Page() {
  const router = useRouter()
  const { setLogged } = useContext(CoursesPlatformContext)

  useEffect(() => {
    setLogged(false)
    router.push('/')
  }, [router])

  return (
    <div className="mt-32">
      <LateralMenu />
      <div>Saindo...</div>
    </div>
  )
}
