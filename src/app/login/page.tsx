/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useContext, useEffect } from 'react'
import GamesPlatformContext from '@/context/Context'
import { redirect, useRouter } from 'next/navigation'
import { pageTitle } from '@/helpers'
import Link from 'next/link'
import LoginHooks from '@/hooks/LoginHooks'
import { CheckFat, Warning } from '@phosphor-icons/react'
import LoadingSpinner from '@/components/LoadingSpinner'

export default function Login() {
  const {
    loginResponse,
    setRegisterResponse,
    setLoginResponse,
    isAuthenticated,
    loading,
  } = useContext(GamesPlatformContext)

  const router = useRouter()
  if (isAuthenticated) redirect('/minha-conta')

  const { handleSubmit, register, errors, handleFormSubmit } = LoginHooks()

  useEffect(() => {
    setRegisterResponse({ error: '', success: '' })
    setLoginResponse({ error: '', success: '' })
  }, [isAuthenticated])

  return (
    <>
      {isAuthenticated && null}
      {!isAuthenticated && (
        <div className="w-full flex flex-col justify-center items-center gap-10 mt-24 xxl:mt-20 sm:gap-6 animation-opacity transition-all">
          <title>{`${pageTitle} - Entrar`}</title>
          <div className="px-20 py-8 rounded flex flex-col gap-10 items-center justify-center bg-slate-800 shadow-md sm:w-full sm:py-3 sm:px-3 sm:gap-6">
            <h1 className="font-semibold text-xl text-zinc-100 text-shadow sm:text-lg">
              Fazer login
            </h1>

            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="flex flex-col justify-center items-center gap-10 sm:w-full sm:gap-6"
            >
              <label htmlFor="email" className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-zinc-100">
                  Email
                </span>
                <input
                  {...register('login.email')}
                  type="email"
                  id="email"
                  placeholder="email@exemplo.com"
                  className={`${
                    errors.login?.email && 'border border-rose-500'
                  } bg-slate-700 h-10 w-80 rounded px-3 hover:shadow-lg focus:outline-none focus:shadow-xl shadow text-zinc-200 placeholder:text-zinc-500`}
                />
                {errors.login?.email && (
                  <span className="text-sm font-light text-rose-500">
                    {errors.login.email.message}
                  </span>
                )}
              </label>

              <label htmlFor="password" className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-zinc-100">
                    Senha
                  </span>
                  <Link
                    href="/redefinir-senha"
                    className="font-light text-sm text-rose-600 hover:underline"
                  >
                    Esqueci a senha
                  </Link>
                </div>
                <input
                  {...register('login.password')}
                  type="password"
                  id="password"
                  placeholder="**********"
                  className={`${
                    errors.login?.password && 'border border-rose-500'
                  } bg-slate-700 h-10 w-80 rounded px-3 focus:outline-none focus:shadow-xl hover:shadow-lg shadow text-zinc-200 placeholder:text-zinc-500`}
                />
                {errors.login?.password && (
                  <span className="text-sm font-light text-rose-500">
                    {errors.login.password.message}
                  </span>
                )}
              </label>

              <label
                htmlFor="remember"
                className="flex items-center justify-center gap-2 text-zinc-100"
              >
                <input
                  {...register('login.rememberUser')}
                  type="checkbox"
                  id="remember"
                />
                <span>Lembre-me</span>
              </label>

              <button
                type="submit"
                className="w-80 h-10 flex items-center justify-center bg-rose-500 font-light text-white rounded text-md shadow hover:bg-rose-600 disabled:opacity-40 transition-all"
              >
                {loading.login ? <LoadingSpinner /> : 'Entrar'}
              </button>
              {loginResponse.success && (
                <div className="w-full text-sm text-rose-500 font-semibold flex gap-4 items-center justify-center">
                  <CheckFat className="text-3xl" weight="light" />
                  <h3>{loginResponse.success}</h3>
                </div>
              )}
              {loginResponse.error && (
                <div className="w-full text-sm text-rose-500 font-semibold flex gap-4 items-center justify-center">
                  <Warning className="text-3xl" weight="light" />
                  <h3>{loginResponse.error}</h3>
                </div>
              )}
            </form>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center sm:w-full">
            <div className="flex items-center justify-center gap-3 w-full">
              <div className="w-40 border-t sm:w-full" />
              <span className="text-zinc-200 font-light text-sm text-center sm:w-40">
                Novo na plataforma?
              </span>
              <div className="w-40 border-t sm:w-full" />
            </div>
            <button
              type="button"
              className="w-48 h-10 bg-rose-500 text-zinc-50 rounded text-sm font-light shadow hover:bg-rose-600 transition-all"
              onClick={() => router.push('/cadastro')}
            >
              Crie sua conta
            </button>
          </div>
        </div>
      )}
    </>
  )
}
