import CadastroHooks from '@/hooks/RegisterUser'
import React from 'react'

export default function RegisterUser() {
  const { errors, handleFormSubmit, handleSubmit, register } = CadastroHooks()

  return (
    <div className="mt-24 px-20 py-8 rounded-md flex flex-col gap-10 items-center justify-center bg-zinc-100 shadow">
      <h1 className="font-semibold text-xl text-zinc-800 text-shadow">
        Cadastre-se
      </h1>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col justify-center items-center gap-10"
      >
        <label htmlFor="email" className="flex flex-col gap-1">
          <span className="text-sm font-semibold">Email</span>
          <input
            {...register('registerUser.email')}
            type="email"
            id="email"
            placeholder="email@exemplo.com"
            className="h-10 w-80 rounded-md px-3 hover:shadow-lg focus:outline-none focus:shadow-xl shadow"
          />
          {errors.registerUser?.email && (
            <span className="text-sm font-light text-red-500">
              {errors.registerUser.email.message}
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
            className="h-10 w-80 rounded-md px-3 focus:outline-none text-zinc-700 focus:shadow-xl hover:shadow-lg shadow"
          />
          {errors.registerUser?.password && (
            <span className="text-sm font-light text-red-500">
              {errors.registerUser.password.message}
            </span>
          )}
        </label>

        <button
          type="submit"
          className="w-80 h-10 bg-sky-400 font-light text-white rounded-md text-regular shadow hover:shadow-lg disabled:opacity-40"
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}
