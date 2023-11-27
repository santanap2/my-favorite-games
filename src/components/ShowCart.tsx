'use client'

import CoursesPlatformContext from '@/context/Context'
import React, { useContext } from 'react'
import Cart from './Cart'
import BlackBg from './BlackBg'

export default function ShowCart() {
  const { showCart } = useContext(CoursesPlatformContext)
  return (
    <>
      {showCart ? (
        <>
          <Cart />
          <BlackBg />
        </>
      ) : (
        ''
      )}
    </>
  )
}
