/* eslint-disable @next/next/no-img-element */
'use client'

import { pageTitle } from '@/helpers'
import React, { useContext } from 'react'
import Link from 'next/link'
import GamesPlatformContext from '@/context/Context'
import CadastroHooks from '@/hooks/RegisterUserHooks'
import LoadingSpinner from '@/components/general/LoadingSpinner'
import { Check, Warning } from '@phosphor-icons/react/dist/ssr'

export default function Cadastro() {
  const { registerResponse, loading } = useContext(GamesPlatformContext)
  const { errors, handleFormSubmit, handleSubmit, register } = CadastroHooks()

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center p-6 lg:px-8 mt-12 w-full">
      <title>{`Cadastre-se - ${pageTitle}`}</title>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="/logo-min.png"
          alt="My Fav Games"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Cadastre-se
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto w-full sm:max-w-sm flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="space-y-6 sm:w-full w-96"
        >
          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Endereço de email
            </label>
            <div className="mt-2 w-full">
              <input
                {...register('registerUser.email')}
                id="email"
                type="email"
                placeholder="email@exemplo.com"
                className={`${
                  errors.registerUser?.email
                    ? 'ring-red-500 ring-opacity-60'
                    : 'ring-neutral-600'
                } bg-transparent outline-none block w-full rounded-md border-0 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {errors.registerUser?.email && (
                <span className="text-sm font-light text-red-500">
                  {errors.registerUser?.email.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmEmail"
              className="block text-sm font-medium leading-6 text-white"
            >
              Confirme seu email
            </label>
            <div className="mt-2">
              <input
                {...register('registerUser.confirmEmail')}
                id="confirmEmail"
                type="email"
                placeholder="email@exemplo.com"
                className={`${
                  errors.registerUser?.confirmEmail
                    ? 'ring-red-500 ring-opacity-60'
                    : 'ring-neutral-600'
                } bg-transparent outline-none block w-full rounded-md border-0 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {errors.registerUser?.confirmEmail && (
                <span className="text-sm font-light text-red-500">
                  {errors.registerUser?.confirmEmail.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-white"
            >
              Nome
            </label>
            <div className="mt-2">
              <input
                {...register('registerUser.name')}
                id="name"
                type="text"
                placeholder="Seu nome"
                className={`${
                  errors.registerUser?.name
                    ? 'ring-red-500 ring-opacity-60'
                    : 'ring-neutral-600'
                } bg-transparent outline-none block w-full rounded-md border-0 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {errors.registerUser?.name && (
                <span className="text-sm font-light text-red-500">
                  {errors.registerUser?.name.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-white"
            >
              Celular
            </label>
            <div className="mt-2">
              <input
                {...register('registerUser.phone')}
                id="phone"
                type="text"
                maxLength={15}
                placeholder="(99) 99999-9999"
                className={`${
                  errors.registerUser?.phone
                    ? 'ring-red-500 ring-opacity-60'
                    : 'ring-neutral-600'
                } bg-transparent outline-none block w-full rounded-md border-0 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {errors.registerUser?.phone && (
                <span className="text-sm font-light text-red-500">
                  {errors.registerUser?.phone.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white"
              >
                Senha
              </label>
            </div>
            <div className="mt-2">
              <input
                {...register('registerUser.password')}
                id="password"
                type="password"
                placeholder="************"
                className={`${
                  errors.registerUser?.password
                    ? 'ring-red-500 ring-opacity-60'
                    : 'ring-neutral-600'
                } bg-transparent outline-none block w-full rounded-md border-0 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-neutral-600 placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {errors.registerUser?.password && (
                <span className="text-sm font-light text-red-500">
                  {errors.registerUser.password.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-white"
              >
                Confirme sua senha
              </label>
            </div>
            <div className="mt-2">
              <input
                {...register('registerUser.confirmPassword')}
                id="confirmPassword"
                type="password"
                placeholder="************"
                className={`${
                  errors.registerUser?.confirmPassword
                    ? 'ring-red-500 ring-opacity-60'
                    : 'ring-neutral-600'
                } bg-transparent outline-none block w-full rounded-md border-0 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-neutral-600 placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
              {errors.registerUser?.confirmPassword && (
                <span className="text-sm font-light text-red-500">
                  {errors.registerUser.confirmPassword.message}
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-40"
            disabled={!!registerResponse.success}
          >
            {loading.registerUser ? (
              <span className="flex items-center justify-center w-full gap-4">
                <LoadingSpinner />
                <span>Carregando...</span>
              </span>
            ) : (
              'Cadastrar'
            )}
          </button>
        </form>

        {registerResponse.success && (
          <div className="mt-6 w-full text-sm text-green-500 font-semibold flex gap-4 items-center justify-center">
            <Check weight="regular" className="text-2xl" />
            <h3>{registerResponse.success}</h3>
          </div>
        )}

        {registerResponse.error && (
          <div className="mt-6 w-full text-sm text-red-500 font-semibold flex gap-4 items-center justify-center">
            <Warning weight="regular" className="text-2xl" />
            <h3>{registerResponse.error}</h3>
          </div>
        )}

        <p className="mt-6 text-center text-sm text-neutral-500">
          <Link
            href="/api/auth/signin"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-700 hover:underline"
          >
            Retornar para o login
          </Link>
        </p>
      </div>
    </div>
  )
}
