'use client'

import LateralMenu from '@/components/LateralMenu'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [router])

  return (
    <div className="mt-32">
      <LateralMenu />
      <div>Saindo...</div>
    </div>
  )
}
