'use client'

import CreditCardForm from '@/components/CreditCardForm'
import CoursesPlatformContext from '@/context/Context'
import { calcSum, priceToBRL } from '@/helpers'
import { CheckCircle, Circle, Wallet } from '@phosphor-icons/react'
import React, { useContext } from 'react'

export default function Page() {
  const { cart, paymentMethod, setPaymentMethod } = useContext(
    CoursesPlatformContext,
  )

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

  const checkPaymentMethod = () => {
    if (paymentMethod.bankSlip) console.log('boleto')
    if (paymentMethod.pix) console.log('pix')
    if (paymentMethod.creditCard) console.log('credito')
  }

  return (
    <div className="mt-24 w-4/5 flex flex-col gap-12">
      <div className="flex gap-1 w-fit items-center justify-center">
        <Wallet weight="fill" size={56} className="text-sky-500" />
        <h1 className="font-regular text-xl font-semibold">
          Forma de pagamento
        </h1>
      </div>

      <div className="flex justify-between items-start w-full h-full ">
        <div className="w-[70%] bg-white rounded-md shadow-md p-6 flex flex-col gap-4">
          <div
            onClick={() => pickPaymentMethod('pix')}
            className={` ${
              paymentMethod.pix && 'border-1 border-sky-400 shadow-md'
            } bg-zinc-50 px-6 py-4 border border-1 rounded-md flex flex-col gap-2 justify-start cursor-pointer text-zinc-700 `}
          >
            <div className="flex gap-4">
              <div>
                {paymentMethod.pix ? (
                  <CheckCircle
                    size={28}
                    weight="fill"
                    className="text-sky-400"
                  />
                ) : (
                  <Circle size={28} weight="regular" className="text-sky-400" />
                )}
              </div>
              <h1
                className={`text-lg font-bold ${
                  paymentMethod.pix ? 'text-sky-400' : 'text-zinc-700'
                }`}
              >
                PIX
              </h1>
            </div>
            {paymentMethod.pix && (
              <div className="w-full appear-animation">
                <p className="text-sm font-light w-full text-justify">
                  Pague{' '}
                  <strong className="font-semibold">à vista no PIX</strong>, com{' '}
                  <strong className="font-semibold">aprovação imediata</strong>{' '}
                  do pagamento e com
                  <strong className="font-semibold"> desconto de 10%</strong> no
                  valor original.
                </p>
              </div>
            )}
          </div>
          <div
            onClick={() => pickPaymentMethod('bankSlip')}
            className={` ${
              paymentMethod.bankSlip && 'border-1 border-sky-400 shadow-md'
            } bg-zinc-50 px-6 py-4 border border-1 rounded-md flex flex-col gap-2 justify-start cursor-pointer text-zinc-700 `}
          >
            <div className="flex gap-4">
              <div>
                {paymentMethod.bankSlip ? (
                  <CheckCircle
                    size={28}
                    weight="fill"
                    className="text-sky-400"
                  />
                ) : (
                  <Circle size={28} weight="regular" className="text-sky-400" />
                )}
              </div>
              <h1
                className={`text-lg font-bold ${
                  paymentMethod.bankSlip ? 'text-sky-400' : 'text-zinc-700'
                }`}
              >
                Boleto bancário
              </h1>
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
            className={` ${
              paymentMethod.creditCard && 'border border-sky-400 shadow-md'
            } bg-zinc-50 px-6 py-4 border  rounded-md flex flex-col gap-6 cursor-pointer text-zinc-700 `}
          >
            <div className="flex gap-4 w-full">
              <div>
                {paymentMethod.creditCard ? (
                  <CheckCircle
                    size={28}
                    weight="fill"
                    className="text-sky-400"
                  />
                ) : (
                  <Circle size={28} weight="regular" className="text-sky-400" />
                )}
              </div>
              <h1
                className={`text-lg font-bold ${
                  paymentMethod.creditCard ? 'text-sky-400' : 'text-zinc-700'
                }`}
              >
                Cartão de crédito
              </h1>
            </div>

            {paymentMethod.creditCard && <CreditCardForm />}
          </div>
        </div>

        <div className="bg-white rounded-md shadow-md py-6 px-6 w-80 flex flex-col items-end gap-4">
          <div className="w-full h-30 bg-sky-50 p-4 rounded-md flex flex-col items-center justify-center text-sky-500">
            <div className="text-sm flex">{whichPaymentMethod()}</div>
            <span className="text-3xl font-extrabold mt-2">
              {paymentMethod.creditCard ? (
                <span className="text-3xl font-extrabold mt-2">{`R$ ${priceToBRL(
                  calcSum(cart).number,
                )}`}</span>
              ) : (
                <span className="text-3xl font-extrabold mt-2">{`R$ ${priceToBRL(
                  calcSum(cart).number * 0.9,
                )}`}</span>
              )}
            </span>
            {(paymentMethod.bankSlip || paymentMethod.pix) && (
              <div className="text-xs font-light">
                <span>{`Economia de: `}</span>
                <span className="font-bold">{`R$ ${priceToBRL(
                  calcSum(cart).number * 0.1,
                )}`}</span>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-sky-400 h-10 rounded-md text-white font-light text-regular shadow-md hover:shadow-lg"
            form="creditCardForm"
            onClick={checkPaymentMethod}
          >
            Finalizar
          </button>
        </div>
      </div>
    </div>
  )
}
