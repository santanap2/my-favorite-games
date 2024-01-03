'use client'

import LoadingSpinner from '@/components/LoadingSpinner'
import GamesPlatformContext from '@/context/Context'
import { pageTitle } from '@/helpers'
import CadastroHooks from '@/hooks/RegisterUserHooks'
import { CheckFat, Warning } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

export default function Cadastro() {
  const { registerResponse, loading } = useContext(GamesPlatformContext)
  const { errors, handleFormSubmit, handleSubmit, register } = CadastroHooks()

  const router = useRouter()

  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 mt-24 xxl:mt-20 sm:gap-6">
      <title>{`${pageTitle} - Cadastro`}</title>
      <div className="px-20 py-8 rounded flex flex-col gap-10 items-center justify-center bg-zinc-100 shadow-md sm:w-full sm:py-3 sm:gap-6">
        <h1 className="font-semibold text-xl text-zinc-800 text-shadow sm:text-lg">
          Cadastre-se
        </h1>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="flex flex-col justify-center items-center gap-4 sm:gap-6"
        >
          <label htmlFor="email" className="flex flex-col gap-1">
            <span className="text-sm font-semibold">Email</span>
            <input
              {...register('registerUser.email')}
              type="email"
              id="email"
              placeholder="email@exemplo.com"
              className={`${
                errors.registerUser?.email && 'border border-red-300'
              } h-10 w-80 rounded px-3 hover:shadow-lg focus:outline-none focus:shadow-xl shadow`}
            />
            {errors.registerUser?.email && (
              <span className="text-sm font-light text-red-500">
                {errors.registerUser.email.message}
              </span>
            )}
          </label>

          <label htmlFor="confirmEmail" className="flex flex-col gap-1">
            <span className="text-sm font-semibold">Confirmar email</span>
            <input
              {...register('registerUser.confirmEmail')}
              type="email"
              id="confirmEmail"
              placeholder="email@exemplo.com"
              className={`${
                errors.registerUser?.email && 'border border-red-300'
              } h-10 w-80 rounded px-3 hover:shadow-lg focus:outline-none focus:shadow-xl shadow`}
            />
            {errors.registerUser?.confirmEmail && (
              <span className="text-sm font-light text-red-500">
                {errors.registerUser.confirmEmail.message}
              </span>
            )}
          </label>

          <label htmlFor="name" className="flex flex-col gap-1">
            <span className="text-sm font-semibold">Nome completo</span>
            <input
              {...register('registerUser.name')}
              type="text"
              id="name"
              placeholder="Seu nome"
              className={`${
                errors.registerUser?.name && 'border border-red-300'
              } h-10 w-80 rounded px-3 hover:shadow-lg focus:outline-none focus:shadow-xl shadow`}
            />
            {errors.registerUser?.name && (
              <span className="text-sm font-light text-red-500">
                {errors.registerUser.name.message}
              </span>
            )}
          </label>

          <label htmlFor="phone" className="flex flex-col gap-1">
            <span className="text-sm font-semibold">Telefone</span>
            <input
              {...register('registerUser.phone')}
              type="text"
              id="phone"
              placeholder="(99) 99999-9999"
              maxLength={15}
              className={`${
                errors.registerUser?.phone && 'border border-red-300'
              } h-10 w-80 rounded px-3 hover:shadow-lg focus:outline-none focus:shadow-xl shadow`}
            />
            {errors.registerUser?.phone && (
              <span className="text-sm font-light text-red-500">
                {errors.registerUser.phone.message}
              </span>
            )}
          </label>

          <label htmlFor="password" className="flex flex-col gap-1">
            <span className="text-sm font-semibold">Senha</span>

            <input
              {...register('registerUser.password')}
              type="password"
              id="password"
              placeholder="**********"
              className={`${
                errors.registerUser?.password && 'border border-red-300'
              } h-10 w-80 rounded px-3 focus:outline-none text-zinc-700 focus:shadow-xl hover:shadow-lg shadow`}
            />
            {errors.registerUser?.password && (
              <span className="text-sm font-light text-red-500">
                {errors.registerUser.password.message}
              </span>
            )}
          </label>

          <label htmlFor="confirmPassword" className="flex flex-col gap-1">
            <span className="text-sm font-semibold">Confirmar senha</span>

            <input
              {...register('registerUser.confirmPassword')}
              type="password"
              id="confirmPassword"
              placeholder="**********"
              className={`${
                errors.registerUser?.confirmPassword && 'border border-red-300'
              } h-10 w-80 rounded px-3 focus:outline-none text-zinc-700 focus:shadow-xl hover:shadow-lg shadow`}
            />
            {errors.registerUser?.confirmPassword && (
              <span className="text-sm font-light text-red-500">
                {errors.registerUser.confirmPassword.message}
              </span>
            )}
          </label>

          <button
            type="submit"
            className="w-80 h-10 bg-violet-400 font-light text-white rounded text-regular shadow hover:shadow-lg disabled:opacity-40 mt-6"
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

          {registerResponse.success && (
            <div className="w-full text-sm text-violet-500 font-semibold flex gap-4 items-center justify-center">
              <CheckFat size={28} weight="light" />
              <h3>{registerResponse.success}</h3>
            </div>
          )}

          {registerResponse.error && (
            <div className="w-full text-sm text-red-500 font-semibold flex gap-4 items-center justify-center">
              <Warning size={28} weight="light" />
              <h3>{registerResponse.error}</h3>
            </div>
          )}
        </form>
      </div>

      <div className="flex flex-col gap-2 justify-center items-center sm:w-full">
        <div className="flex items-center justify-center gap-3 w-full">
          <div className="w-40 border-t " />
          <span className="font-light text-sm text-center sm:w-40">
            Retornar para o Login
          </span>
          <div className="w-40 border-t " />
        </div>
        <button
          type="button"
          className="w-48 h-10 bg-orange-400 text-zinc-800 rounded text-sm font-light shadow hover:shadow-lg"
          onClick={() => router.push('/login')}
        >
          Voltar
        </button>
      </div>
    </div>
  )
}
