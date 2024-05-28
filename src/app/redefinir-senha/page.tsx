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
    <div className="flex flex-col gap-10 mt-24 xxl:mt-20 animation-opacity transition-all">
      <title>{`${pageTitle} - Redefinir senha`}</title>

      <div className="px-20 py-8 rounded flex flex-col gap-10 items-center justify-center bg-slate-800 shadow animation-opacity transition-all">
        <h1 className="font-semibold text-xl text-slate-200 text-shadow">
          Redefinir senha
        </h1>

        <form
          className="flex flex-col justify-center items-center gap-10"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <label htmlFor="email" className="flex flex-col gap-1 text-slate-200">
            <span className="text-sm font-semibold">Email</span>
            <input
              {...register('resetPassword.email')}
              type="email"
              id="email"
              placeholder="email@exemplo.com"
              className={`${
                errors.resetPassword?.email && 'border border-red-500'
              } h-10 w-80 rounded px-3 hover:shadow-lg focus:outline-none focus:shadow-xl shadow bg-slate-700 placeholder:text-slate-500`}
            />
            {errors.resetPassword?.email && (
              <span className="text-sm font-light text-red-500">
                {errors.resetPassword.email.message}
              </span>
            )}
          </label>

          <button
            type="submit"
            className="w-80 h-10 flex items-center justify-center bg-emerald-500 font-light text-white rounded text-md shadow hover:bg-emerald-600 transition-all disabled:opacity-40"
            disabled={!!reseted}
          >
            Enviar
          </button>
        </form>

        {reseted ? (
          <span className="text-sm font-light text-slate-200">
            Por favor confira seu email para redefinir sua senha.
          </span>
        ) : (
          ''
        )}
      </div>

      <div className="flex flex-col gap-2 justify-center items-center sm:w-full">
        <div className="flex items-center justify-center gap-3 w-full">
          <div className="w-40 border-t " />
          <span className="font-light text-sm text-center sm:w-40 text-slate-200">
            Retornar para o Login
          </span>
          <div className="w-40 border-t " />
        </div>
        <button
          type="button"
          className="w-48 h-10 bg-emerald-500 text-slate-200 rounded text-sm font-light shadow hover:bg-emerald-600"
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
