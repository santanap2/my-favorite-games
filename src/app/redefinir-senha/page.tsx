'use client'

import GamesPlatformContext from '@/context/Context'
import React, { useContext } from 'react'
import RedefinirSenhaHooks from '@/hooks/ResetPasswordHooks'
import { pageTitle } from '@/helpers'
import { useRouter } from 'next/navigation'

export default function RedefinirSenha() {
  const { reseted, setRegisterResponse } = useContext(GamesPlatformContext)

  const { handleFormSubmit, handleSubmit, errors, register } =
    RedefinirSenhaHooks()

  const router = useRouter()

  return (
    <div className="flex flex-col gap-10 mt-24 xxl:mt-20">
      <title>{`${pageTitle} - Redefinir senha`}</title>

      <div className="px-20 py-8 rounded flex flex-col gap-10 items-center justify-center bg-zinc-100 shadow">
        <h1 className="font-semibold text-xl text-zinc-800 text-shadow">
          Redefinir senha
        </h1>

        <form
          className="flex flex-col justify-center items-center gap-10"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <label htmlFor="email" className="flex flex-col gap-1">
            <span className="text-sm font-semibold">Email</span>
            <input
              {...register('resetPassword.email')}
              type="email"
              id="email"
              placeholder="email@exemplo.com"
              className={`${
                errors.resetPassword?.email && 'border border-red-300'
              } h-10 w-80 rounded px-3 hover:shadow-lg focus:outline-none focus:shadow-xl shadow`}
            />
            {errors.resetPassword?.email && (
              <span className="text-sm font-light text-red-500">
                {errors.resetPassword.email.message}
              </span>
            )}
          </label>

          <button
            type="submit"
            className="w-80 h-10 bg-teal-400 text-zinc-800 rounded text-md font-regular shadow hover:shadow-lg disabled:opacity-40"
          >
            Enviar
          </button>
        </form>

        {reseted ? (
          <span className="text-sm font-light text-zinc-800">
            Por favor confira seu email para redefinir sua senha.
          </span>
        ) : (
          ''
        )}
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
          onClick={() => {
            setRegisterResponse({ success: '', error: '' })
            router.push('/login')
          }}
        >
          Voltar
        </button>
      </div>
    </div>
  )
}
