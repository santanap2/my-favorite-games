'use client'

import LateralMenu from '@/components/LateralMenu'
import GamesPlatformContext from '@/context/Context'
import { Bag } from '@phosphor-icons/react'
import React, { useContext, useEffect, useState } from 'react'
import orders from '@/data/userOrders'
import SingleOrder from '@/components/SingleOrder'
import { IUserOrders } from '@/interfaces'
import { pageTitle } from '@/helpers'

export default function MeusPedidos() {
  const { userOrders, setUserOrders, screenSize } =
    useContext(GamesPlatformContext)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const filteredOrders = orders.filter(({ status }) => status === filter)
    setUserOrders(filteredOrders)
    if (filter === 'all') setUserOrders(orders)
  }, [filter, setUserOrders])

  return (
    <div className="mt-24 xxl:mt-20 w-full h-full">
      <title>{`${pageTitle} - Meus pedidos`}</title>

      <LateralMenu />
      <div className="w-full h-full flex flex-col gap-10 text-zinc-800 sm:gap-6">
        <div className="flex gap-1 w-fit items-center justify-center">
          <Bag
            weight="fill"
            size={screenSize < 600 ? 36 : 56}
            className="text-sky-500"
          />
          <h1 className="font-regular text-xl font-semibold">Meus pedidos</h1>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <form className="w-fit">
            <label
              htmlFor="filters"
              className="flex gap-3 items-center justify-center"
            >
              <span className="text-sm tracking-wide font-semibold">
                Filtrar pedidos:
              </span>
              <select
                name=""
                id="filters"
                className="h-10 rounded-md px-3 focus:outline-none text-zinc-700 hover:shadow-lg w-60 text-left text-sm font-light bg-white shadow-md"
                onChange={({ target: { value } }) => setFilter(value)}
              >
                <option value="all">Todos</option>
                <option value="concluded">Concluído</option>
                <option value="canceled">Cancelado</option>
                <option value="processing">Processando</option>
                <option value="awaitingPayment">Aguardando pagamento</option>
              </select>
            </label>
          </form>

          <div className="flex flex-col gap-4 w-full">
            {userOrders.map(
              ({
                orderNumber,
                price,
                date,
                payment,
                status,
                items,
              }: IUserOrders) => (
                <SingleOrder
                  key={orderNumber}
                  orderNumber={orderNumber}
                  price={price}
                  date={date}
                  payment={payment}
                  status={status}
                  items={items}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
