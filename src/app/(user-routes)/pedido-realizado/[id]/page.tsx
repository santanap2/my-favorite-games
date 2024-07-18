/* eslint-disable react-hooks/exhaustive-deps */
import OrderStatus from '@/components/order/OrderStatus'
import { getOneUserOrder } from '@/services/orders.requests'
import { ListPlus, ShoppingBagOpen } from '@phosphor-icons/react/dist/ssr'
import React from 'react'
import OrderDetails from '@/components/order/OrderDetails'
import Link from 'next/link'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'
import { getServerSession } from 'next-auth'
import { IGameIDParams } from '@/interfaces'

export default async function PedidoSucesso({ params: { id } }: IGameIDParams) {
  const session = await getServerSession(nextAuthOptions)
  const email = session?.user?.email as string

  const { data } = await getOneUserOrder({ id, email })

  return (
    <div className="w-full flex h-full gap-2 mt-24 xxl:mt-20 text-zinc-300">
      <title>{`Pedido realizado - #${id}`}</title>

      <div className="w-full h-full flex flex-col items-center justify-center gap-4 animation-opacity transition-all">
        <div className="flex flex-col gap-1 items-start justify-center w-full pb-5 border-b border-zinc-800">
          <div className="flex gap-1 items-center justify-center w-full">
            <div className="flex flex-col w-full h-full text-base justify-center sm:items-start items-center">
              <span className="font-extrabold text-2xl sm:text-lg flex gap-2 items-center justify-center w-fit">
                <ShoppingBagOpen weight="bold" className="text-3xl" />
                Pedido realizado com sucesso!
              </span>

              <span className="flex text-base sm:text-sm sm:mt-1">
                Parabéns pelo pedido, estamos preparando-o.
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full items-center justify-center mt-10 sm:mt-4">
          <OrderStatus order={data.order} />
          <OrderDetails order={data.order} />
          <Link href={`/minha-conta/meus-pedidos/${id}`}>
            <button className="mt-6 flex w-full justify-center items-center space-x-3 rounded-md bg-zinc-300 px-3 py-1.5 text-sm font-semibold leading-6 text-zinc-800 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-40">
              <ListPlus className="text-xl" weight="bold" />
              <span>Ver mais detalhes</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
