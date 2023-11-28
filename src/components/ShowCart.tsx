'use client'

import CoursesPlatformContext from '@/context/Context'
import React, { useContext } from 'react'
import ShoppingCart from './ShoppingCart'
import BlackBg from './BlackBg'

export default function ShowCart() {
  const { showCart } = useContext(CoursesPlatformContext)
  return (
    <>
      {showCart ? (
        <>
          <ShoppingCart />
          <BlackBg />
        </>
      ) : (
        ''
      )}
    </>
  )
}
