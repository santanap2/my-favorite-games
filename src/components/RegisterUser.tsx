import GamesPlatformContext from '@/context/Context'
import CadastroHooks from '@/hooks/RegisterUserHooks'
import { CheckFat, Warning } from '@phosphor-icons/react'
import React, { useContext } from 'react'

export default function RegisterUser() {
  const { errors, handleFormSubmit, handleSubmit, register } = CadastroHooks()
  const { registerSuccess, registerError, loading } =
    useContext(GamesPlatformContext)

  return (
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
            className="h-10 w-80 rounded px-3 hover:shadow-lg focus:outline-none focus:shadow-xl shadow"
          />
          {errors.registerUser?.email && (
            <span className="text-sm font-light text-red-500">
              {errors.registerUser.email.message}
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
            className="h-10 w-80 rounded px-3 hover:shadow-lg focus:outline-none focus:shadow-xl shadow"
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
            className="h-10 w-80 rounded px-3 hover:shadow-lg focus:outline-none focus:shadow-xl shadow"
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
            className="h-10 w-80 rounded px-3 focus:outline-none text-zinc-700 focus:shadow-xl hover:shadow-lg shadow"
          />
          {errors.registerUser?.password && (
            <span className="text-sm font-light text-red-500">
              {errors.registerUser.password.message}
            </span>
          )}
        </label>

        <button
          type="submit"
          className="w-80 h-10 bg-indigo-400 font-light text-white rounded text-regular shadow hover:shadow-lg disabled:opacity-40 mt-6"
        >
          {loading.registerUser ? 'Carregando...' : 'Cadastrar'}
        </button>

        {registerError && (
          <div className="w-full text-sm text-red-500 font-semibold flex gap-4 items-center justify-center rounded">
            <Warning size={28} weight="light" />
            <h3>{registerError}</h3>
          </div>
        )}

        {registerSuccess && (
          <div className="w-full text-sm text-indigo-500 font-semibold flex gap-4 items-center justify-center rounded">
            <CheckFat size={28} weight="light" />
            <h3>{registerSuccess}</h3>
          </div>
        )}
      </form>
    </div>
  )
}
