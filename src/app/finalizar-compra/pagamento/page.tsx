/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import CreditCardForm from '@/components/CreditCardForm'
import GamesPlatformContext from '@/context/Context'
import { calcSum, pageTitle, priceToBRL } from '@/helpers'
import { getUserByToken, getUserCart } from '@/services'
import { createOrder } from '@/services/orders.requests'
import { CheckCircle, Circle, Wallet } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { redirect, useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

export default function Pagamento() {
  const {
    paymentMethod,
    setPaymentMethod,
    screenSize,
    loading,
    setLoading,
    isAuthenticated,
  } = useContext(GamesPlatformContext)

  const router = useRouter()

  const { isFetched: userIsFetched, error: userError } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => await getUserByToken(),
    retry: false,
  })

  if (
    userIsFetched &&
    userError &&
    userError.message === 'Request failed with status code 401'
  )
    redirect('/login')

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
          : '',
    })
    if (result.status === 201)
      router.push(`/pedido-realizado/${result.data.data.id}`)

    setLoading({ ...loading, cart: !loading.cart })
  }

  return (
    <>
      {!isAuthenticated && null}
      {isAuthenticated && (
        <div className="mt-24 xxl:mt-20 w-4/5 flex flex-col gap-10 xxl:w-full sm:gap-6">
          <title>{`${pageTitle} - Pagamento`}</title>

          <div className="flex gap-1 w-fit items-center justify-center">
            <Wallet
              weight="fill"
              className="text-slate-500 sm:text-3xl text-5xl"
            />
            <h1 className="font-regular text-xl font-semibold">
              Forma de pagamento
            </h1>
          </div>

          <div className="flex justify-between items-start w-full h-full sm:flex-col sm:gap-4 sm:items-center">
            <div className="w-[70%] bg-white rounded shadow-md p-6 flex flex-col gap-4 sm:w-full xl:w-3/5">
              <div
                onClick={() => pickPaymentMethod('pix')}
                className={` ${
                  paymentMethod.pix && 'border-1 border-slate-400 shadow-md'
                } bg-zinc-50 px-6 py-4 border border-1 rounded flex flex-col gap-2 justify-start cursor-pointer text-zinc-700 `}
              >
                <div className="flex gap-4">
                  <div>
                    {paymentMethod.pix ? (
                      <CheckCircle
                        weight="fill"
                        className="text-slate-400 sm:text-[24px] text-xl"
                      />
                    ) : (
                      <Circle
                        weight="regular"
                        className="text-slate-400 sm:text-[24px] text-xl"
                      />
                    )}
                  </div>
                  <h1
                    className={`text-lg font-bold ${
                      paymentMethod.pix ? 'text-slate-400' : 'text-zinc-700'
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
                className={` ${
                  paymentMethod.bankSlip &&
                  'border-1 border-slate-400 shadow-md'
                } bg-zinc-50 px-6 py-4 border border-1 rounded flex flex-col gap-2 justify-start cursor-pointer text-zinc-700 `}
              >
                <div className="flex gap-4">
                  <div>
                    {paymentMethod.bankSlip ? (
                      <CheckCircle
                        weight="fill"
                        className="text-slate-400 sm:text-[24px] text-xl"
                      />
                    ) : (
                      <Circle
                        weight="regular"
                        className="text-slate-400 sm:text-[24px] text-xl"
                      />
                    )}
                  </div>
                  <h1
                    className={`text-lg font-bold ${
                      paymentMethod.bankSlip
                        ? 'text-slate-400'
                        : 'text-zinc-700'
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
                className={` ${
                  paymentMethod.creditCard &&
                  'border border-slate-400 shadow-md'
                } bg-zinc-50 px-6 py-4 border  rounded flex flex-col gap-6 cursor-pointer text-zinc-700 `}
              >
                <div className="flex gap-4 w-full">
                  <div>
                    {paymentMethod.creditCard ? (
                      <CheckCircle
                        weight="fill"
                        className="text-slate-400 sm:text-[24px] text-xl"
                      />
                    ) : (
                      <Circle
                        weight="regular"
                        className="text-slate-400 sm:text-[24px] text-xl"
                      />
                    )}
                  </div>
                  <h1
                    className={`text-lg font-bold ${
                      paymentMethod.creditCard
                        ? 'text-slate-400'
                        : 'text-zinc-700'
                    } sm:text-base`}
                  >
                    Cartão de crédito
                  </h1>
                </div>

                {paymentMethod.creditCard && <CreditCardForm />}
              </div>
            </div>

            <div className="bg-white rounded shadow-md py-6 px-6 w-80 flex flex-col items-end gap-4 sm:items-center sm:w-full sm:p-2 xl:w-1/3">
              <div className="w-full h-30 bg-slate-50 p-4 rounded flex flex-col items-center justify-center text-slate-500 sm:w-60 sm:p-2">
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
                className="w-full bg-slate-400 h-10 rounded text-white font-light text-regular shadow-md hover:shadow-lg"
                form="creditCardForm"
                onClick={checkPaymentMethod}
              >
                Finalizar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
