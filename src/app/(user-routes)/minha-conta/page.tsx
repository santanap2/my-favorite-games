import SingleOrder from '@/components/order/SingleOrder'
import UserProductCard from '@/components/product/UserProductCard'
import { pageTitle } from '@/helpers'
import { sortOrdersByDate } from '@/helpers/orders'
import { IGame, IOrderData } from '@/interfaces'
import { getUserByEmail } from '@/services/user.requests'
import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import { User } from '@phosphor-icons/react/dist/ssr'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'

export default async function MinhaConta() {
  const session = await getServerSession(nextAuthOptions)
  const email = session?.user?.email as string

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
    <div className="w-full h-full border-l border-neutral-800 pl-4 md:border-none md:pl-0 text-neutral-200">
      <title>{`Resumo - ${pageTitle}`}</title>

      <div className="w-full h-full flex flex-col items-start justify-start animation-opacity transition-all">
        <div className="w-full h-full flex flex-col gap-10 items-start lg:gap-6">
          <div className="flex flex-col gap-1 items-start justify-center w-full pb-5 border-b border-neutral-800">
            <div className="flex gap-1 items-center justify-center w-full">
              <div className="flex flex-col w-full h-full text-base">
                <span className="font-extrabold text-2xl sm:text-lg flex gap-2 items-center justify-center w-fit">
                  <User weight="bold" className="text-3xl" />
                  {`${user.name}`}
                </span>

                <span className="flex text-base sm:text-sm sm:mt-1">
                  Um resumo do seu último pedido e dos últimos jogos comprados
                </span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 text-base relative">
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold w-full flex items-start justify-start">
                Seu último pedido
              </span>
              <Link
                href="/minha-conta/meus-pedidos"
                className="font-semibold min-w-fit hover:underline"
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
                <div className="flex p-4 text-sm">
                  Você não possui nenhum pedido.
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
                className="font-semibold min-w-fit hover:underline"
              >
                Ver todos
              </Link>
            </div>
            <div
              className={`w-full  gap-6 sm:gap-x-1 sm:gap-y-3 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 lg:gap-y-6 ${lastBoughtGames.length !== 0 ? 'grid grid-cols-6' : 'flex items-start justify-start'}`}
            >
              {lastBoughtGames.length > 0 ? (
                lastBoughtGames.map(({ name, id, image }: IGame) => (
                  <UserProductCard
                    key={id}
                    name={name}
                    image={image}
                    gameId={id}
                    productId={id}
                    email={email}
                  />
                ))
              ) : (
                <div className="flex p-4 text-sm">
                  Você não possui nenhum game.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
