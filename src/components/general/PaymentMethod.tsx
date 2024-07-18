'use client'

import { priceToBRL, calcSum } from '@/helpers'
import { CheckCircle, Circle } from '@phosphor-icons/react/dist/ssr'
import React, { useContext } from 'react'
import CreditCardForm from './CreditCardForm'
import GamesPlatformContext from '@/context/Context'
import { createOrder } from '@/services/orders.requests'
import { useRouter } from 'next/navigation'
import { IShoppingCart } from '@/interfaces'

export default function PaymentMethod({
  cart,
  email,
}: {
  cart: IShoppingCart
  email: string
}) {
  const { paymentMethod, setPaymentMethod } = useContext(GamesPlatformContext)
  const router = useRouter()

  const pickPaymentMethod = (payment: string) => {
    switch (payment) {
      case 'pix':
        setPaymentMethod({
          pix: true,
          creditCard: false,
          bankSlip: false,
        })
        break

      case 'bankSlip':
        setPaymentMethod({
          pix: false,
          bankSlip: true,
          creditCard: false,
        })
        break

      case 'creditCard':
        setPaymentMethod({
          pix: false,
          bankSlip: false,
          creditCard: true,
        })
        break

      default:
        break
    }
  }

  const whichPaymentMethod = () => {
    if (paymentMethod.pix)
      return (
        <span className="font-light">
          Valor à total vista no <strong className="font-semibold">PIX</strong>
        </span>
      )

    if (paymentMethod.bankSlip)
      return (
        <span className="font-light text-center">
          Valor total à vista no{' '}
          <strong className="font-semibold">boleto bancário</strong>
        </span>
      )

    if (paymentMethod.creditCard)
      return (
        <span className="font-light">
          Valor total no
          <strong className="font-semibold"> cartão de crédito</strong>
        </span>
      )
  }

  const submitOrder = async () => {
    const method = paymentMethod.pix
      ? 'PIX'
      : paymentMethod.bankSlip
        ? 'bankSlip'
        : 'creditCard'

    const result = await createOrder({
      paymentMethod: method,
      email,
    })

    if (result.status === 201)
      router.replace(`/pedido-realizado/${result.data.data.id}`)
  }

  return (
    <div className="flex justify-between items-start w-full h-full sm:flex-col sm:gap-4 sm:items-center text-zinc-300">
      <div className="w-[70%] bg-zinc-950 border border-zinc-800 rounded-md shadow-md p-6 flex flex-col gap-4 sm:w-full xl:w-3/5">
        <div
          onClick={() => pickPaymentMethod('pix')}
          className={`bg-zinc-900 px-6 py-4 border border-1 rounded-md flex flex-col gap-2 justify-start cursor-pointer  ${
            paymentMethod.pix
              ? 'border-1 border-white'
              : 'border-1 border-zinc-700'
          }`}
        >
          <div className="flex gap-4">
            <div>
              {paymentMethod.pix ? (
                <CheckCircle
                  weight="fill"
                  className=" sm:text-[24px] text-xl"
                />
              ) : (
                <Circle weight="regular" className=" sm:text-[24px] text-xl" />
              )}
            </div>
            <h1
              className={`text-lg font-bold ${
                paymentMethod.pix ? '' : ''
              } sm:text-base`}
            >
              PIX
            </h1>
          </div>
          {paymentMethod.pix && (
            <div className="w-full appear-animation">
              <p className="text-sm font-light w-full text-justify">
                Pague <strong className="font-semibold">à vista no PIX</strong>,
                com{' '}
                <strong className="font-semibold">aprovação imediata</strong> do
                pagamento e com
                <strong className="font-semibold"> desconto de 10%</strong> no
                valor original.
              </p>
            </div>
          )}
        </div>
        <div
          onClick={() => pickPaymentMethod('bankSlip')}
          className={`bg-zinc-900 px-6 py-4 border border-1 rounded-md flex flex-col gap-2 justify-start cursor-pointer  ${
            paymentMethod.bankSlip
              ? 'border-1 border-white'
              : 'border-1 border-zinc-700'
          }`}
        >
          <div className="flex gap-4">
            <div>
              {paymentMethod.bankSlip ? (
                <CheckCircle
                  weight="fill"
                  className=" sm:text-[24px] text-xl"
                />
              ) : (
                <Circle weight="regular" className=" sm:text-[24px] text-xl" />
              )}
            </div>
            <h1 className="text-lg font-bold  sm:text-base">Boleto bancário</h1>
          </div>
          {paymentMethod.bankSlip && (
            <div className="w-full appear-animation">
              <p className="text-sm font-light w-full text-justify">
                Pague{' '}
                <strong className="font-semibold">à vista no boleto</strong>,
                com aprovação do pagamento em até{' '}
                <strong className="font-semibold">2 dias úteis</strong> e com
                <strong className="font-semibold"> desconto de 10%</strong> no
                valor original.
              </p>
            </div>
          )}
        </div>

        <div
          onClick={() => pickPaymentMethod('creditCard')}
          className={`bg-zinc-900 px-6 py-4 border border-1 rounded-md flex flex-col gap-2 justify-start cursor-pointer  ${
            paymentMethod.creditCard
              ? 'border-1 border-white'
              : 'border-1 border-zinc-700'
          }`}
        >
          <div className="flex gap-4 w-full">
            <div>
              {paymentMethod.creditCard ? (
                <CheckCircle
                  weight="fill"
                  className=" sm:text-[24px] text-xl"
                />
              ) : (
                <Circle weight="regular" className=" sm:text-[24px] text-xl" />
              )}
            </div>
            <h1 className="text-lg font-bold  sm:text-base">
              Cartão de crédito
            </h1>
          </div>

          {paymentMethod.creditCard && (
            <CreditCardForm email={email} cart={cart} />
          )}
        </div>
      </div>

      <div className="bg-zinc-950 border border-zinc-800 rounded-md shadow-md py-6 px-6 w-80 flex flex-col items-end gap-4 sm:items-center sm:w-full sm:p-2 xl:w-1/3">
        <div className="w-full h-30 bg-zinc-900 border border-zinc-700 shadow-md p-4 rounded-md flex flex-col items-center justify-center  sm:w-60 sm:p-2">
          <div className="text-sm flex">{whichPaymentMethod()}</div>

          {paymentMethod.creditCard ? (
            <span className="text-3xl font-extrabold mt-2 sm:text-2xl">
              {`R$ ${priceToBRL(calcSum(cart.products).number)}`}
            </span>
          ) : (
            <span className="text-3xl font-extrabold mt-2 sm:text-2xl">
              {`R$ ${priceToBRL(calcSum(cart.products).number * 0.9)}`}
            </span>
          )}

          {(paymentMethod.bankSlip || paymentMethod.pix) && (
            <div className="text-xs font-light">
              <span>{`Economia de: `}</span>
              <span className="font-bold">{`R$ ${priceToBRL(
                calcSum(cart.products || []).number * 0.1,
              )}`}</span>
            </div>
          )}
        </div>
        <button
          type={paymentMethod.creditCard ? 'submit' : 'button'}
          className="w-full bg-zinc-300 text-zinc-800 font-bold h-10 rounded-md text-sm shadow-md hover:shadow-lg"
          form="creditCardForm"
          onClick={submitOrder}
        >
          Finalizar
        </button>
      </div>
    </div>
  )
}
