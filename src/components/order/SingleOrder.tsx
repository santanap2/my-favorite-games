import { priceToBRL } from '@/helpers'
import { convertDate } from '@/helpers/date'
import { ILastOrderDetail } from '@/interfaces'
import { ListPlus } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'

export default function SingleOrder({
  orderNumber,
  status,
  date,
  payment,
  price,
}: ILastOrderDetail) {
  const convertPaymentMethod = (method: string) => {
    switch (method) {
      case 'bankSlip':
        return 'Boleto bancário'

      case 'creditCard':
        return 'Cartão de crédito'

      case 'PIX':
        return 'PIX'

      default:
        return 'Desconhecido'
    }
  }

  const convertStatusToPortuguese = (status: string | null) => {
    switch (status) {
      case 'concluded':
        return 'Concluído'
      case 'canceled':
        return 'Cancelado'
      case 'processing':
        return 'Processando'
      case 'approvedPayment':
        return 'Pagamento aprovado'
      case 'awaitingPayment':
        return 'Aguardando pagamento'
      default:
        return 'Desconhecido'
    }
  }

  const setStatusColor = (status?: string | null) => {
    switch (status) {
      case 'awaitingPayment':
        return 'text-yellow-500'
      case 'approvedPayment':
        return 'text-lime-500'
      case 'processing':
        return 'text-teal-500'
      case 'concluded':
        return 'text-green-500'
      case 'canceled':
        return 'text-red-500'
      default:
        return ''
    }
  }

  return (
    <div
      key={orderNumber}
      className="w-full h-28 md:h-fit md:py-4 bg-stone-950 border border-stone-900 py-1 px-4 rounded-md shadow-sm flex justify-between items-center xxl:px-1 xxl:justify-center xxl:flex-col xxl:gap-2 xxl:pb-1 relative text-stone-300"
    >
      <table className="w-5/6 xxl:w-full">
        <thead className="w-full">
          <tr className="font-bold text-xs uppercase flex justify-between gap-2 xxl:text-xs">
            <td className="py-3 px-4 w-60 xxl:p-1 md:w-12 xxl:w-40 sm:hidden">
              Número do pedido
            </td>
            <td className="py-3 px-4 w-52 xxl:p-1 xxl:w-20">Status</td>
            <td className="py-3 px-4 w-40 xxl:p-1 xxl:w-16">Data</td>
            <td className="py-3 px-4 w-52 xxl:p-1 xxl:w-20">Pagamento</td>
            <td className="py-3 px-4 w-40 xxl:p-1 xxl:w-20">Valor</td>
          </tr>
        </thead>

        <tbody className="w-full text-sm xxl:text-xs">
          <tr className="flex justify-between items-center gap-2">
            <td className="py-3 px-4 w-60 xxl:p-1 md:w-12 xxl:w-40 sm:hidden">
              {`#${orderNumber}`}
            </td>

            <td
              className={`${setStatusColor(
                status,
              )} py-3 px-4 w-52 font-bold xxl:p-1 xxl:w-20 xxl:text-xs xxl:font-semibold`}
            >
              {convertStatusToPortuguese(status)}
            </td>
            <td className="py-3 px-4 w-40 xxl:p-1 xxl:w-16">
              {convertDate(date)}
            </td>
            <td className="py-3 px-4 w-52 font-bold xxl:p-1 xxl:w-20">
              {convertPaymentMethod(payment)}
            </td>
            <td className="py-3 px-4 w-40 xxl:p-1 xxl:w-20 text-justify">
              {`R$ ${priceToBRL(price)}`}
            </td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-end sm:justify-between w-full">
        <p className="text-xs ml-2 hidden sm:block">
          <span className="uppercase font-semibold">Pedido: #</span>
          <span>{orderNumber}</span>
        </p>

        <Link
          href={`/minha-conta/meus-pedidos/${orderNumber}`}
          className="w-48 font-bold text-sm hover:underline flex gap-1 items-center xxl:ml-0 xxl:justify-end xxl:px-2 xxl:w-fit xxl:font-semibold xxl:text-xs"
        >
          <ListPlus className="text-xl" />
          <span>Detalhes do pedido</span>
        </Link>
      </div>
    </div>
  )
}
