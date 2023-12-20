import React from 'react'
import Link from 'next/link'
import UnloggedUserHooks from '@/hooks/UnloggedUserHooks'

export default function UnloggedUser() {
  const { handleSubmit, register, errors, handleFormSubmit } =
    UnloggedUserHooks()

  return (
    <div className="px-20 py-8 rounded flex flex-col gap-10 items-center justify-center bg-zinc-100 shadow-md sm:w-full sm:py-3 sm:gap-6">
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
            {...register('unloggedUser.email')}
            type="email"
            id="email"
            placeholder="email@exemplo.com"
            className="h-10 w-80 rounded px-3 hover:shadow-lg focus:outline-none focus:shadow-xl shadow"
          />
          {errors.unloggedUser?.email && (
            <span className="text-sm font-light text-red-500">
              {errors.unloggedUser.email.message}
            </span>
          )}
        </label>

        <label htmlFor="password" className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Senha</span>
            <Link
              href="/redefinir-senha"
              className="font-light text-sm text-indigo-600 hover:underline"
            >
              Esqueci a senha
            </Link>
          </div>
          <input
            {...register('unloggedUser.password')}
            type="password"
            id="password"
            placeholder="**********"
            className="h-10 w-80 rounded px-3 focus:outline-none text-zinc-700 focus:shadow-xl hover:shadow-lg shadow"
          />
          {errors.unloggedUser?.password && (
            <span className="text-sm font-light text-red-500">
              {errors.unloggedUser.password.message}
            </span>
          )}
        </label>

        <label
          htmlFor="remember"
          className="flex items-center justify-center gap-2"
        >
          <input
            {...register('unloggedUser.rememberUser')}
            type="checkbox"
            id="remember"
          />
          <span>Lembre-me</span>
        </label>

        <button
          type="submit"
          className="w-80 h-10 bg-indigo-400 font-light text-white rounded text-md shadow hover:shadow-lg disabled:opacity-40"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
