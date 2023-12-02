/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import LateralMenu from '@/components/LateralMenu'
import CoursesPlatformContext from '@/context/Context'
import { Heart } from '@phosphor-icons/react'
import React, { useContext, useEffect } from 'react'

export default function MeusFavoritos() {
  const { showMenu, setShowMenu } = useContext(CoursesPlatformContext)

  useEffect(() => {
    setShowMenu({ ...showMenu, myAccount: true })
  }, [])

  return (
    <div className="mt-24 w-full h-full">
      <LateralMenu />
      <div className="flex gap-1 w-fit items-center justify-center">
        <Heart weight="fill" size={56} className="text-sky-500" />
        <h1 className="font-regular text-xl font-semibold">Meus favoritos</h1>
      </div>
    </div>
  )
}
