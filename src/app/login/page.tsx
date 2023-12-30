/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useContext, useEffect } from 'react'
import GamesPlatformContext from '@/context/Context'
import { useRouter } from 'next/navigation'
import { pageTitle } from '@/helpers'
import Link from 'next/link'
import LoginHooks from '@/hooks/LoginHooks'
import { CheckFat, Warning } from '@phosphor-icons/react'

export default function Login() {
  const {
    loginResponse,
    setRegisterResponse,
    setLoginResponse,
    isAuthenticated,
  } = useContext(GamesPlatformContext)
  const router = useRouter()

  console.log(isAuthenticated)
  const { handleSubmit, register, errors, handleFormSubmit } = LoginHooks()

  useEffect(() => {
    if (isAuthenticated) router.push('/minha-conta')
    setRegisterResponse({ error: '', success: '' })
    setLoginResponse({ error: '', success: '' })
  }, [isAuthenticated])

  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 mt-24 xxl:mt-20 sm:gap-6">
      <title>{`${pageTitle} - Entrar`}</title>
      <div className="px-20 py-8 rounded flex flex-col gap-10 items-center justify-center bg-zinc-100 shadow-md sm:w-full sm:py-3 sm:px-3 sm:gap-6">
        <h1 className="font-semibold text-xl text-zinc-800 text-shadow sm:text-lg">
          Fazer login
        </h1>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col justify-center items-center gap-10 sm:w-full sm:gap-6"
        >
          <label htmlFor="email" className="flex flex-col gap-1">
            <span className="text-sm font-semibold">Email</span>
            <input
              {...register('login.email')}
              type="email"
              id="email"
              placeholder="email@exemplo.com"
              className={`${
                errors.login?.email && 'border border-red-300'
              } h-10 w-80 rounded px-3 hover:shadow-lg focus:outline-none focus:shadow-xl shadow`}
            />
            {errors.login?.email && (
              <span className="text-sm font-light text-red-500">
                {errors.login.email.message}
              </span>
            )}
          </label>

          <label htmlFor="password" className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">Senha</span>
              <Link
                href="/redefinir-senha"
                className="font-light text-sm text-teal-600 hover:underline"
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
                errors.login?.password && 'border border-red-300'
              } h-10 w-80 rounded px-3 focus:outline-none text-zinc-700 focus:shadow-xl hover:shadow-lg shadow`}
            />
            {errors.login?.password && (
              <span className="text-sm font-light text-red-500">
                {errors.login.password.message}
              </span>
            )}
          </label>

          <label
            htmlFor="remember"
            className="flex items-center justify-center gap-2"
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
            className="w-80 h-10 bg-teal-400 font-light text-white rounded text-md shadow hover:shadow-lg disabled:opacity-40"
          >
            Entrar
          </button>
          {loginResponse.success && (
            <div className="w-full text-sm text-teal-500 font-semibold flex gap-4 items-center justify-center">
              <CheckFat size={28} weight="light" />
              <h3>{loginResponse.success}</h3>
            </div>
          )}
          {loginResponse.error && (
            <div className="w-full text-sm text-red-500 font-semibold flex gap-4 items-center justify-center">
              <Warning size={28} weight="light" />
              <h3>{loginResponse.error}</h3>
            </div>
          )}
        </form>
      </div>

      <div className="flex flex-col gap-2 justify-center items-center sm:w-full">
        <div className="flex items-center justify-center gap-3 w-full">
          <div className="w-40 border-t sm:w-full" />
          <span className="font-light text-sm text-center sm:w-40">
            Novo na plataforma?
          </span>
          <div className="w-40 border-t sm:w-full" />
        </div>
        <button
          type="button"
          className="w-48 h-10 bg-orange-400 text-zinc-800 rounded text-sm font-light shadow hover:shadow-lg"
          onClick={() => router.push('/cadastro')}
        >
          Crie sua conta
        </button>
      </div>
    </div>
  )
}
