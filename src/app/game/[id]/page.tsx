/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import { pageTitle, portionPrice, priceToBRL } from '@/helpers'
import { IGame, IGameIDParams } from '@/interfaces'
import { getGame, getGamesFiltered } from '@/services/games.requests'
import { CaretRight, ShareNetwork } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'
import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'
import BuyNowButton from '@/components/product/BuyNowButton'
import GameDetails from '@/components/product/GameDetails'
import AddToFavoritesButton from '@/components/product/AddToFavoritesButton'
import AddToCartForm from '@/components/product/AddToCartForm'
import { getAllFavorites } from '@/services/favorites.requests'
import WhatsAppShare from '@/components/share/WhatsAppShare'
import XShare from '@/components/share/XShare'
import FacebookShare from '@/components/share/FacebookShare'
import ClipboardShare from '@/components/share/ClipboardShare'
import GameEvaluations from '@/components/product/GameEvaluations'
import ColorThief from '@/components/ColorThief'

export default async function GameId({ params: { id } }: IGameIDParams) {
  const session = await getServerSession(nextAuthOptions)
  const email = session?.user?.email as string

  const {
    data: { game },
  } = await getGame(id)

  const {
    data: { games },
  } = await getGamesFiltered(`${game.category.name}=true`)

  const {
    data: { favorites },
  } = await getAllFavorites(email)

  const shareText = `Confira ${game.name} em ${pageTitle}: ${process.env.NEXTAUTH_URL}/game/${id}`

  return (
    <div className="mt-24 xxl:mt-20 w-full h-full transition-all text-stone-300">
      <title>{`${game.name} - ${pageTitle}`}</title>

      <div className="w-full h-full animation-opacity">
        <div className="flex flex-col gap-1 items-start justify-center w-full  pb-5 border-b border-stone-800">
          <div className="flex gap-1 items-center justify-center w-full">
            <div className="flex flex-col w-full h-full text-base">
              <span className="font-extrabold text-2xl sm:text-lg flex gap-2 items-center justify-center w-fit">
                {game.name}
              </span>

              <div className="flex flex-wrap items-center justify-start text-sm sm:text-sm sm:mt-1 gap-1">
                <Link
                  href="/"
                  className=" hover:text-stone-300 hover:underline min-w-fit"
                >
                  Todos os jogos
                </Link>
                <CaretRight weight="light" className="text-base" />
                <Link
                  href={`/home?${game.category.name}=true`}
                  className=" hover:text-stone-300 hover:underline min-w-fit"
                >
                  {game.category.namePt}
                </Link>

                <CaretRight weight="light" className=" text-base" />

                <Link
                  href={`/game/${id}`}
                  className=" hover:text-stone-300 hover:underline min-w-fit"
                >
                  {game.name}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-row 3xl:flex-col gap-10 items-start justify-between mt-10">
          <div className="w-full flex gap-10 sm:mt-2 sm:w-full sm:justify-start sm:items-start md:flex-col sm:gap-4 max-w-3xl">
            <div className="relative w-[300px] h-[400px] min-w-[300px] min-h-[400px]">
              <img
                src={game.image}
                alt={game.name}
                className="w-[300px] h-[400px] rounded-md shadow-md object-cover md:w-72 md:h-96"
              />
              <ColorThief imageUrl={game.image} />
            </div>

            <div className="flex flex-col justify-start items-start w-full h-full text-stone-300 gap-2">
              <span className="text-sm">Vendido por: My Fav Games™</span>
              <div className="text-4xl font-black sm:text-3xl">
                <span>{'R$ '}</span>
                <span>{priceToBRL(game.price * 0.9)}</span>
              </div>
              <div className="flex flex-col mt-6 text-stone-300 text-sm sm:mt-0 sm:text-xs gap-1">
                <span>À vista no PIX com 10% de desconto</span>
                <span>{`Ou em até 3x de R$${portionPrice(
                  game.price,
                  3,
                )} sem juros no cartão de crédito`}</span>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-4 mt-20 sm:mt-6 sm:w-full sm:justify-center sm:items-center sm:gap-1">
                  <BuyNowButton email={email} gameId={id} session={session} />
                  <AddToCartForm gameId={id} email={email} session={session} />
                  <AddToFavoritesButton
                    alreadyFavorited={favorites?.products.some(
                      (product: IGame) => product.id === Number(id),
                    )}
                    gameId={id}
                    email={email}
                    session={session}
                  />
                </div>
                <div className="flex items-center justify-end w-full mt-4 gap-2">
                  <span className="mr-4 text-sm font-bold flex items-center space-x-2">
                    <ShareNetwork size={24} weight="fill" />
                    <span>Compartilhe:</span>
                  </span>
                  <WhatsAppShare shareText={shareText} />
                  <XShare shareText={shareText} />
                  <FacebookShare />
                  <ClipboardShare />
                </div>
              </div>
            </div>
          </div>

          <GameDetails
            id={id}
            name={game.name}
            description={game.description}
            similarGames={games}
          />
        </div>

        <GameEvaluations evaluations={game.evaluations} />
      </div>
    </div>
  )
}
