import { priceToBRL } from '@/helpers'
import { convertFullDate } from '@/helpers/date'
import { IOrderData } from '@/interfaces'
import React from 'react'

export default function OrderDetails({ order }: { order: IOrderData }) {
  const checkPaymentMethod = (method: string) => {
    switch (method) {
      case 'PIX':
        return 'PIX'
      case 'bankSlip':
        return 'Boleto bancário'
      case 'creditCard':
        return 'Cartão de crédito'
      default:
        return 'desconhecido'
    }
  }

  return (
    <div className="text-white flex flex-col gap-1 bg-neutral-950 border border-neutral-900 w-[600px] max-w-full p-4 rounded-md shadow-md text-sm md:w-full animation-opacity transition-all">
      <p>
        <span className="font-bold text-base text-indigo-700">
          Número do pedido:
        </span>
        <span>{` #${order.id}`}</span>
      </p>

      <p>
        <span className="font-bold text-indigo-700 text-base">Data: </span>
        <span>{convertFullDate(order.created_at)}</span>
      </p>

      <p>
        <span className="font-bold text-indigo-700 text-base">Valor: </span>
        <span>{`R$ ${priceToBRL(order.value)}`}</span>
      </p>

      <p>
        <span className="font-bold text-indigo-700 text-base">
          Método de pagamento:{' '}
        </span>
        <span>{checkPaymentMethod(order.payment_method)}</span>
      </p>

      <p className="mt-4">
        <span>Confira seu email </span>
        <span className="font-bold text-indigo-700 text-base">
          {order.user?.email}
        </span>
        <span> para mais informações sobre seu pedido.</span>
      </p>
    </div>
  )
}
