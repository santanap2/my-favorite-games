'use client'

import Link from 'next/link'
import React from 'react'
import { myAction } from '../_actions/login'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function LoginForm() {
  const formSchema = z.object({
    email: z
      .string()
      .email('Informe um email válido')
      .min(1, 'Informe seu email'),
    password: z.string().min(8, 'Informe uma senha válida'),
    rememberUser: z.boolean(),
  })

  type FormProps = z.infer<typeof formSchema>

  const {
    register,
    formState: { errors },
    watch,
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const buttonDisabled = () => {
    const email = watch('email')
    const password = watch('password')

    if (!email || !password) return true
    if (errors.email || errors.password) return true

    return false
  }

  return (
    <form
      action={myAction}
      className="flex flex-col justify-center items-center gap-10 sm:w-full sm:gap-6"
    >
      <label htmlFor="email" className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-slate-100">Email</span>
        <input
          {...register('email')}
          type="email"
          id="email"
          name="email"
          placeholder="email@exemplo.com"
          className={`${
            errors.email && 'border border-red-500 border-opacity-70'
          } bg-slate-700 h-10 w-80 rounded px-3 hover:shadow-lg focus:outline-none focus:shadow-xl shadow text-slate-200 placeholder:text-slate-500`}
        />
        {errors.email && (
          <span className="text-sm font-light text-red-500">
            {errors.email.message}
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
          {...register('password')}
          type="password"
          id="password"
          name="password"
          placeholder="**********"
          className={`${
            errors.password && 'border border-red-500 border-opacity-70'
          } bg-slate-700 h-10 w-80 rounded px-3 focus:outline-none focus:shadow-xl hover:shadow-lg shadow text-slate-200 placeholder:text-slate-500`}
        />
        {errors.password && (
          <span className="text-sm font-light text-red-500">
            {errors.password.message}
          </span>
        )}
      </label>

      <label
        htmlFor="remember"
        className="flex items-center justify-center gap-2 text-slate-100"
      >
        <input {...register('rememberUser')} type="checkbox" id="remember" />
        <span>Lembre-me</span>
      </label>

      <button
        type="submit"
        className="w-80 h-10 flex items-center justify-center bg-emerald-500 font-light text-slate-100 rounded text-md shadow hover:bg-emerald-600 disabled:opacity-40 transition-all"
        disabled={buttonDisabled()}
      >
        Entrar
      </button>
    </form>
  )
}
