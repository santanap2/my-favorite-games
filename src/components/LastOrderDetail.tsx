import { ILastOrderDetail } from '@/interfaces'
import Link from 'next/link'
import React from 'react'

export default function LastOrderDetail({
  order,
  name,
  status,
  date,
  payment,
}: ILastOrderDetail) {
  const colorStatus = () => {
    if (status === 'Aguardando pagamento') return 'text-sky-500'
    if (status === 'Processando') return 'text-yellow-500'
    if (status === 'Concluído') return 'text-green-600'
    if (status === 'Cancelado') return 'text-red-600'
    return ''
  }

  return (
    <div className=" w-11/12 bg-white rounded-md p-6 shadow-md">
      <table className="w-full">
        <thead>
          <tr className="font-bold text-sm uppercase">
            <td className="w-64 bg-sky-200 py-3 pl-3 rounded-l-md">Nome</td>
            <td className="w-36 bg-sky-200 py-3">Número do pedido</td>
            <td className="w-40 bg-sky-200 py-3">Status</td>
            <td className="w-40 bg-sky-200 py-3">Data</td>
            <td className="w-40 bg-sky-200 py-3 rounded-r-md">Pagamento</td>
          </tr>
        </thead>

        <tbody className="pt-10 text-md font-light">
          <tr>
            <td className="w-48 py-3 hover:underline">
              <Link href={`/meus-pedidos/${order}`}>{name}</Link>
            </td>
            <td className="w-36 py-3">{order}</td>
            <td className={`w-40 text-md font-semibold ${colorStatus()}`}>
              {status}
            </td>
            <td>
              {`${date.toLocaleDateString('pt-BR')} - ${date.toLocaleTimeString(
                'pt-BR',
              )}`}
            </td>
            <td>{payment}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
