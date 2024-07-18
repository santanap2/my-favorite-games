/* eslint-disable @next/next/no-img-element */

import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'
import { calcSum, pageTitle, portionPrice, priceToBRL } from '@/helpers'
import { IGame } from '@/interfaces'
import { getUserCart } from '@/services'
import { Wallet } from '@phosphor-icons/react/dist/ssr'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'

export default async function FinalizarCompra() {
  const session = await getServerSession(nextAuthOptions)
  const email = session?.user?.email as string

  const { data } = await getUserCart(email)

  return (
    <div className="w-4/5 flex h-full mt-24 xxl:mt-20 flex-col gap-12 xxl:w-full lg:gap-6 text-zinc-300">
      <title>{`Finalizar compra - ${pageTitle}`}</title>

      <div className="flex flex-col gap-1 items-start justify-center w-full pb-5 border-b border-zinc-800">
        <div className="flex gap-1 items-center justify-center w-full">
          <div className="flex flex-col w-full h-full text-base">
            <span className="font-extrabold text-2xl sm:text-lg flex gap-2 items-center justify-center w-fit">
              <Wallet weight="bold" className="text-3xl" />
              Finalizar compra
            </span>

            <span className="flex text-base sm:text-sm sm:mt-1">
              Reveja seu carrinho e prossiga para o pagamento
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-start w-full h-full sm:flex-col sm:gap-6 sm:items-end">
        <div className="w-[70%] bg-zinc-950 border border-zinc-800 rounded-md shadow-md px-6 sm:w-full xxl:w-[65%] xxl:px-2">
          {data.cart.products.map(
            (
              { category: { namePt }, id, image, name, price }: IGame,
              index: number,
            ) => (
              <div
                key={id}
                className={`flex items-center w-full gap-3 p-4 lg:p-2 ${
                  index === data.cart.products.length - 1
                    ? ''
                    : 'border-b border-zinc-800'
                }`}
              >
                <img
                  src={image}
                  alt={name}
                  className="w-32 h-48 object-cover rounded-md lg:w-28 lg:h-44 border border-zinc-800"
                />

                <div className="flex flex-col justify-between items-start w-full h-48 lg:h-44">
                  <div className="flex flex-col gap-0 items-start justify-center w-full">
                    <h1 className="font-bold text-lg tracking-tight lg:text-base lg:font-semibold lg:w-full">
                      {name}
                    </h1>
                    <h3 className="font-semibold text-sm lg:font-light lg:w-full">
                      {namePt}
                    </h3>
                  </div>
                  <div className="flex flex-col text-sm lg:text-xs lg:mt-0 lg:font-light">
                    <span>No PIX com 10% de desconto</span>
                    <span>{`Ou em até 3x de R$${portionPrice(
                      price,
                      3,
                    )} sem juros no cartão de crédito`}</span>
                  </div>

                  <h2 className="font-black tracking-wider text-lg min-w-fit lg:text-sm w-full">
                    {`R$ ${priceToBRL(price)}`}
                  </h2>
                </div>
              </div>
            ),
          )}
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-md shadow-md py-6 px-6 w-80 flex flex-col items-end gap-4 sm:w-64 xxl:w-1/3">
          <h1 className="font-regular text-lg font-semibold uppercase tracking-tighter">
            Resumo
          </h1>

          <div className="text-zinc-300 lg:text-sm">
            <span>Valor total: </span>
            <span className="font-semibold">{`R$ ${
              calcSum(data.cart.products || []).string
            }`}</span>
            <h3 className="w-full text-end text-zinc-300 text-sm font-light">{`(Em até 3x de R$${priceToBRL(
              calcSum(data.cart.products || []).number / 3,
            )})`}</h3>
          </div>

          <div className="w-full h-30 bg-zinc-900 border border-zinc-800 shadow-md p-4 rounded-md flex flex-col items-center justify-center">
            <div className="text-sm">
              <span>Valor à vista no</span>
              <span className="font-semibold">{` PIX`}</span>
            </div>
            <span className="text-3xl font-extrabold mt-2">
              {`R$ ${priceToBRL(
                calcSum(data.cart.products || []).number * 0.9,
              )}`}
            </span>
            <div className="text-xs font-light">
              <span>{`Economia de: `}</span>
              <span className="font-bold">{`R$ ${priceToBRL(
                calcSum(data.cart.products || []).number * 0.1,
              )}`}</span>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6 lg:gap-4">
            <Link href="/finalizar-compra/pagamento">
              <button
                type="button"
                className={`w-full bg-zinc-300 text-zinc-800 py-2 rounded-md text-sm font-bold shadow-md  transition-all lg:px-4`}
              >
                Ir para o pagamento
              </button>
            </Link>

            <Link href="/home">
              <button
                type="button"
                className="w-full bg-trasparent py-2 rounded-md text-sm font-bold hover transition-all md:px-0 xl:px-4 xl:py-2"
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
