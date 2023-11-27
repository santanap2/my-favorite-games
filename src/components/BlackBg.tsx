'use client'

import CoursesPlatformContext from '@/context/Context'
import React, { useContext } from 'react'

export default function BlackBg() {
  const { showCart, setShowCart } = useContext(CoursesPlatformContext)

  return (
    <div
      className="bg-black opacity-60 w-screen h-screen fixed top-0 bottom-0 left-0 right-0 z-40 animation-opacity"
      onClick={() => setShowCart(!showCart)}
    ></div>
  )
}
