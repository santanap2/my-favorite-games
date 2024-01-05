import { priceToBRL } from '@/helpers'
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
    <div className="text-black flex flex-col gap-1 bg-white w-[600px] max-w-full p-4 rounded shadow-md sm:text-sm md:w-full">
      <p>
        <span className="font-bold text-violet-500">Número do pedido:</span>
        <span>{` #${order.id}`}</span>
      </p>

      <p>
        <span className="font-bold text-violet-500">Data: </span>
        <span>
          {new Date(order.created_at).toLocaleDateString('pt-BR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: 'America/Sao_Paulo',
          })}
        </span>
      </p>

      <p>
        <span className="font-bold text-violet-500">Valor: </span>
        <span>{`R$ ${priceToBRL(order.value)}`}</span>
      </p>

      <p>
        <span className="font-bold text-violet-500">Método de pagamento: </span>
        <span>{checkPaymentMethod(order.payment_method)}</span>
      </p>

      <p className="mt-4">
        <span>Confira seu email </span>
        <span className="font-bold text-violet-500">{order.user?.email}</span>
        <span> para mais informações sobre seu pedido.</span>
      </p>
    </div>
  )
}
