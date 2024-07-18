import { ArrowUUpLeft, Bag } from '@phosphor-icons/react/dist/ssr'
import React from 'react'
import { IOrderData, ISearchParams } from '@/interfaces'
import { pageTitle } from '@/helpers'
import { getServerSession } from 'next-auth'
import FormOrdersSelect from '@/components/order/FormOrdersSelect'
import SingleOrder from '@/components/order/SingleOrder'
import { sortOrdersByDate } from '@/helpers/orders'
import { getUserOrders } from '@/services/orders.requests'
import Link from 'next/link'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'

export default async function MeusPedidos({ searchParams }: ISearchParams) {
  const session = await getServerSession(nextAuthOptions)
  const email = session?.user?.email as string

  const queryParams = new URLSearchParams(searchParams).toString()

  const {
    data: { orders, message },
  } = await getUserOrders(email, new URLSearchParams(queryParams).toString())

  return (
    <div className="w-full h-full  border-l border-zinc-800 pl-4 md:border-none md:pl-0 text-zinc-300">
      <title>{`Meus pedidos - ${pageTitle}`}</title>

      <div className="w-full h-full flex flex-col gap-10 sm:gap-6 animation-opacity transition-all">
        <div className="flex flex-col gap-1 items-start justify-center w-full pb-5 border-b border-zinc-800">
          <div className="flex gap-1 items-center justify-center w-full">
            <div className="flex flex-col w-full h-full text-base">
              <span className="font-extrabold text-2xl sm:text-lg flex gap-2 items-center justify-center w-fit">
                <Bag weight="bold" className="text-3xl" />
                Meus pedidos
              </span>

              <span className="flex text-base sm:text-sm sm:mt-1">
                Confira todos os seus pedidos
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <FormOrdersSelect searchParams={searchParams} />

          <div className="flex flex-col gap-4 w-full">
            {message === 'Não há nenhum pedido de acordo com os filtros' ? (
              <div className="w-fit sm:w-full flex flex-col gap-4 justify-center items-start sm:items-center mt-10">
                <span className="text-sm">
                  Nenhum pedido de acordo com os filtros.
                </span>
                <Link href="/minha-conta/meus-pedidos">
                  <button
                    type="button"
                    className="flex gap-4 items-center justify-center p-4 py-2 bg-zinc-300 text-zinc-800 rounded-md text-sm font-bold  transition-all"
                  >
                    <ArrowUUpLeft className="text-xl" />

                    <span>Voltar</span>
                  </button>
                </Link>
              </div>
            ) : orders.length > 0 ? (
              sortOrdersByDate(orders).map((order: IOrderData) => (
                <SingleOrder
                  key={order.id}
                  orderNumber={order.id}
                  price={order.value}
                  date={order.created_at}
                  payment={order.payment_method}
                  status={order.status}
                />
              ))
            ) : (
              <div className="flex p-4 text-sm">
                Você não possui nenhum pedido.
              </div>
            )}
            {}
          </div>
        </div>
      </div>
    </div>
  )
}
