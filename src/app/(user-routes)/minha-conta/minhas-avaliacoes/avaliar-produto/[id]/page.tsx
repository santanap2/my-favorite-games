/* eslint-disable @next/next/no-img-element */

import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'
import ColorThief from '@/components/ColorThief'
import EvaluationForm from '@/components/general/EvaluationForm'
import { pageTitle } from '@/helpers'
import { IGameIDParams } from '@/interfaces'
import { getGame } from '@/services/games.requests'
import { ThumbsUp } from '@phosphor-icons/react/dist/ssr'
import { getServerSession } from 'next-auth'
import Link from 'next/link'

import React from 'react'

export default async function AvaliarProduto({
  params: { id },
}: IGameIDParams) {
  const session = await getServerSession(nextAuthOptions)
  const email = session?.user?.email as string

  const {
    data: { game },
  } = await getGame(id)

  return (
    <div className="w-full h-full border-l border-stone-800 pl-4 md:border-none md:pl-0 text-stone-300">
      <title>{`Avaliar produto - ${pageTitle}`}</title>

      <div className="w-full h-full flex flex-col gap-10 sm:gap-6 xxl:justify-center xxl:items-center animation-opacity transition-all">
        <div className="flex flex-col gap-1 items-start justify-center w-full pb-5 border-b border-stone-800">
          <div className="flex gap-1 items-center justify-center w-full">
            <div className="flex flex-col w-full h-full text-base">
              <span className="font-extrabold text-2xl sm:text-lg flex gap-2 items-center justify-center w-fit">
                <ThumbsUp weight="bold" className="text-3xl" />
                {`Avaliar produto - ${game.name}`}
              </span>

              <span className="flex text-base sm:text-sm sm:mt-1">
                Avalie experiência de compra e também sua experiência com o jogo
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex  gap-6">
          <div className="flex w-full lg:flex-col items-center justify-start gap-10">
            <Link
              href={`/game/${game.id}`}
              className="text-xl tracking-wide font-light"
            >
              <div className="relative w-[300px] h-[400px] min-w-[300px] min-h-[400px]">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-[300px] h-[400px] rounded-md shadow-md object-cover md:w-72 md:h-96 min-w-[300px] md:min-w-[288px]"
                />
                <ColorThief imageUrl={game.image} />
              </div>
            </Link>
            <EvaluationForm email={email} id={id} />
          </div>
        </div>
      </div>
    </div>
  )
}
