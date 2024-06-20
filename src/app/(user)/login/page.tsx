/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { pageTitle } from '@/helpers'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { Warning } from '@phosphor-icons/react'
import { myAction } from './_actions/login'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function Login({ errorMessage }: { errorMessage?: string }) {
  const { status } = useSession()
  if (status === 'authenticated') redirect('/minha-conta')

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
    <div className="flex min-h-full flex-1 flex-col justify-center p-6 lg:px-8 mt-12 w-full">
      <title>{`Entrar - ${pageTitle}`}</title>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="/logo-min.png"
          alt="My Fav Games"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-neutral-50">
          Faça login em sua conta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto w-full sm:max-w-sm flex flex-col items-center justify-center">
        <form className="space-y-6 sm:w-full w-96" action={myAction}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-neutral-200"
            >
              Endereço de email
            </label>
            <div className="mt-2">
              <input
                {...register('email')}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="email@exemplo.com"
                required
                className={`${
                  errors.email
                    ? 'ring-red-500 ring-opacity-60'
                    : 'ring-neutral-600'
                } bg-transparent outline-none block w-full rounded-md border-0 py-1.5 px-3 text-neutral-200 shadow-sm ring-1 ring-inset placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6`}
              />
              {errors.email && (
                <span className="text-sm font-light text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-neutral-200"
              >
                Senha
              </label>
              <div className="text-sm">
                <Link
                  href="/redefinir-senha"
                  className="font-semibold text-indigo-500 hover:text-indigo-600 hover:underline"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                {...register('password')}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="************"
                required
                className={`${
                  errors.password
                    ? 'ring-red-500 ring-opacity-60'
                    : 'ring-neutral-600'
                } bg-transparent outline-none block w-full rounded-md border-0 py-1.5 px-3 text-neutral-200 shadow-sm ring-1 ring-inset ring-neutral-600 placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6`}
              />
              {errors.password && (
                <span className="text-sm font-light text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-40"
              disabled={buttonDisabled()}
            >
              Entrar
            </button>
          </div>
        </form>

        {errorMessage && (
          <div className="w-full text-center flex items-center justify-center gap-2 mt-6">
            <Warning className="text-red-500" size={24} weight="light" />
            <span className="text-red-500 text-sm tracking-tight">
              {errorMessage}
            </span>
          </div>
        )}

        <p className="mt-10 text-center text-sm text-neutral-500">
          Não possui uma conta?{' '}
          <Link
            href="/cadastro"
            className="font-semibold leading-6 text-indigo-500 hover:text-indigo-600 hover:underline"
          >
            Cadastre-se agora
          </Link>
        </p>
      </div>
    </div>
  )
}
