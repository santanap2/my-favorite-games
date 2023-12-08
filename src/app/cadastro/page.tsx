'use client'

import RegisterSuccess from '@/components/RegisterSuccess'
import RegisterUser from '@/components/RegisterUser'
import ReturnLogin from '@/components/ReturnLogin'
import GamesPlatformContext from '@/context/Context'
import React, { useContext } from 'react'

export default function Cadastro() {
  const { registerSuccess } = useContext(GamesPlatformContext)
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 mt-24 sm:gap-6">
      {registerSuccess ? (
        <div className="flex flex-col gap-10 w-full items-center justify-center">
          <RegisterSuccess />
          <ReturnLogin />
        </div>
      ) : (
        <RegisterUser />
      )}
    </div>
  )
}
