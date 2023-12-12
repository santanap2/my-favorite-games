/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import LateralMenu from '@/components/LateralMenu'
import GamesPlatformContext from '@/context/Context'
import MyDataHooks from '@/hooks/MyDataHooks'
import {
  Envelope,
  IdentificationBadge,
  IdentificationCard,
  Password,
  Phone,
} from '@phosphor-icons/react'
import React, { useContext } from 'react'

export default function MeusDados() {
  const { screenSize } = useContext(GamesPlatformContext)

  const { handleSubmit, register, errors, handleFormSubmit } = MyDataHooks()

  return (
    <div className="mt-24 sm:mt-20 w-full h-full">
      <LateralMenu />
      <div className=" w-full h-full flex flex-col gap-10 text-zinc-800 sm:gap-6">
        <div className="flex gap-1 w-fit items-center justify-center">
          <IdentificationCard
            weight="fill"
            size={screenSize < 600 ? 36 : 56}
            className="text-sky-500"
          />
          <h1 className="font-regular text-xl font-semibold">Meus dados</h1>
        </div>

        <div className="flex flex-col gap-6">
          <div className="w-3/4 h-full bg-zinc-100 p-6 rounded-md shadow-md sm:w-full">
            <form
              id="myDataForm"
              className="w-full flex flex-col gap-3"
              onSubmit={handleSubmit(handleFormSubmit)}
            >
              <label htmlFor="name" className="flex flex-col w-full">
                <h2 className="font-light text-sm tracking-normal flex gap-1 items-center justify center">
                  <IdentificationBadge
                    size={24}
                    weight="light"
                    className="text-sky-400"
                  />
                  <span>Nome completo</span>
                </h2>
                <input
                  {...register('userData.name')}
                  type="text"
                  id="name"
                  className="px-4 h-10 w-full shadow-sm focus:outline-none hover:shadow-md focus:shadow-lg text-zinc-700 text-sm font-light rounded-md"
                />
                {errors.userData?.name && (
                  <span className="text-sm font-light text-red-500">
                    {errors.userData.name.message}
                  </span>
                )}
              </label>

              <label htmlFor="email" className="flex flex-col w-full">
                <h2 className="font-light text-sm tracking-normal flex gap-1 items-center justify center">
                  <Envelope size={24} weight="light" className="text-sky-400" />
                  <span>E-mail</span>
                </h2>
                <input
                  {...register('userData.email')}
                  type="email"
                  id="email"
                  className="px-4 h-10 w-full shadow-sm focus:outline-none hover:shadow-md focus:shadow-lg text-zinc-700 text-sm font-light rounded-md"
                />
                {errors.userData?.email && (
                  <span className="text-sm font-light text-red-500">
                    {errors.userData.email.message}
                  </span>
                )}
              </label>

              <label htmlFor="phone" className="flex flex-col w-full">
                <h2 className="font-light text-sm tracking-normal flex gap-1 items-center justify center">
                  <Phone size={24} weight="light" className="text-sky-400" />
                  <span>Celular</span>
                </h2>
                <input
                  {...register('userData.phone')}
                  type="tel"
                  id="phone"
                  maxLength={15}
                  className="px-4 h-10 w-full shadow-sm focus:outline-none hover:shadow-md focus:shadow-lg text-zinc-700 text-sm font-light rounded-md"
                />
                {errors.userData?.phone && (
                  <span className="text-sm font-light text-red-500">
                    {errors.userData.phone.message}
                  </span>
                )}
              </label>

              <div className="flex w-full justify-between sm:flex-col sm:gap-3">
                <label
                  htmlFor="currentPassword"
                  className="flex flex-col w-fit sm:w-full"
                >
                  <h2 className="font-light text-sm tracking-normal flex gap-1 items-center justify center">
                    <Password
                      size={24}
                      weight="light"
                      className="text-sky-400"
                    />
                    <span>Senha atual</span>
                  </h2>
                  <input
                    {...register('userData.currentPassword')}
                    type="password"
                    id="currentPassword"
                    className="px-4 h-10 w-72 shadow-sm focus:outline-none hover:shadow-md focus:shadow-lg text-zinc-700 text-sm font-light rounded-md sm:w-full"
                  />
                  {errors.userData?.currentPassword && (
                    <span className="text-sm font-light text-red-500">
                      {errors.userData.currentPassword.message}
                    </span>
                  )}
                </label>

                <label
                  htmlFor="newPassword"
                  className="flex flex-col w-fit sm:w-full"
                >
                  <h2 className="font-light text-sm tracking-normal flex gap-1 items-center justify center">
                    <Password
                      size={24}
                      weight="light"
                      className="text-sky-400"
                    />
                    <span>Nova senha</span>
                  </h2>
                  <input
                    {...register('userData.newPassword')}
                    type="password"
                    id="newPassword"
                    className="px-4 h-10 w-72 shadow-sm focus:outline-none hover:shadow-md focus:shadow-lg text-zinc-700 text-sm font-light rounded-md sm:w-full"
                  />
                  {errors.userData?.newPassword && (
                    <span className="text-sm font-light text-red-500">
                      {errors.userData.newPassword.message}
                    </span>
                  )}
                </label>

                <label
                  htmlFor="confirmNewPassword"
                  className="flex flex-col w-fit sm:w-full"
                >
                  <h2 className="font-light text-sm tracking-normal flex gap-1 items-center justify center">
                    <Password
                      size={24}
                      weight="light"
                      className="text-sky-400"
                    />
                    <span>Confirmar nova senha</span>
                  </h2>
                  <input
                    {...register('userData.confirmNewPassword')}
                    type="password"
                    id="confirmNewPassword"
                    className="px-4 h-10 w-72 shadow-sm focus:outline-none hover:shadow-md focus:shadow-lg text-zinc-700 text-sm font-light rounded-md sm:w-full"
                  />
                  {errors.userData?.confirmNewPassword && (
                    <span className="text-sm font-light text-red-500">
                      {errors.userData.confirmNewPassword.message}
                    </span>
                  )}
                </label>
              </div>
            </form>
          </div>

          <div className="w-3/5 flex items-center justify-start sm:justify-center sm:w-full">
            <button
              type="submit"
              form="myDataForm"
              className="bg-sky-400 w-80 px-6 py-3 rounded-md shadow-md hover:shadow-lg font-regular text-sm text-white sm:w-fit sm:px-16"
            >
              Atualizar dados
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
