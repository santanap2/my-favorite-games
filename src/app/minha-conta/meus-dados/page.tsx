/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import LateralMyAccount from '@/components/LateralMyAccount'
import LoadingSpinner from '@/components/LoadingSpinner'
import GamesPlatformContext from '@/context/Context'
import { pageTitle } from '@/helpers'
import MyDataHooks from '@/hooks/MyDataHooks'
import { getUserByToken } from '@/services'
import {
  CheckFat,
  Envelope,
  IdentificationBadge,
  IdentificationCard,
  Password,
  Phone,
  Warning,
} from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { redirect } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

export default function MeusDados() {
  const { loading, userDataResponse } = useContext(GamesPlatformContext)

  const { isFetched: userIsFetched, error: userError } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => await getUserByToken(),
    retry: false,
  })

  if (
    userIsFetched &&
    userError &&
    userError.message === 'Request failed with status code 401'
  )
    redirect('/api/auth/signin')

  const { handleSubmit, register, errors, handleFormSubmit } = MyDataHooks()

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['userData'],
    queryFn: () => getUserByToken(),
    retry: false,
    staleTime: 1000 * 60 * 3, // 3 minutes
  })

  useEffect(() => {
    refetch()
  }, [])

  return (
    <>
      {userError && null}
      {!userError && (
        <div className="mt-24 xxl:mt-20 w-full h-full">
          <title>{`${pageTitle} - Meus dados`}</title>
          <LateralMyAccount />
          <div className=" w-full h-full flex flex-col gap-10 text-slate-100 sm:gap-6 xxl:justify-center xxl:items-center animation-opacity transition-all">
            <div className="flex gap-1 w-full items-center justify-start">
              <IdentificationCard
                weight="fill"
                className="text-emerald-500 sm:text-3xl text-5xl"
              />
              <h1 className="font-regular text-xl font-semibold">Meus dados</h1>
            </div>

            <div className="flex flex-col gap-6 w-full">
              <div className="w-3/4 h-full bg-slate-800 p-6 rounded shadow-md flex flex-col gap-10 xxl:w-full">
                <form
                  id="myDataForm"
                  className="w-full flex flex-col gap-3"
                  onSubmit={handleSubmit(handleFormSubmit)}
                >
                  <label htmlFor="name" className="flex flex-col w-full">
                    <h2 className="font-semibold text-sm tracking-normal flex gap-1 items-center justify center">
                      <IdentificationBadge
                        weight="light"
                        className="text-emerald-500 text-2xl"
                      />
                      <span>Nome completo</span>
                    </h2>
                    <input
                      {...register('userData.name')}
                      type="text"
                      id="name"
                      className={`px-4 h-10 w-full shadow-sm focus:outline-none hover:shadow-md focus:shadow-lg text-slate-200 bg-slate-700 placeholder:text-slate-500 text-base font-light rounded ${
                        errors.userData?.name && 'border border-red-500'
                      }`}
                      placeholder={
                        isLoading ? 'Carregando...' : data?.data.data.name
                      }
                    />
                    {errors.userData?.name && (
                      <span className="text-sm font-light text-red-500">
                        {errors.userData.name.message}
                      </span>
                    )}
                  </label>

                  <div className="flex w-full justify-between gap-4 xxl:flex-col xxl:gap-3">
                    <label htmlFor="email" className="flex flex-col w-full">
                      <h2 className="font-semibold text-sm tracking-normal flex gap-1 items-center justify center">
                        <Envelope
                          weight="light"
                          className="text-emerald-500 text-2xl"
                        />
                        <span>
                          E-mail{' '}
                          <span className="text-emerald-500 text-base">*</span>
                        </span>
                      </h2>
                      <input
                        {...register('userData.currentEmail')}
                        type="email"
                        id="email"
                        className={`px-4 h-10 w-full shadow-sm focus:outline-none hover:shadow-md focus:shadow-lg text-slate-200 bg-slate-700 placeholder:text-slate-500 text-base font-light rounded ${
                          errors.userData?.currentEmail &&
                          'border border-red-500'
                        }`}
                        value={
                          isLoading ? 'Carregando...' : data?.data.data.email
                        }
                      />
                      {errors.userData?.currentEmail && (
                        <span className="text-sm font-light text-red-500">
                          {errors.userData.currentEmail.message}
                        </span>
                      )}
                    </label>

                    <label htmlFor="newEmail" className="flex flex-col w-full">
                      <h2 className="font-semibold text-sm tracking-normal flex gap-1 items-center justify center">
                        <Envelope
                          weight="light"
                          className="text-emerald-500 text-2xl"
                        />
                        <span>Novo E-mail</span>
                      </h2>
                      <input
                        {...register('userData.newEmail')}
                        type="email"
                        id="newEmail"
                        className={`px-4 h-10 w-full shadow-sm focus:outline-none hover:shadow-md focus:shadow-lg text-slate-200 bg-slate-700 placeholder:text-slate-500 text-base font-light rounded ${
                          errors.userData?.newEmail && 'border border-red-500'
                        }`}
                        placeholder="Digite seu novo email"
                      />
                      {errors.userData?.newEmail && (
                        <span className="text-sm font-light text-red-500">
                          {errors.userData.newEmail.message}
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="flex w-full justify-between gap-4 xxl:flex-col xxl:gap-3">
                    <label htmlFor="phone" className="flex flex-col w-full">
                      <h2 className="font-semibold text-sm tracking-normal flex gap-1 items-center justify center">
                        <Phone
                          weight="light"
                          className="text-emerald-500 text-2xl"
                        />
                        <span>Telefone</span>
                      </h2>
                      <input
                        {...register('userData.phone')}
                        type="tel"
                        id="phone"
                        maxLength={15}
                        className={`px-4 h-10 w-full shadow-sm focus:outline-none hover:shadow-md focus:shadow-lg text-slate-200 bg-slate-700 placeholder:text-slate-500 text-base font-light rounded ${
                          errors.userData?.phone && 'border border-emerald-500'
                        }`}
                        placeholder={
                          isLoading ? 'Carregando...' : data?.data.data.phone
                        }
                      />
                      {errors.userData?.phone && (
                        <span className="text-sm font-light text-red-500">
                          {errors.userData.phone.message}
                        </span>
                      )}
                    </label>

                    <label
                      htmlFor="currentPassword"
                      className="flex flex-col w-full xxl:w-full"
                    >
                      <h2 className="font-semibold text-sm tracking-normal flex gap-1 items-center justify center">
                        <Password
                          weight="light"
                          className="text-emerald-500 text-2xl"
                        />
                        <span>
                          Senha atual{' '}
                          <span className="text-emerald-500 text-base">*</span>
                        </span>
                      </h2>
                      <input
                        {...register('userData.currentPassword')}
                        type="password"
                        id="currentPassword"
                        className={`px-4 h-10 w-full shadow-sm focus:outline-none hover:shadow-md focus:shadow-lg text-slate-200 bg-slate-700 placeholder:text-slate-500 text-base font-light rounded xxl:w-full ${
                          errors.userData?.currentPassword &&
                          'border border-emerald-500'
                        }`}
                        placeholder="Digite sua senha"
                      />
                      {errors.userData?.currentPassword && (
                        <span className="text-sm font-light text-red-500">
                          {errors.userData.currentPassword.message}
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="flex w-full justify-between gap-4 xxl:flex-col xxl:gap-3">
                    <label
                      htmlFor="newPassword"
                      className="flex flex-col w-full xxl:w-full"
                    >
                      <h2 className="font-semibold text-sm tracking-normal flex gap-1 items-center justify center">
                        <Password
                          weight="light"
                          className="text-emerald-500 text-2xl"
                        />
                        <span>Nova senha</span>
                      </h2>
                      <input
                        {...register('userData.newPassword')}
                        type="password"
                        id="newPassword"
                        className={`px-4 h-10 w-full shadow-sm focus:outline-none hover:shadow-md focus:shadow-lg text-slate-200 bg-slate-700 placeholder:text-slate-500 text-base font-light rounded xxl:w-full ${
                          errors.userData?.newPassword &&
                          'border border-red-500'
                        }`}
                        placeholder="Digite sua nova senha"
                      />
                      {errors.userData?.newPassword && (
                        <span className="text-sm font-light text-red-500">
                          {errors.userData.newPassword.message}
                        </span>
                      )}
                    </label>

                    <label
                      htmlFor="confirmNewPassword"
                      className="flex flex-col w-full xxl:w-full"
                    >
                      <h2 className="font-semibold text-sm tracking-normal flex gap-1 items-center justify center">
                        <Password
                          weight="light"
                          className="text-emerald-500 text-2xl"
                        />
                        <span>Confirmar nova senha</span>
                      </h2>
                      <input
                        {...register('userData.confirmNewPassword')}
                        type="password"
                        id="confirmNewPassword"
                        className={`px-4 h-10 w-full shadow-sm focus:outline-none hover:shadow-md focus:shadow-lg text-slate-200 bg-slate-700 placeholder:text-slate-500 text-base font-light rounded xxl:w-full ${
                          errors.userData?.confirmNewPassword &&
                          'border border-red-500'
                        }`}
                        placeholder="Confirme sua nova senha"
                      />
                      {errors.userData?.confirmNewPassword && (
                        <span className="text-sm font-light text-red-500">
                          {errors.userData.confirmNewPassword.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <span className="text-emerald-500 text-sm font-light">
                    * Campos obrigatórios
                  </span>
                </form>
                <div className="w-full flex flex-col gap-4 justify-start sm:justify-center sm:w-full">
                  <button
                    type="submit"
                    form="myDataForm"
                    className="flex items-center justify-center bg-emerald-500 w-80 px-6 py-3 rounded shadow-md hover:bg-emerald-600 transition-all font-semibold text-sm text-slate-100 sm:w-full sm:px-16 disabled:opacity-40 "
                    disabled={!!userDataResponse.success}
                  >
                    {loading.updateUserData ? (
                      <LoadingSpinner />
                    ) : (
                      'Atualizar dados'
                    )}
                  </button>

                  {userDataResponse.success && (
                    <div className="w-full text-sm text-green-500 font-semibold flex gap-4 items-center justify-start">
                      <CheckFat weight="light" className="text-3xl" />
                      <h3>{userDataResponse.success}</h3>
                    </div>
                  )}

                  {userDataResponse.error && (
                    <div className="w-full text-sm text-red-500 font-semibold flex gap-4 items-center justify-start">
                      <Warning className="text-3xl" weight="light" />
                      <h3>{userDataResponse.error}</h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
