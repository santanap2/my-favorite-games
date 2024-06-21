/* eslint-disable @next/next/no-img-element */
'use client'

import GamesPlatformContext from '@/context/Context'
import React, { useContext } from 'react'
import RedefinirSenhaHooks from '@/hooks/ResetPasswordHooks'
import { pageTitle } from '@/helpers'
import Link from 'next/link'

export default function RedefinirSenha() {
  const { reseted, registerResponse, setRegisterResponse } =
    useContext(GamesPlatformContext)

  const { handleFormSubmit, handleSubmit, errors, register } =
    RedefinirSenhaHooks()

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center p-6 lg:px-8 mt-12 w-full">
      <title>{`Entrar - ${pageTitle}`}</title>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="/logo-min.png"
          alt="My Fav Games"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-neutral-50">
          Redefinir senha
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
              className="block text-sm font-medium leading-6 text-neutral-200"
            >
              Endereço de email
            </label>
            <div className="mt-2">
              <input
                {...register('resetPassword.email')}
                id="email"
                type="email"
                autoComplete="email"
                placeholder="email@exemplo.com"
                required
                className={`${
                  errors.resetPassword?.email
                    ? 'ring-red-500 ring-opacity-60'
                    : 'ring-neutral-600'
                } bg-transparent outline-none block w-full rounded-md border-0 py-1.5 px-3 text-neutral-200 shadow-sm ring-1 ring-inset placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {errors.resetPassword?.email && (
                <span className="text-sm font-light text-red-500">
                  {errors.resetPassword.email.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-40"
              disabled={!!registerResponse.success}
            >
              Enviar
            </button>
          </div>
        </form>

        {reseted ? (
          <span className="mt-6 text-sm font-light text-slate-200 text-center">
            Por favor confira seu email para redefinir sua senha.
          </span>
        ) : (
          ''
        )}

        <p className="mt-10 text-center text-sm text-neutral-500">
          <Link
            href="/api/auth/signin"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-700 hover:underline"
            onClick={() => setRegisterResponse({ success: '', error: '' })}
          >
            Retornar para o Login
          </Link>
        </p>
      </div>
    </div>
  )
}
