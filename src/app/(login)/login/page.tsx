/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useContext } from 'react'
import { pageTitle } from '@/helpers'
import { Warning } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import LoginHooks from '@/hooks/LoginHooks'
import GamesPlatformContext from '@/context/Context'
import LoadingSpinner from '@/components/general/LoadingSpinner'

export default function Login() {
  const { buttonDisabled, errors, handleFormSubmit, handleSubmit, register } =
    LoginHooks()
  const { loginResponse, loading } = useContext(GamesPlatformContext)

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center p-6 lg:px-8 mt-12 w-full text-neutral-300">
      <title>{`Entrar - ${pageTitle}`}</title>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="/logo-min.png"
          alt="My Fav Games"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
          Faça login em sua conta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto w-full sm:max-w-sm flex flex-col items-center justify-center">
        <form
          className="space-y-6 sm:w-full w-96"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
            >
              Endereço de email
            </label>
            <div className="mt-2">
              <input
                {...register('email')}
                id="email"
                type="email"
                autoComplete="email"
                placeholder="email@exemplo.com"
                required
                className={`${
                  errors.email
                    ? 'ring-red-500 ring-opacity-60'
                    : 'ring-neutral-600'
                } bg-transparent outline-none block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6`}
              />
              {errors.email && (
                <span className="text-sm font-light text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6"
              >
                Senha
              </label>
              <div className="text-sm">
                <Link
                  href="/redefinir-senha"
                  className="font-semibold hover hover:underline"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                {...register('password')}
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="************"
                required
                className={`${
                  errors.password
                    ? 'ring-red-500 ring-opacity-60'
                    : 'ring-neutral-600'
                } bg-transparent outline-none block w-full rounded-md border-0 py-1.5 px-3 shadow-sm ring-1 ring-inset ring-neutral-600 placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6`}
              />
              {errors.password && (
                <span className="text-sm font-light text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-neutral-300 text-neutral-800 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-40"
              disabled={buttonDisabled()}
            >
              {loading.login ? <LoadingSpinner colored /> : 'Entrar'}
            </button>
          </div>
        </form>

        {loginResponse.error && (
          <div className="w-full text-center flex items-center justify-center gap-2 mt-6">
            <Warning className="text-red-500" size={24} weight="light" />
            <span className="text-red-500 text-sm tracking-tight">
              {loginResponse.error}
            </span>
          </div>
        )}

        <p className="mt-10 text-center text-sm text-neutral-500">
          Não possui uma conta?{' '}
          <Link
            href="/cadastro"
            className="font-semibold leading-6 hover hover:underline text-neutral-300"
          >
            Cadastre-se agora
          </Link>
        </p>
      </div>
    </div>
  )
}
