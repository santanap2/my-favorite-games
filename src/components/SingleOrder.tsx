import GamesPlatformContext from '@/context/Context'
import { priceToBRL } from '@/helpers'
import { ILastOrderDetail } from '@/interfaces'
import { ListPlus } from '@phosphor-icons/react'
import Link from 'next/link'
import React, { useContext } from 'react'

export default function SingleOrder({
  orderNumber,
  status,
  date,
  payment,
  price,
}: ILastOrderDetail) {
  const { screenSize } = useContext(GamesPlatformContext)

  const setStatusColor = (status: string) => {
    if (status === 'concluded')
      return (
        <td className="py-3 px-4 w-52 text-sm text-green-500 font-bold xl:p-1 xl:w-20 xl:text-xxs xl:font-semibold">
          Concluído
        </td>
      )
    if (status === 'canceled')
      return (
        <td className="py-3 px-4 w-52 text-sm text-red-500 font-bold xl:p-1 xl:w-20 xl:text-xxs xl:font-semibold">
          Cancelado
        </td>
      )

    if (status === 'processing')
      return (
        <td className="py-3 px-4 w-52 text-sm text-yellow-500 font-bold xl:p-1 xl:w-20 xl:text-xxs xl:font-semibold">
          Processando
        </td>
      )
    if (status === 'awaitingPayment')
      return (
        <td className="py-3 px-4 w-52 text-sm text-sky-500 font-bold xl:p-1 xl:w-20 xl:text-xxs xl:font-semibold">
          Aguardando pagamento
        </td>
      )
  }

  return (
    <div
      key={orderNumber}
      className="w-full bg-white py-3 px-4 rounded-md shadow-sm flex justify-between items-end xl:px-0 xl:justify-center xl:flex-col xl:gap-2 xl:pb-1"
    >
      <table className="w-5/6 xl:w-full">
        <thead className="w-full">
          <tr className="font-semibold text-sm uppercase text-zinc-700 flex justify-between gap-2 xl:text-xs">
            <td className="py-3 px-4 w-60 xl:p-1 md:w-12 xl:w-40">
              {screenSize < 800 ? 'Pedido' : 'Número do pedido'}
            </td>
            <td className="py-3 px-4 w-52 xl:p-1 xl:w-20">Status</td>
            <td className="py-3 px-4 w-40 xl:p-1 xl:w-16">Data</td>
            <td className="py-3 px-4 w-52 xl:p-1 xl:w-20">Pagamento</td>
            <td className="py-3 px-4 w-40 xl:p-1 xl:w-16">Valor</td>
          </tr>
        </thead>

        <tbody className="w-full xl:text-xs">
          <tr className="text-zinc-600 flex justify-between items-center gap-2">
            <td className="py-3 px-4 w-60 xl:p-1 md:w-12 xl:w-40">
              {orderNumber}
            </td>

            {setStatusColor(status)}
            <td className="py-3 px-4 w-40 xl:p-1 xl:w-16">
              {date.toLocaleDateString('pt-BR')}
            </td>
            <td className="py-3 px-4 w-52 text-sky-400 font-semibold text-sm xl:p-1 xl:w-20">
              {payment}
            </td>
            <td className="py-3 px-4 w-40 xl:p-1 xl:w-16">{`R$ ${priceToBRL(
              price,
            )}`}</td>
          </tr>
        </tbody>
      </table>

      <Link
        href={`/minha-conta/meus-pedidos/${orderNumber}`}
        className=" w-48 text-sky-500 font-bold text-sm hover:underline flex gap-1 items-center ml-8 xl:ml-0 xl:justify-end xl:px-2 xl:w-fit xl:font-semibold xl:text-xs"
      >
        <ListPlus size={20} />
        <span className="xl:">Detalhes do pedido</span>
      </Link>
    </div>
  )
}
