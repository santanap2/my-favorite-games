'use client'

import MyDataHooks from '@/hooks/MyDataHooks'
import { CheckFat, Warning } from '@phosphor-icons/react/dist/ssr'
import React, { useContext } from 'react'
import LoadingSpinner from './LoadingSpinner'
import GamesPlatformContext from '@/context/Context'

export default function MyDataForm({
  name,
  email,
  phone,
}: {
  name: string
  email: string
  phone: string
}) {
  const { userDataResponse, loading } = useContext(GamesPlatformContext)

  const { handleSubmit, register, errors, handleFormSubmit } = MyDataHooks()

  return (
    <form
      id="myDataForm"
      className="space-y-6 sm:w-full w-[576px]"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-white"
        >
          Nome completo
        </label>
        <div className="mt-2">
          <input
            {...register('userData.name')}
            id="name"
            type="text"
            placeholder={name}
            className={`${
              errors.userData?.name
                ? 'ring-red-500 ring-opacity-60'
                : 'ring-neutral-600 ring-opacity-60'
            } bg-transparent outline-none block w-full rounded-md border-0 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          />
          {errors.userData?.name && (
            <span className="text-sm font-light text-red-500">
              {errors.userData?.name.message}
            </span>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-white"
        >
          Endereço de email *
        </label>
        <div className="mt-2">
          <input
            {...register('userData.currentEmail')}
            id="email"
            type="email"
            placeholder={email}
            value={email}
            className={`${
              errors.userData?.currentEmail
                ? 'ring-red-500 ring-opacity-60'
                : 'ring-neutral-600 ring-opacity-60'
            } bg-transparent outline-none block w-full rounded-md border-0 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          />
          {errors.userData?.currentEmail && (
            <span className="text-sm font-light text-red-500">
              {errors.userData?.currentEmail.message}
            </span>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="newEmail"
          className="block text-sm font-medium leading-6 text-white"
        >
          Novo endereço de email
        </label>
        <div className="mt-2">
          <input
            {...register('userData.newEmail')}
            type="email"
            id="newEmail"
            placeholder="email@exemplo.com"
            className={`${
              errors.userData?.newEmail
                ? 'ring-red-500 ring-opacity-60'
                : 'ring-neutral-600 ring-opacity-60'
            } bg-transparent outline-none block w-full rounded-md border-0 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          />
          {errors.userData?.newEmail && (
            <span className="text-sm font-light text-red-500">
              {errors.userData.newEmail.message}
            </span>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium leading-6 text-white"
        >
          Número de celular
        </label>
        <div className="mt-2">
          <input
            {...register('userData.phone')}
            type="tel"
            id="phone"
            maxLength={15}
            placeholder={phone}
            className={`${
              errors.userData?.phone
                ? 'ring-red-500 ring-opacity-60'
                : 'ring-neutral-600 ring-opacity-60'
            } bg-transparent outline-none block w-full rounded-md border-0 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          />
          {errors.userData?.phone && (
            <span className="text-sm font-light text-red-500">
              {errors.userData.phone.message}
            </span>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="currentPassword"
          className="block text-sm font-medium leading-6 text-white"
        >
          Sua senha atual *
        </label>
        <div className="mt-2">
          <input
            {...register('userData.currentPassword')}
            type="password"
            id="currentPassword"
            placeholder="Digite sua senha atual"
            className={`${
              errors.userData?.currentPassword
                ? 'ring-red-500 ring-opacity-60'
                : 'ring-neutral-600 ring-opacity-60'
            } bg-transparent outline-none block w-full rounded-md border-0 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          />
          {errors.userData?.currentPassword && (
            <span className="text-sm font-light text-red-500">
              {errors.userData.currentPassword.message}
            </span>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="newPassword"
          className="block text-sm font-medium leading-6 text-white"
        >
          Sua nova senha
        </label>
        <div className="mt-2">
          <input
            {...register('userData.newPassword')}
            type="password"
            id="newPassword"
            placeholder="************"
            className={`${
              errors.userData?.newPassword
                ? 'ring-red-500 ring-opacity-60'
                : 'ring-neutral-600 ring-opacity-60'
            } bg-transparent outline-none block w-full rounded-md border-0 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          />
          {errors.userData?.newPassword && (
            <span className="text-sm font-light text-red-500">
              {errors.userData.newPassword.message}
            </span>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="confirmNewPassword"
          className="block text-sm font-medium leading-6 text-white"
        >
          Confirme sua nova senha
        </label>
        <div className="mt-2">
          <input
            {...register('userData.confirmNewPassword')}
            type="password"
            id="confirmNewPassword"
            placeholder="************"
            className={`${
              errors.userData?.confirmNewPassword
                ? 'ring-red-500 ring-opacity-60'
                : 'ring-neutral-600 ring-opacity-60'
            } bg-transparent outline-none block w-full rounded-md border-0 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          />
          {errors.userData?.confirmNewPassword && (
            <span className="text-sm font-light text-red-500">
              {errors.userData.confirmNewPassword.message}
            </span>
          )}
        </div>
      </div>

      <div className="text-indigo-600 text-sm font-bold">
        * Campos obrigatórios
      </div>

      <button
        type="submit"
        form="myDataForm"
        className="flex items-center justify-center bg-indigo-600 w-80 px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 transition-all font-semibold text-sm text-white sm:w-full sm:px-16 disabled:opacity-40 "
        disabled={!!userDataResponse.success}
      >
        {loading.updateUserData ? <LoadingSpinner /> : 'Atualizar dados'}
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
    </form>
  )
}