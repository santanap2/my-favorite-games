import LateralMyAccount from '@/components/menus/LateralMyAccount'
import SingleOrder from '@/components/order/SingleOrder'
import UserProductCard from '@/components/product/UserProductCard'
import { pageTitle } from '@/helpers'
import { sortOrdersByDate } from '@/helpers/orders'
import { IGame, IOrderData } from '@/interfaces'
import { getUserByEmail } from '@/services/user.requests'
import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import { SmileySad, User } from '@phosphor-icons/react/dist/ssr'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'

export default async function MinhaConta() {
  const session = await getServerSession(nextAuthOptions)

  const {
    data: { user },
  } = await getUserByEmail(session?.user?.email)

  const allBoughtGames: IGame[] = []
  if (user.orders) {
    sortOrdersByDate(
      user.orders.filter((order: IOrderData) => order.status === 'concluded'),
    ).forEach((order: IOrderData) => {
      order.products.forEach((product: IGame) => allBoughtGames.push(product))
    })
  }
  const lastBoughtGames = allBoughtGames.slice(0, 12)

  return (
    <div className="w-full">
      <title>{`Minha conta - ${pageTitle}`}</title>

      <LateralMyAccount />
      <div className="w-full h-full mt-24 xxl:mt-20 flex flex-col items-start justify-start animation-opacity transition-all">
        <div className="w-full h-full flex flex-col gap-10 text-white items-start lg:gap-6">
          <div className="flex flex-col gap-1 items-start justify-center w-full pb-5 border-b border-neutral-700">
            <div className="flex gap-1 items-center justify-center w-full">
              <div className="flex flex-col w-full h-full text-base">
                <span className="font-extrabold text-2xl sm:text-lg flex gap-2 items-center justify-center w-fit">
                  <User weight="bold" className="text-3xl" />
                  {`${user.name}`}
                </span>

                <span className="flex text-neutral-500 text-base sm:text-sm sm:mt-1">
                  Um resumo do seu último pedido e dos últimos jogos comprados
                </span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 text-base">
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold w-full flex items-start justify-start">
                Seu último pedido
              </span>
              <Link
                href="/minha-conta/meus-pedidos"
                className="font-semibold min-w-fit text-indigo-600 hover:underline"
              >
                Ver todos
              </Link>
            </div>
            <>
              {user.orders.length > 0 ? (
                <SingleOrder
                  orderNumber={user.orders[user.orders.length - 1].id}
                  price={user.orders[user.orders.length - 1].value}
                  date={user.orders[user.orders.length - 1].created_at}
                  payment={user.orders[user.orders.length - 1].payment_method}
                  status={user.orders[user.orders.length - 1].status}
                />
              ) : (
                <div className="w-fit sm:w-full flex flex-col gap-1 items-center justify-center mt-6 sm:mt-0 p-4">
                  <SmileySad weight="regular" className="text-3xl" />
                  <span className="text-sm">
                    Você não possui nenhum pedido feito.
                  </span>
                </div>
              )}
            </>
          </div>

          <div className="w-full flex flex-col gap-4 text-base">
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold w-full flex items-start justify-start">
                Seus últimos games comprados
              </span>
              <Link
                href="/minha-conta/meus-games"
                className="font-semibold min-w-fit text-indigo-600 hover:underline"
              >
                Ver todos
              </Link>
            </div>
            <div className="w-full grid grid-cols-6 gap-x-8 gap-y-10 sm:gap-x-1 sm:gap-y-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-y-6">
              <>
                {lastBoughtGames.length > 0 ? (
                  lastBoughtGames.map(({ name, id, image }: IGame) => (
                    <UserProductCard
                      key={id}
                      name={name}
                      image={image}
                      gameId={id}
                      productId={id}
                    />
                  ))
                ) : (
                  <div className="w-fit sm:w-full flex flex-col gap-1 items-center justify-center mt-6 sm:mt-0 p-4 absolute">
                    <SmileySad weight="regular" className="text-3xl" />
                    <span className="text-sm">
                      Você não possui nenhum game comprado.
                    </span>
                  </div>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
