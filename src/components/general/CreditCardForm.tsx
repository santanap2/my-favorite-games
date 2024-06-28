'use client'

import { calcSum, priceToBRL } from '@/helpers'
import CredCardFormHooks from '@/hooks/CredCardFormHooks'
import { IShoppingCart } from '@/interfaces'
import React from 'react'

export default function CreditCardForm({
  cart,
  email,
}: {
  cart: IShoppingCart
  email: string
}) {
  const { handleSubmit, register, errors, handleFormSubmit } =
    CredCardFormHooks({ email })

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-3 cursor-default mt-3"
      id="creditCardForm"
    >
      <div>
        <div className="w-full flex items-center justify-between gap-4">
          <label
            htmlFor="card-number"
            className="block text-sm font-medium leading-6 text-white"
          >
            Número do cartão *
          </label>
          {errors.cardData?.cardNumber && (
            <span className="text-sm font-light text-red-800 xl:hidden">
              {errors.cardData.cardNumber.message}
            </span>
          )}
        </div>
        <input
          {...register('cardData.cardNumber')}
          type="text"
          id="card-number"
          placeholder="0000 0000 0000 0000"
          maxLength={19}
          className={`${
            errors.cardData?.cardNumber
              ? 'ring-red-800 ring-opacity-60'
              : 'ring-neutral-600'
          } bg-neutral-950 outline-none block w-full rounded-md border-0 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-neutral-600 placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6`}
        />
        {errors.cardData?.cardNumber && (
          <span className="text-sm font-light text-red-800 hidden xl:flex">
            {errors.cardData.cardNumber.message}
          </span>
        )}
      </div>

      <div>
        <div className="w-full flex items-center justify-between gap-4">
          <label
            htmlFor="card-name"
            className="block text-sm font-medium leading-6 text-white"
          >
            Nome impresso no cartão *
          </label>
          {errors.cardData?.cardName && (
            <span className="text-sm font-light text-red-800 xl:hidden">
              {errors.cardData.cardName.message}
            </span>
          )}
        </div>
        <input
          {...register('cardData.cardName')}
          id="card-name"
          type="text"
          placeholder="Digite seu nome"
          className={`${
            errors.cardData?.cardName
              ? 'ring-red-800 ring-opacity-60'
              : 'ring-neutral-600'
          } bg-neutral-950 outline-none block w-full rounded-md border-0 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-neutral-600 placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6`}
        />
        {errors.cardData?.cardNumber && (
          <span className="text-sm font-light text-red-800 hidden xl:flex">
            {errors.cardData.cardNumber.message}
          </span>
        )}
      </div>

      <div className="w-full flex items-end justify-between xl:flex-col lg:gap-6 gap-4">
        <div className="w-full">
          <div className="w-full flex items-center justify-between gap-4">
            <label
              htmlFor="card-date"
              className="block text-sm font-medium leading-6 text-white"
            >
              Data do vencimento *
            </label>
            {errors.cardData?.cardDate && (
              <span className="text-sm font-light text-red-800 xl:hidden">
                {errors.cardData.cardDate.message}
              </span>
            )}
          </div>
          <input
            {...register('cardData.cardDate')}
            id="card-date"
            type="text"
            maxLength={5}
            placeholder="MM/AA"
            className={`${
              errors.cardData?.cardDate
                ? 'ring-red-800 ring-opacity-60'
                : 'ring-neutral-600'
            } bg-neutral-950 outline-none block w-full rounded-md border-0 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-neutral-600 placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6`}
          />
          {errors.cardData?.cardNumber && (
            <span className="text-sm font-light text-red-800 hidden xl:flex">
              {errors.cardData.cardNumber.message}
            </span>
          )}
        </div>

        <div className="w-full">
          <div className="w-full flex items-center justify-between gap-4">
            <label
              htmlFor="card-cvv"
              className="block text-sm font-medium leading-6 text-white"
            >
              Código de verificação (CVV) *
            </label>
            {errors.cardData?.cardCvv && (
              <span className="text-sm font-light text-red-800 xl:hidden">
                {errors.cardData.cardCvv.message}
              </span>
            )}
          </div>
          <input
            {...register('cardData.cardCvv')}
            id="card-cvv"
            type="text"
            maxLength={3}
            placeholder="000"
            className={`${
              errors.cardData?.cardDate
                ? 'ring-red-800 ring-opacity-60'
                : 'ring-neutral-600'
            } bg-neutral-950 outline-none block w-full rounded-md border-0 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-neutral-600 placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6`}
          />
          {errors.cardData?.cardNumber && (
            <span className="text-sm font-light text-red-800 hidden xl:flex">
              {errors.cardData.cardNumber.message}
            </span>
          )}
        </div>
      </div>

      <div className="w-full">
        <label
          htmlFor="card-portions"
          className="block text-sm font-medium leading-6 text-white"
        >
          Parcelamento
        </label>
        <select
          {...register('cardData.cardPortions')}
          id="card-portions"
          placeholder="1x de R$ 499,90"
          className="bg-neutral-950 outline-none block w-full rounded-md border-0 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-neutral-600 placeholder:text-neutral-700 focus:ring-2 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6"
        >
          <option value="1" className="rounded-md py-4 h-10">
            {`1x sem juros de R$ ${priceToBRL(calcSum(cart.products).number)}`}
          </option>

          <option value="2" className="rounded-md py-">
            {`2x sem juros de R$ ${priceToBRL(
              calcSum(cart.products).number / 2,
            )}`}
          </option>

          <option value="3" className="rounded-md py-">
            {`3x sem juros de R$ ${priceToBRL(
              calcSum(cart.products).number / 3,
            )}`}
          </option>
        </select>
      </div>
    </form>
  )
}
