/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import LateralMenu from '@/components/LateralMenu'
import SingleOrder from '@/components/SingleOrder'
import UserOrderCard from '@/components/UserOrderCard'
import GamesPlatformContext from '@/context/Context'
import orders from '@/data/userOrders'
import { pageTitle } from '@/helpers'
import { IGame } from '@/interfaces'
import { UserCircle, EnvelopeSimple } from '@phosphor-icons/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

export default function MinhaConta() {
  const { logged, setLogged, screenSize } = useContext(GamesPlatformContext)

  const router = useRouter()

  const { orderNumber, price, status, date, payment, items } =
    orders[orders.length - 1]

  const allGames: IGame[] = []
  const concludedOrders = orders.filter((item) => item.status === 'concluded')
  concludedOrders.forEach((order) =>
    order.items.forEach((game) => allGames.push(game)),
  )

  useEffect(() => {
    // if (!logged) {
    //   setLogged(false)
    //   router.push('/login')
    // }
  }, [])

  return (
    <div className="w-full">
      <title>{`${pageTitle} - Minha conta`}</title>

      <LateralMenu />
      <div className="w-full h-full mt-24 lg:mt-20 flex flex-col items-start justify-start">
        <div className="w-full h-full flex flex-col gap-10 text-zinc-800 items-start sm:gap-6">
          <div className="flex gap-1 items-start w-fit">
            <UserCircle
              weight="fill"
              size={screenSize < 600 ? 36 : 56}
              className="text-sky-500"
            />
            <div className="flex flex-col">
              <h1 className="font-regular text-xl sm:text-base">
                Olá{' '}
                <strong className="font-bold text-2xl sm:text-xl">
                  Pedro Santana
                </strong>
                , bem vindo de volta!
              </h1>
              <h2 className="text-sm font-light flex sm:text-xs">
                <EnvelopeSimple
                  size={20}
                  weight="fill"
                  className="text-sky-500"
                />
                phsantana99@gmail.com
              </h2>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2">
            <span className="font-semibold text-xl sm:text-base">
              Detalhes do seu último pedido
            </span>
            <SingleOrder
              key={orderNumber}
              orderNumber={orderNumber}
              price={price}
              date={date}
              payment={payment}
              status={status}
              items={items}
            />
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold text-xl sm:text-base">
                Seus últimos games comprados
              </span>
              <Link
                href="/minha-conta/meus-games"
                className="font-semibold text-lg text-sky-400 hover:underline sm:text-base"
              >
                Ver todos
              </Link>
            </div>
            <div className="w-full grid grid-cols-4 gap-x-12 gap-y-6 sm:grid-cols-2 sm:gap-3">
              {allGames.length > 0 ? (
                allGames.map(({ name, id, image }: IGame) => (
                  <UserOrderCard
                    key={id}
                    name={name}
                    image={image}
                    gameId={id}
                    productId={id}
                    isGame
                  />
                ))
              ) : (
                <span>Você não possui nenhum game comprado.</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
