import { priceToBRL } from '@/helpers'
import { ILastOrderDetail } from '@/interfaces'
import { ListPlus } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

export default function SingleOrder({
  orderNumber,
  status,
  date,
  payment,
  price,
}: ILastOrderDetail) {
  const setStatusColor = (status: string) => {
    if (status === 'concluded')
      return (
        <td className="py-3 px-4 w-52 text-sm text-green-500 font-bold">
          Concluído
        </td>
      )
    if (status === 'canceled')
      return (
        <td className="py-3 px-4 w-52 text-sm text-red-500 font-bold">
          Cancelado
        </td>
      )

    if (status === 'processing')
      return (
        <td className="py-3 px-4 w-52 text-sm text-yellow-500 font-bold">
          Processando
        </td>
      )
    if (status === 'awaitingPayment')
      return (
        <td className="py-3 px-4 w-52 text-sm text-sky-500 font-bold">
          Aguardando pagamento
        </td>
      )
  }
  return (
    <div
      key={orderNumber}
      className="w-full bg-white py-3 px-4 rounded-md shadow-sm flex justify-between items-center"
    >
      <table className="w-5/6">
        <thead className="w-full">
          <tr className="font-semibold text-sm uppercase text-zinc-700 flex justify-between gap-2">
            <td className="py-3 px-4 w-60">Número do pedido</td>
            <td className="py-3 px-4 w-52">Status</td>
            <td className="py-3 px-4 w-40">Data</td>
            <td className="py-3 px-4 w-52">Pagamento</td>
            <td className="py-3 px-4 w-40 ">Valor</td>
          </tr>
        </thead>

        <tbody className="w-full">
          <tr className="text-zinc-600 flex justify-between gap-2">
            <td className="py-3 px-4 w-60">{orderNumber}</td>

            {setStatusColor(status)}
            <td className="py-3 px-4 w-40">
              {date.toLocaleDateString('pt-BR')}
            </td>
            <td className="py-3 px-4 w-52 text-sky-400 font-semibold text-sm">
              {payment}
            </td>
            <td className="py-3 px-4 w-40">{`R$ ${priceToBRL(price)}`}</td>
          </tr>
        </tbody>
      </table>

      <Link
        href={`/minha-conta/meus-pedidos/${orderNumber}`}
        className=" w-48 text-sky-500 font-bold text-sm hover:underline flex gap-1 items-center ml-8"
      >
        <ListPlus size={20} />
        <span>Detalhes do pedido</span>
      </Link>
    </div>
  )
}
