/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React from 'react'
import { pageTitle } from '@/helpers'
import LoginForm from './_components/LoginForm'
import RegisterButton from './_components/RegisterButton'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { Warning } from '@phosphor-icons/react'

export default function Login({ errorMessage }: { errorMessage?: string }) {
  const { status } = useSession()
  if (status === 'authenticated') redirect('/minha-conta')

  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 mt-24 xxl:mt-20 sm:gap-6">
      <title>{`${pageTitle} - Entrar`}</title>
      <div
        className={`px-20 py-8 rounded flex flex-col gap-10 items-center justify-center bg-slate-800 shadow-md sm:w-full sm:py-3 sm:px-3 sm:gap-6 ${errorMessage && 'border border-red-500 border-opacity-70'}`}
      >
        <h1 className="font-semibold text-xl text-slate-100 text-shadow sm:text-lg">
          Fazer login
        </h1>
        <LoginForm />
        {errorMessage && (
          <div className="w-full text-center flex items-center justify-center gap-2">
            <Warning className="text-red-500" size={24} weight="light" />
            <span className="text-red-500 text-sm tracking-tight">
              {errorMessage}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 justify-center items-center sm:w-full">
        <div className="flex items-center justify-center gap-3 w-full">
          <div className="w-40 border-t sm:w-full" />
          <span className="text-slate-200 font-light text-sm text-center sm:w-40">
            Novo na plataforma?
          </span>
          <div className="w-40 border-t sm:w-full" />
        </div>
        <RegisterButton />
      </div>
    </div>
  )
}
