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
import { EnvelopeSimple, SmileySad, User } from '@phosphor-icons/react/dist/ssr'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'

export default async function MinhaConta() {
  const session = await getServerSession(nextAuthOptions)

  const {
    data: { user },
  } = await getUserByEmail(session?.user?.email)

  const allBoughtGames: IGame[] = []
  if (user?.orders) {
    sortOrdersByDate(
      user.orders.filter((order: IOrderData) => order.status === 'concluded'),
    ).forEach((order: IOrderData) => {
      order.products.forEach((product: IGame) => allBoughtGames.push(product))
    })
  }
  const lastBoughtGames = allBoughtGames.slice(0, 10)

  return (
    <div className="w-full">
      <title>{`Minha conta - ${pageTitle}`}</title>

      <LateralMyAccount />
      <div className="w-full h-full mt-24 xxl:mt-20 flex flex-col items-start justify-start animation-opacity transition-all">
        <div className="w-full h-full flex flex-col gap-10 text-white items-start lg:gap-6">
          <div className="flex flex-col gap-1 items-start justify-center w-full">
            <div className="flex gap-1 items-end justify-center w-full">
              <User weight="fill" className="text-5xl text-indigo-600" />

              <div className="flex flex-col w-full h-full text-sm">
                <span>
                  Olá{' '}
                  <span className="font-extrabold text-lg">{`${user?.name}`}</span>
                  , bem vindo(a) de volta!
                </span>
                <span className="flex text-xs">
                  <EnvelopeSimple
                    weight="regular"
                    className="h-8 md:h-6 text-lg text-indigo-600"
                  />
                  <span className="h-8 md:h-6 flex items-center justify-center">
                    {user?.email}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold text-xl lg:text-base w-full flex items-start justify-start">
                Seu último pedido
              </span>
              <Link
                href="/minha-conta/meus-pedidos"
                className="font-semibold text-lg min-w-fit text-indigo-600 hover:underline lg:text-base"
              >
                Ver todos
              </Link>
            </div>
            <>
              {user?.orders.length > 0 ? (
                <SingleOrder
                  orderNumber={user?.orders[user?.orders.length - 1].id}
                  price={user?.orders[user?.orders.length - 1].value}
                  date={user?.orders[user?.orders.length - 1].created_at}
                  payment={user?.orders[user?.orders.length - 1].payment_method}
                  status={user?.orders[user?.orders.length - 1].status}
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

          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold text-xl lg:text-base w-full flex items-start justify-start">
                Seus últimos games comprados
              </span>
              <Link
                href="/minha-conta/meus-games"
                className="font-semibold text-lg min-w-fit text-indigo-600 hover:underline lg:text-base"
              >
                Ver todos
              </Link>
            </div>
            <div
              className={`w-full grid grid-cols-5 gap-x-8 gap-y-6 xs:grid-cols-3 sm:gap-x-1 sm:gap-y-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-y-6 xl:grid-cols-5 xxl:grid-cols-4`}
            >
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
