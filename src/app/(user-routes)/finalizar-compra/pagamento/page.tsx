/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import CreditCardForm from '@/components/general/CreditCardForm'
import GamesPlatformContext from '@/context/Context'
import { calcSum, pageTitle, priceToBRL } from '@/helpers'
import { getUserCart } from '@/services'
import { createOrder } from '@/services/orders.requests'
import { CheckCircle, Circle, Wallet } from '@phosphor-icons/react/dist/ssr'
import { useQuery } from '@tanstack/react-query'
import { redirect } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

export default function Pagamento() {
  const { paymentMethod, setPaymentMethod, loading, setLoading } =
    useContext(GamesPlatformContext)

  const { data, refetch, isLoading } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => await getUserCart(),
  })

  useEffect(() => {
    refetch()
  }, [isLoading])

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

  const checkPaymentMethod = async () => {
    const result = await createOrder({
      paymentMethod: paymentMethod.pix
        ? 'PIX'
        : paymentMethod.bankSlip
          ? 'bankSlip'
          : 'creditCard',
    })
    if (result.status === 201)
      redirect(`/pedido-realizado/${result.data.data.id}`)

    setLoading({ ...loading, cart: !loading.cart })
  }

  return (
    <>
      {
        <div className="mt-24 xxl:mt-20  w-4/5 flex flex-col gap-10 xxl:w-full sm:gap-6 animation-opacity transition-all text-white">
          <title>{`${pageTitle} - Pagamento`}</title>

          <div className="flex gap-1 w-fit items-center justify-center">
            <Wallet
              weight="fill"
              className="text-indigo-600 sm:text-3xl text-5xl"
            />
            <h1 className="font-regular text-xl font-semibold">
              Forma de pagamento
            </h1>
          </div>

          <div className="flex justify-between items-start w-full h-full sm:flex-col sm:gap-4 sm:items-center">
            <div className="w-[70%] bg-neutral-800 rounded-md shadow-md p-6 flex flex-col gap-4 sm:w-full xl:w-3/5">
              <div
                onClick={() => pickPaymentMethod('pix')}
                className={`bg-neutral-900 px-6 py-4 border border-1 rounded-md flex flex-col gap-2 justify-start cursor-pointer text-white ${
                  paymentMethod.pix
                    ? 'border-1 border-indigo-600'
                    : 'border-1 border-neutral-500'
                }`}
              >
                <div className="flex gap-4">
                  <div>
                    {paymentMethod.pix ? (
                      <CheckCircle
                        weight="fill"
                        className="text-indigo-600 sm:text-[24px] text-xl"
                      />
                    ) : (
                      <Circle
                        weight="regular"
                        className="text-indigo-600 sm:text-[24px] text-xl"
                      />
                    )}
                  </div>
                  <h1
                    className={`text-lg font-bold ${
                      paymentMethod.pix ? 'text-indigo-600' : 'text-white'
                    } sm:text-base`}
                  >
                    PIX
                  </h1>
                </div>
                {paymentMethod.pix && (
                  <div className="w-full appear-animation">
                    <p className="text-sm font-light w-full text-justify">
                      Pague{' '}
                      <strong className="font-semibold">à vista no PIX</strong>,
                      com{' '}
                      <strong className="font-semibold">
                        aprovação imediata
                      </strong>{' '}
                      do pagamento e com
                      <strong className="font-semibold">
                        {' '}
                        desconto de 10%
                      </strong>{' '}
                      no valor original.
                    </p>
                  </div>
                )}
              </div>
              <div
                onClick={() => pickPaymentMethod('bankSlip')}
                className={`bg-neutral-900 px-6 py-4 border border-1 rounded-md flex flex-col gap-2 justify-start cursor-pointer text-white ${
                  paymentMethod.bankSlip
                    ? 'border-1 border-indigo-600'
                    : 'border-1 border-neutral-500'
                }`}
              >
                <div className="flex gap-4">
                  <div>
                    {paymentMethod.bankSlip ? (
                      <CheckCircle
                        weight="fill"
                        className="text-indigo-600 sm:text-[24px] text-xl"
                      />
                    ) : (
                      <Circle
                        weight="regular"
                        className="text-indigo-600 sm:text-[24px] text-xl"
                      />
                    )}
                  </div>
                  <h1
                    className={`text-lg font-bold ${
                      paymentMethod.bankSlip ? 'text-indigo-600' : 'text-white'
                    } sm:text-base`}
                  >
                    Boleto bancário
                  </h1>
                </div>
                {paymentMethod.bankSlip && (
                  <div className="w-full appear-animation">
                    <p className="text-sm font-light w-full text-justify">
                      Pague{' '}
                      <strong className="font-semibold">
                        à vista no boleto
                      </strong>
                      , com aprovação do pagamento em até{' '}
                      <strong className="font-semibold">2 dias úteis</strong> e
                      com
                      <strong className="font-semibold">
                        {' '}
                        desconto de 10%
                      </strong>{' '}
                      no valor original.
                    </p>
                  </div>
                )}
              </div>

              <div
                onClick={() => pickPaymentMethod('creditCard')}
                className={`bg-neutral-900 px-6 py-4 border border-1 rounded-md flex flex-col gap-2 justify-start cursor-pointer text-white ${
                  paymentMethod.creditCard
                    ? 'border-1 border-indigo-600'
                    : 'border-1 border-neutral-500'
                }`}
              >
                <div className="flex gap-4 w-full">
                  <div>
                    {paymentMethod.creditCard ? (
                      <CheckCircle
                        weight="fill"
                        className="text-indigo-400 sm:text-[24px] text-xl"
                      />
                    ) : (
                      <Circle
                        weight="regular"
                        className="text-indigo-400 sm:text-[24px] text-xl"
                      />
                    )}
                  </div>
                  <h1
                    className={`text-lg font-bold ${
                      paymentMethod.creditCard
                        ? 'text-indigo-600'
                        : 'text-white'
                    } sm:text-base`}
                  >
                    Cartão de crédito
                  </h1>
                </div>

                {paymentMethod.creditCard && <CreditCardForm />}
              </div>
            </div>

            <div className="bg-neutral-800 rounded-md shadow-md py-6 px-6 w-80 flex flex-col items-end gap-4 sm:items-center sm:w-full sm:p-2 xl:w-1/3">
              <div className="w-full h-30 bg-neutral-900 shadow-md p-4 rounded-md flex flex-col items-center justify-center text-indigo-neutral-100 sm:w-60 sm:p-2">
                <div className="text-sm flex">{whichPaymentMethod()}</div>

                {paymentMethod.creditCard ? (
                  <span className="text-3xl font-extrabold mt-2 sm:text-2xl">
                    {`R$ ${priceToBRL(
                      calcSum(data?.data.data.products || []).number,
                    )}`}
                  </span>
                ) : (
                  <span className="text-3xl font-extrabold mt-2 sm:text-2xl">
                    {`R$ ${priceToBRL(
                      calcSum(data?.data.data.products || []).number * 0.9,
                    )}`}
                  </span>
                )}

                {(paymentMethod.bankSlip || paymentMethod.pix) && (
                  <div className="text-xs font-light">
                    <span>{`Economia de: `}</span>
                    <span className="font-bold">{`R$ ${priceToBRL(
                      calcSum(data?.data.data.products || []).number * 0.1,
                    )}`}</span>
                  </div>
                )}
              </div>
              <button
                type={paymentMethod.creditCard ? 'submit' : 'button'}
                className="w-full bg-indigo-600 hover:bg-indigo-700 h-10 rounded-md text-white font-light text-regular shadow-md hover:shadow-lg"
                form="creditCardForm"
                onClick={checkPaymentMethod}
              >
                Finalizar
              </button>
            </div>
          </div>
        </div>
      }
    </>
  )
}
