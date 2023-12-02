/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import LateralMenu from '@/components/LateralMenu'
import CoursesPlatformContext from '@/context/Context'
import React, { useContext, useEffect } from 'react'

export default function Page() {
  const { showMenu, setShowMenu } = useContext(CoursesPlatformContext)

  useEffect(() => {
    setShowMenu({ ...showMenu, myAccount: true })
  }, [])

  return (
    <div className="mt-24">
      <LateralMenu />
      <div>Ajuda</div>
    </div>
  )
}
