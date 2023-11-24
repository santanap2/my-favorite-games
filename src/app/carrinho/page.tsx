'use client'

import LateralMenu from '@/components/LateralMenu'
import CoursesPlatformContext from '@/context/Context'
import React, { useContext } from 'react'

export default function Page() {
  const { logged } = useContext(CoursesPlatformContext)

  return (
    <div className="mt-32">
      {logged ? <LateralMenu /> : ''}
      <div>Carrinho</div>
    </div>
  )
}
