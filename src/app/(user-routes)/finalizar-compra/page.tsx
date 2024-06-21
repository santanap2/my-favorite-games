/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'

import GamesPlatformContext from '@/context/Context'
import { calcSum, pageTitle, portionPrice, priceToBRL } from '@/helpers'
import { IGame } from '@/interfaces'
import { getUserCart } from '@/services'
import { Wallet } from '@phosphor-icons/react/dist/ssr'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

import React, { useContext, useEffect } from 'react'

export default function FinalizarCompra() {
  const { screenSize } = useContext(GamesPlatformContext)

  const calcNameSlice = (name: string) => {
    const small = name.length > 25 ? `${name.slice(0, 25)}...` : name
    const extraSmall = name.length > 20 ? `${name.slice(0, 20)}...` : name

    if (screenSize < 370) return extraSmall
    if (screenSize < 380) return small
    return name
  }

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => await getUserCart(),
    retry: false,
  })

  useEffect(() => {
    refetch()
  }, [isLoading])

  return (
    <div className="mt-24 xxl:mt-20 w-4/5 flex flex-col gap-12 xxl:w-full lg:gap-6 animation-opacity transition-all text-white">
      <title>{`${pageTitle} - Finalizar compra`}</title>

      <div className="flex gap-1 w-fit items-center justify-center">
        <Wallet
          weight="fill"
          className="text-indigo-600 sm:text-3xl text-5xl"
        />
        <h1 className="font-regular text-xl font-semibold">Finalizar compra</h1>
      </div>

      <div className="flex justify-between items-start w-full h-full sm:flex-col sm:gap-6 sm:items-end">
        <div className="w-[70%] bg-neutral-800 rounded-md shadow-md px-6 sm:w-full xxl:w-[65%] xxl:px-2">
          {data?.data.data.products.map(
            (
              { category: { namePt }, id, image, name, price }: IGame,
              index: number,
            ) => (
              <div
                key={id}
                className={`flex items-center w-full gap-3  p-4 lg:p-2 ${
                  index === data?.data.data.products.length - 1
                    ? ''
                    : 'border-b border-neutral-600'
                }`}
              >
                <img
                  src={image}
                  alt={name}
                  className="w-32 h-48 object-cover rounded-md lg:w-28 lg:h-44"
                />

                <div className="flex flex-col justify-between items-start w-full h-48 lg:h-44">
                  <div className="flex flex-col gap-0 items-start justify-center w-full">
                    <h1 className="font-bold text-lg tracking-tight lg:text-base lg:font-semibold lg:w-full">
                      {calcNameSlice(name)}
                    </h1>
                    <h3 className="font-semibold text-sm lg:font-light lg:w-full">
                      {namePt}
                    </h3>
                  </div>
                  <div className="flex flex-col text-white text-sm lg:text-xxs lg:mt-0 lg:font-extralight lg:text-white">
                    <span>No PIX com 10% de desconto</span>
                    <span>{`Ou em até 3x de R$${portionPrice(
                      price,
                      3,
                    )} sem juros no cartão de crédito`}</span>
                  </div>
                </div>

                <h2 className="font-extrabold tracking-wider text-lg min-w-fit text-indigo-600 lg:text-sm lg:text-right lg:w-20">
                  {`R$ ${priceToBRL(price)}`}
                </h2>
              </div>
            ),
          )}
        </div>

        <div className="bg-neutral-800 rounded-md shadow-md py-6 px-6 w-80 flex flex-col items-end gap-4 sm:w-64 xxl:w-1/3">
          <h1 className="font-regular text-lg font-semibold uppercase text-white tracking-tighter">
            Resumo
          </h1>

          <div className="text-neutral-300 lg:text-sm">
            <span>Valor total: </span>
            <span className="font-semibold">{`R$ ${
              calcSum(data?.data.data.products || []).string
            }`}</span>
            <h3 className="w-full text-end text-neutral-300 text-sm font-light">{`(Em até 3x de R$${priceToBRL(
              calcSum(data?.data.data.products || []).number / 3,
            )})`}</h3>
          </div>

          <div className="w-full h-30 bg-neutral-900 shadow-md p-4 rounded-md flex flex-col items-center justify-center text-indigo-600">
            <div className="text-sm">
              <span>Valor à vista no</span>
              <span className="font-semibold">{` PIX`}</span>
            </div>
            <span className="text-3xl font-extrabold mt-2">
              {`R$ ${priceToBRL(
                calcSum(data?.data.data.products || []).number * 0.9,
              )}`}
            </span>
            <div className="text-xs font-light">
              <span>{`Economia de: `}</span>
              <span className="font-bold">{`R$ ${priceToBRL(
                calcSum(data?.data.data.products || []).number * 0.1,
              )}`}</span>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6 lg:gap-4">
            <Link href="/finalizar-compra/pagamento">
              <button
                type="button"
                className={`w-full bg-indigo-600 py-2 rounded-lg text-white text-sm font-bold shadow-md hover:bg-indigo-700 transition-all lg:px-4`}
              >
                Ir para o pagamento
              </button>
            </Link>

            <Link href="/home">
              <button
                type="button"
                className="w-full bg-trasparent py-2 rounded-lg text-neutral-400 border border-neutral-400 text-sm font-bold hover:border-indigo-600 hover:text-indigo-600 transition-all md:px-0 xl:px-4 xl:py-2"
              >
                Continuar comprando
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
