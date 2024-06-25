import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'
import BoughtGames from '@/components/general/BoughtGames'
import MyGamesForm from '@/components/general/MyGamesForm'
import LateralMyAccount from '@/components/menus/LateralMyAccount'
import { pageTitle } from '@/helpers'
import { sortOrdersByDate } from '@/helpers/orders'
import { IGame, IOrderData } from '@/interfaces'
import { getUserOrders } from '@/services/orders.requests'
import { GameController } from '@phosphor-icons/react/dist/ssr'
import { getServerSession } from 'next-auth'
import {} from 'next/navigation'
import React from 'react'

export default async function MeusGames() {
  const session = await getServerSession(nextAuthOptions)
  const email = session?.user?.email as string

  const { data } = await getUserOrders(email)

  const allBoughtGames: IGame[] = []
  if (data.orders) {
    sortOrdersByDate(data.orders)
      .filter((order: IOrderData) => order.status === 'concluded')
      .forEach((order: IOrderData) => {
        order.products.forEach((product: IGame) => allBoughtGames.push(product))
      })
  }

  return (
    <div className="mt-24 xxl:mt-20  w-full h-full">
      <title>{`Meus games - ${pageTitle}`}</title>

      <LateralMyAccount />
      <div className=" w-full h-full flex flex-col gap-10 text-white sm:gap-6 animation-opacity transition-all">
        <div className="flex flex-col gap-1 items-start justify-center w-full pb-5 border-b border-neutral-700">
          <div className="flex gap-1 items-center justify-center w-full">
            <div className="flex flex-col w-full h-full text-base">
              <span className="font-extrabold text-2xl sm:text-lg flex gap-2 items-center justify-center w-fit">
                <GameController weight="bold" className="text-3xl" />
                Meus games
              </span>

              <span className="flex text-neutral-500 text-base sm:text-sm sm:mt-1">
                Confira todos os games já adquiridos por você
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <MyGamesForm />
          <div className="w-full grid grid-cols-6 gap-x-8 gap-y-10 sm:gap-x-1 sm:gap-y-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-y-6">
            <BoughtGames allBoughtGames={allBoughtGames} />
          </div>
        </div>
      </div>
    </div>
  )
}
