'use client'

import CoursesPlatformContext from '@/context/Context'
import { calcSum, priceToBRL } from '@/helpers'
import React, { useContext } from 'react'

export default function CreditCardForm() {
  const { cart } = useContext(CoursesPlatformContext)

  return (
    <form
      action=""
      className="flex flex-col gap-6 cursor-default appear-animation"
    >
      <div className="w-full relative">
        <input
          type="text"
          placeholder="0000 0000 0000 0000"
          className="relative rounded-md w-full border border-sky-400 bg-zinc-50 focus:shadow-md focus:outline-none px-4 pt-4 pb-3 text-md font-light"
        />
        <span className="absolute w-fit -top-2 text-xs left-4 z-0 bg-zinc-50 font-light py-[2px] px-1 text-zinc-500">
          Número do cartão *
        </span>
      </div>

      <div className="w-full relative">
        <input
          type="text"
          placeholder="Digite seu nome"
          className="relative rounded-md w-full border border-sky-400 bg-zinc-50 focus:shadow-lg focus:outline-none px-4 pt-4 pb-3 text-md font-light"
        />
        <span className="absolute w-fit -top-2 text-xs left-4 z-0 bg-zinc-50 font-light py-[2px] px-1 text-zinc-500">
          Nome impresso no cartão *
        </span>
      </div>

      <div className="w-full flex items-center justify-between">
        <div className="w-[47.5%] relative">
          <input
            type="number"
            placeholder="MM/AA"
            className="relative rounded-md w-full border border-sky-400 bg-zinc-50 focus:shadow-lg focus:outline-none px-4 pt-4 pb-3 text-md font-light"
          />
          <span className="absolute w-fit -top-2 text-xs left-4 z-0 bg-zinc-50 font-light py-[2px] px-1 text-zinc-500">
            Data do vencimento *
          </span>
        </div>

        <div className="w-[47.5%] relative">
          <input
            type="number"
            placeholder="000"
            className="relative rounded-md w-full border border-sky-400 bg-zinc-50 focus:shadow-lg focus:outline-none px-4 pt-4 pb-3 text-md font-light"
          />
          <span className="absolute w-fit -top-2 text-xs left-4 z-0 bg-zinc-50 font-light py-[2px] px-1 text-zinc-500">
            Código de verificação (CVV) *
          </span>
        </div>
      </div>

      <div className="w-full relative">
        <select
          name=""
          id=""
          placeholder="1x de R$ 499,90"
          className="relative rounded-md w-full border border-sky-400 bg-zinc-50 focus:shadow-lg focus:outline-none px-4 pt-4 pb-3 text-md font-light"
        >
          <option value={calcSum(cart).number} className="rounded-md py-4 h-10">
            {`À vista por R$ ${priceToBRL(calcSum(cart).number)}`}
          </option>

          <option value={calcSum(cart).number / 2} className="rounded-md py-">
            {`2x sem juros de R$ ${priceToBRL(calcSum(cart).number / 2)}`}
          </option>

          <option value={calcSum(cart).number / 3} className="rounded-md py-">
            {`3x sem juros de R$ ${priceToBRL(calcSum(cart).number / 3)}`}
          </option>
        </select>
        <span className="absolute w-fit -top-2 text-xs left-4 z-0 bg-zinc-50 font-light py-[2px] px-1 text-zinc-500">
          Parcelamento
        </span>
      </div>
    </form>
  )
}
