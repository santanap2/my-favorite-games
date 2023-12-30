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

  const convertPaymentMethod = (method: string) => {
    switch (method) {
      case 'bankSlip':
        return 'Boleto bancário'

      case 'creditCard':
        return 'Cartão de crédito'

      case 'PIX':
        return 'PIX'

      default:
        return 'PIX'
    }
  }

  const convertDate = (date: Date) => {
    const newDate = new Date(date)
    const day = String(newDate.getDate()).padStart(2, '0')
    const month = String(newDate.getMonth() + 1).padStart(2, '0')
    const year = String(newDate.getFullYear())
    const formattedDate = `${day}/${month}/${year}`

    return formattedDate
  }

  const setStatusColor = (status?: string | null) => {
    if (status === 'concluded')
      return (
        <td className="py-3 px-4 w-52 text-sm text-green-500 font-bold xxl:p-1 xxl:w-20 xxl:text-xxs xxl:font-semibold">
          Concluído
        </td>
      )
    if (status === 'canceled')
      return (
        <td className="py-3 px-4 w-52 text-sm text-red-500 font-bold xxl:p-1 xxl:w-20 xxl:text-xxs xxl:font-semibold">
          Cancelado
        </td>
      )

    if (status === 'processing')
      return (
        <td className="py-3 px-4 w-52 text-sm text-teal-500 font-bold xxl:p-1 xxl:w-20 xxl:text-xxs xxl:font-semibold">
          Processando
        </td>
      )
    if (status === 'awaitingPayment')
      return (
        <td className="py-3 px-4 w-52 text-sm text-yellow-500 font-bold xxl:p-1 xxl:w-20 xxl:text-xxs xxl:font-semibold">
          Aguardando pagamento
        </td>
      )
  }

  return (
    <div
      key={orderNumber}
      className="w-full bg-white py-3 px-4 rounded shadow-sm flex justify-between items-end xxl:px-0 xxl:justify-center xxl:flex-col xxl:gap-2 xxl:pb-1"
    >
      <table className="w-5/6 xxl:w-full">
        <thead className="w-full">
          <tr className="font-semibold text-sm uppercase text-zinc-700 flex justify-between gap-2 xxl:text-xs">
            <td className="py-3 px-4 w-60 xxl:p-1 md:w-12 xxl:w-40">
              {screenSize < 800 ? 'Pedido' : 'Número do pedido'}
            </td>
            <td className="py-3 px-4 w-52 xxl:p-1 xxl:w-20">Status</td>
            <td className="py-3 px-4 w-40 xxl:p-1 xxl:w-16">Data</td>
            <td className="py-3 px-4 w-52 xxl:p-1 xxl:w-20">Pagamento</td>
            <td className="py-3 px-4 w-40 xxl:p-1 xxl:w-16">Valor</td>
          </tr>
        </thead>

        <tbody className="w-full xxl:text-xs">
          <tr className="text-zinc-600 flex justify-between items-center gap-2">
            <td className="py-3 px-4 w-60 xxl:p-1 md:w-12 xxl:w-40">
              {orderNumber}
            </td>

            {setStatusColor(status)}
            <td className="py-3 px-4 w-40 xxl:p-1 xxl:w-16">
              {convertDate(date)}
            </td>
            <td className="py-3 px-4 w-52 text-teal-400 font-semibold text-sm xxl:p-1 xxl:w-20">
              {convertPaymentMethod(payment)}
            </td>
            <td className="py-3 px-4 w-40 xxl:p-1 xxl:w-16">
              {`R$ ${priceToBRL(price)}`}
            </td>
          </tr>
        </tbody>
      </table>

      <Link
        href={`/minha-conta/meus-pedidos/${orderNumber}`}
        className=" w-48 text-teal-500 font-bold text-sm hover:underline flex gap-1 items-center ml-8 xxl:ml-0 xxl:justify-end xxl:px-2 xxl:w-fit xxl:font-semibold xxl:text-xs"
      >
        <ListPlus size={20} />
        <span className="xxl:">Detalhes do pedido</span>
      </Link>
    </div>
  )
}
