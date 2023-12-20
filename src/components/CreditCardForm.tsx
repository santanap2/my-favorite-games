'use client'

import { calcSum, getCartLocalStorage, priceToBRL } from '@/helpers'
import CredCardFormHooks from '@/hooks/CredCardFormHooks'
import React from 'react'

export default function CreditCardForm() {
  const { handleSubmit, register, errors, handleFormSubmit } =
    CredCardFormHooks()

  const cart = getCartLocalStorage() || []

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-6 cursor-default appear-animation lg:gap-6"
      id="creditCardForm"
    >
      <label htmlFor="card-number" className="w-full relative">
        <input
          {...register('cardData.cardNumber')}
          type="text"
          id="card-number"
          placeholder="0000 0000 0000 0000"
          maxLength={19}
          className="relative rounded w-full border border-indigo-400 bg-zinc-50 focus:shadow-md focus:outline-none px-4 pt-4 pb-3 text-md font-light lg:text-sm"
        />
        {errors.cardData?.cardNumber && (
          <span className="text-sm font-light text-red-500">
            {errors.cardData.cardNumber.message}
          </span>
        )}
        <span className="absolute w-fit -top-2 text-xs left-4 z-0 bg-zinc-50 font-light py-[2px] px-1 text-zinc-500">
          Número do cartão *
        </span>
      </label>

      <label htmlFor="card-name" className="w-full relative">
        <input
          {...register('cardData.cardName')}
          id="card-name"
          type="text"
          placeholder="Digite seu nome"
          className="relative rounded w-full border border-indigo-400 bg-zinc-50 focus:shadow-lg focus:outline-none px-4 pt-4 pb-3 text-md font-light lg:text-sm"
        />
        {errors.cardData?.cardName && (
          <span className="text-sm font-light text-red-500">
            {errors.cardData.cardName.message}
          </span>
        )}
        <span className="absolute w-fit -top-2 text-xs left-4 z-0 bg-zinc-50 font-light py-[2px] px-1 text-zinc-500">
          Nome impresso no cartão *
        </span>
      </label>

      <div className="w-full flex items-start justify-between lg:flex-col lg:gap-6">
        <label htmlFor="card-date" className="w-[47.5%] relative lg:w-full">
          <input
            {...register('cardData.cardDate')}
            id="card-date"
            type="text"
            maxLength={5}
            placeholder="MM/AA"
            className="relative rounded w-full border border-indigo-400 bg-zinc-50 focus:shadow-lg focus:outline-none px-4 pt-4 pb-3 text-md font-light lg:text-sm"
          />
          {errors.cardData?.cardDate && (
            <span className="text-sm font-light text-red-500">
              {errors.cardData.cardDate.message}
            </span>
          )}
          <span className="absolute w-fit -top-2 text-xs left-4 z-0 bg-zinc-50 font-light py-[2px] px-1 text-zinc-500">
            Data do vencimento *
          </span>
        </label>

        <label htmlFor="card-cvv" className="w-[47.5%] relative lg:w-full">
          <input
            {...register('cardData.cardCvv')}
            id="card-cvv"
            type="text"
            maxLength={3}
            placeholder="000"
            className="relative rounded w-full border border-indigo-400 bg-zinc-50 focus:shadow-lg focus:outline-none px-4 pt-4 pb-3 text-md font-light lg:text-sm "
          />
          {errors.cardData?.cardCvv && (
            <span className="text-sm font-light text-red-500">
              {errors.cardData.cardCvv.message}
            </span>
          )}
          <span className="absolute w-fit -top-2 text-xs left-4 z-0 bg-zinc-50 font-light py-[2px] px-1 text-zinc-500">
            Código de verificação (CVV) *
          </span>
        </label>
      </div>

      <label htmlFor="card-portions" className="w-full relative">
        <select
          {...register('cardData.cardPortions')}
          id="card-portions"
          placeholder="1x de R$ 499,90"
          className="relative rounded w-full border border-indigo-400 bg-zinc-50 focus:shadow-lg focus:outline-none px-4 pt-4 pb-3 text-md font-light lg:text-sm"
        >
          <option value="1" className="rounded py-4 h-10">
            {`1x sem juros de R$ ${priceToBRL(calcSum(cart).number)}`}
          </option>

          <option value="2" className="rounded py-">
            {`2x sem juros de R$ ${priceToBRL(calcSum(cart).number / 2)}`}
          </option>

          <option value="3" className="rounded py-">
            {`3x sem juros de R$ ${priceToBRL(calcSum(cart).number / 3)}`}
          </option>
        </select>
        <span className="absolute w-fit -top-2 text-xs left-4 z-0 bg-zinc-50 font-light py-[2px] px-1 text-zinc-500">
          Parcelamento
        </span>
      </label>
    </form>
  )
}
