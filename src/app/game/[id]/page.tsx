/* eslint-disable @next/next/no-img-element */

import { pageTitle, portionPrice, priceToBRL } from '@/helpers'
import { IGame, IGameIDParams } from '@/interfaces'
import { getGame } from '@/services/games.requests'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'
import BuyNowButton from '@/components/product/BuyNowButton'
import GameDetails from '@/components/product/GameDetails'
import AddToFavoritesButton from '@/components/product/AddToFavoritesButton'
import AddToCartForm from '@/components/product/AddToCartForm'
import { getAllFavorites } from '@/services/favorites.requests'

export default async function GameId({ params: { id } }: IGameIDParams) {
  const session = await getServerSession(nextAuthOptions)
  const email = session?.user?.email as string

  const {
    data: { game },
  } = await getGame(id)

  const {
    data: { favorites },
  } = await getAllFavorites(email)

  return (
    <div className="mt-24 xxl:mt-20  w-full h-full transition-all">
      <title>{`${game.name} - ${pageTitle}`}</title>

      <div className="w-full h-full animation-opacity">
        <div className="flex flex-wrap items-center gap-1 w-fit text-xs sm:w-full max-w-full">
          <Link
            href="/"
            className="text-neutral-300 hover:text-white hover:underline min-w-fit"
          >
            Todos os jogos
          </Link>
          <CaretRight weight="light" className="text-neutral-300 text-base" />
          <Link
            href={`/home?${game.category.name}=true`}
            className="text-neutral-300 hover:text-white hover:underline min-w-fit"
          >
            {game.category.namePt}
          </Link>

          <CaretRight weight="light" className="text-neutral-300 text-base" />

          <Link
            href={`/game/${id}`}
            className="text-neutral-300 hover:text-white hover:underline min-w-fit"
          >
            {game.name}
          </Link>
        </div>
        <h1 className="mt-4 font-bold text-xl text-white sm:mt-2">
          {game.name}
        </h1>

        <div className="flex gap-10 mt-10 w-4/5 sm:mt-2 sm:w-full sm:justify-center sm:items-center sm:flex-col sm:gap-4">
          <img
            src={game.image}
            alt={game.name}
            className="w-[300px] h-[400px] rounded-md shadow-md object-cover md:w-72 md:h-96"
          />
          <div className="flex flex-col justify-start items-start w-full h-full text-neutral-300 gap-2">
            <span className="text-sm">Vendido por: My Fav Games™</span>
            <div className="text-indigo-700 text-4xl font-black sm:text-3xl">
              <span>{'R$ '}</span>
              <span>{priceToBRL(game.price * 0.9)}</span>
            </div>
            <div className="flex flex-col mt-6 text-neutral-300 text-sm sm:mt-0 sm:text-xs gap-1">
              <span>À vista no PIX com 10% de desconto</span>
              <span>{`Ou em até 3x de R$${portionPrice(
                game.price,
                3,
              )} sem juros no cartão de crédito`}</span>
            </div>
            <div className="flex gap-4 mt-20 sm:mt-6 sm:w-full sm:justify-center sm:items-center sm:gap-1">
              <BuyNowButton email={email} gameId={id} />
              <AddToCartForm gameId={id} email={email} />
              <AddToFavoritesButton
                alreadyFavorited={favorites?.products.some(
                  (product: IGame) => product.id === Number(id),
                )}
                gameId={id}
                email={email}
              />
            </div>
          </div>
        </div>

        <GameDetails
          id={id}
          name={game.name}
          description={game.description}
          evaluations={game.evaluations}
        />
      </div>
    </div>
  )
}
