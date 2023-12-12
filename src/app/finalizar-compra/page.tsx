/* eslint-disable @next/next/no-img-element */
'use client'

import GamesPlatformContext from '@/context/Context'
import { calcSum, portionPrice, priceToBRL } from '@/helpers'
import { Wallet } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

export default function FinalizarCompra() {
  const { cart, screenSize } = useContext(GamesPlatformContext)

  const router = useRouter()

  return (
    <div className="mt-24 sm:mt-20 w-4/5 flex flex-col gap-12">
      <div className="flex gap-1 w-fit items-center justify-center">
        <Wallet
          weight="fill"
          size={screenSize < 600 ? 36 : 56}
          className="text-sky-500"
        />
        <h1 className="font-regular text-xl font-semibold">Finalizar compra</h1>
      </div>

      <div className="flex justify-between items-start w-full h-full ">
        <div className="w-[70%] bg-white rounded-md shadow-md px-6">
          {cart.map(({ areaPt, id, image, name, price }) => (
            <div
              key={id}
              className="flex items-center w-full gap-3 border-b p-6"
            >
              <img
                src={image}
                alt={name}
                className="w-32 h-32 object-cover rounded-md"
              />
              <div className="flex flex-col justify-between items-start w-full h-32">
                <h1 className="font-bold text-md tracking-tight">{name}</h1>
                <h3 className="font-semibold text-sm">{areaPt}</h3>
                <div className="flex flex-col mt-6 text-zinc-500 text-sm">
                  <span>À vista no PIX com 10% de desconto</span>
                  <span>{`Ou em até 3x de R$${portionPrice(
                    price,
                    3,
                  )} sem juros no cartão de crédito`}</span>
                </div>
                <div className="flex justify-between items-center"></div>
              </div>
              <h2 className="font-extrabold tracking-wider text-lg min-w-fit text-sky-500">
                {`R$ ${priceToBRL(price)}`}
              </h2>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-md shadow-md py-6 px-6 w-80 flex flex-col items-end gap-4">
          <h1 className="font-regular text-lg font-semibold uppercase text-zinc-700 tracking-tighter">
            Resumo
          </h1>

          <div className="text-zinc-700">
            <span>Valor total dos produtos: </span>
            <span className="font-semibold">{`R$ ${
              calcSum(cart).string
            }`}</span>
            <h3 className="w-full text-end text-zinc-500 text-sm font-light">{`(Em até 3x de R$${priceToBRL(
              calcSum(cart).number / 3,
            )})`}</h3>
          </div>

          <div className="w-full h-30 bg-sky-50 p-4 rounded-md flex flex-col items-center justify-center text-sky-500">
            <div className="text-sm">
              <span>Valor à vista no</span>
              <span className="font-semibold">{` PIX`}</span>
            </div>
            <span className="text-3xl font-extrabold mt-2">
              {`R$ ${priceToBRL(calcSum(cart).number * 0.9)}`}
            </span>
            <div className="text-xs font-light">
              <span>{`Economia de: `}</span>
              <span className="font-bold">{`R$ ${priceToBRL(
                calcSum(cart).number * 0.1,
              )}`}</span>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <button
              type="button"
              onClick={() => router.push('/finalizar-compra/pagamento')}
              className="w-full bg-sky-400 h-10 rounded-md text-white font-light text-regular shadow-md hover:shadow-lg"
            >
              Ir para o pagamento
            </button>

            <button
              type="button"
              onClick={() => router.push('/home')}
              className="w-full bg-white h-10 rounded-md text-sky-400 border border-sky-400  font-light text-regular hover:shadow-lg"
            >
              Continuar comprando
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
