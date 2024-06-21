import { ArrowUUpLeft, Bag, SmileySad } from '@phosphor-icons/react/dist/ssr'
import React from 'react'
import { IOrderData, ISearchParams } from '@/interfaces'
import { pageTitle } from '@/helpers'
import LateralMyAccount from '@/components/LateralMyAccount'
import { getServerSession } from 'next-auth'
import FormOrdersSelect from '@/components/FormOrdersSelect'
import SingleOrder from '@/components/SingleOrder'
import { sortOrdersByDate } from '@/helpers/orders'
import { getUserOrders } from '@/services/orders.requests'
import Link from 'next/link'

export default async function MeusPedidos({ searchParams }: ISearchParams) {
  const session = await getServerSession()
  const email = session?.user?.email as string

  const queryParams = new URLSearchParams(searchParams).toString()

  const {
    data: { orders, message },
  } = await getUserOrders(email, new URLSearchParams(queryParams).toString())

  return (
    <div className="mt-24 xxl:mt-20 w-full h-full">
      <title>{`Meus pedidos - ${pageTitle}`}</title>
      <LateralMyAccount />

      <div className="w-full h-full flex flex-col gap-10 text-white sm:gap-6 animation-opacity transition-all">
        <div className="flex gap-1 w-fit items-center justify-center">
          <Bag weight="fill" className="text-indigo-600 sm:text-3xl text-5xl" />
          <h1 className="font-regular text-xl font-semibold">Meus pedidos</h1>
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
                    className="flex gap-4 items-center justify-center p-4 py-2 bg-indigo-500 rounded-md text-sm font-bold text-white hover:bg-indigo-600 transition-all"
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
              <div className="w-fit sm:w-full flex flex-col gap-1 items-center justify-center mt-10 sm:mt-4 absolute ">
                <SmileySad
                  weight="light"
                  className="text-indigo-600 text-3xl"
                />
                <span className="text-sm">
                  Você não possui nenhum pedido feito.
                </span>
              </div>
            )}
            {}
          </div>
        </div>
      </div>
    </div>
  )
}
