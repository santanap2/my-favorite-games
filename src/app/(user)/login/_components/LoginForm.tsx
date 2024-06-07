'use client'

import LoginHooks from '@/hooks/LoginHooks'
import Link from 'next/link'
import React from 'react'
import { myAction } from '../_actions/login'

export default function LoginForm() {
  const { register, errors } = LoginHooks()

  return (
    <form
      action={myAction}
      // onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col justify-center items-center gap-10 sm:w-full sm:gap-6"
    >
      <label htmlFor="email" className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-slate-100">Email</span>
        <input
          {...register('login.email')}
          type="email"
          id="email"
          name="email"
          placeholder="email@exemplo.com"
          className={`${
            errors.login?.email && 'border border-red-500'
          } bg-slate-700 h-10 w-80 rounded px-3 hover:shadow-lg focus:outline-none focus:shadow-xl shadow text-slate-200 placeholder:text-slate-500`}
        />
        {errors.login?.email && (
          <span className="text-sm font-light text-red-500">
            {errors.login.email.message}
          </span>
        )}
      </label>

      <label htmlFor="password" className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-100">Senha</span>
          <Link
            href="/redefinir-senha"
            className="font-light text-sm text-emerald-600 hover:underline"
          >
            Esqueci a senha
          </Link>
        </div>
        <input
          {...register('login.password')}
          type="password"
          id="password"
          name="password"
          placeholder="**********"
          className={`${
            errors.login?.password && 'border border-red-500'
          } bg-slate-700 h-10 w-80 rounded px-3 focus:outline-none focus:shadow-xl hover:shadow-lg shadow text-slate-200 placeholder:text-slate-500`}
        />
        {errors.login?.password && (
          <span className="text-sm font-light text-red-500">
            {errors.login.password.message}
          </span>
        )}
      </label>

      <label
        htmlFor="remember"
        className="flex items-center justify-center gap-2 text-slate-100"
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
        className="w-80 h-10 flex items-center justify-center bg-emerald-500 font-light text-slate-100 rounded text-md shadow hover:bg-emerald-600 disabled:opacity-40 transition-all"
      >
        Entrar
      </button>
    </form>
  )
}
