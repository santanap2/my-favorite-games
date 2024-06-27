/* eslint-disable @next/next/no-img-element */

import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'
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
    <div className="mt-24 xxl:mt-20  w-full h-full transition-all">
      <title>{`Avaliar produto - ${pageTitle}`}</title>

      <div className="w-full h-full flex flex-col gap-10 text-white sm:gap-6 xxl:justify-center xxl:items-center animation-opacity transition-all">
        <div className="flex flex-col gap-1 items-start justify-center w-full pb-5 border-b border-neutral-800">
          <div className="flex gap-1 items-center justify-center w-full">
            <div className="flex flex-col w-full h-full text-base">
              <span className="font-extrabold text-2xl sm:text-lg flex gap-2 items-center justify-center w-fit">
                <ThumbsUp weight="bold" className="text-3xl" />
                {`Avaliar produto - ${game.name}`}
              </span>

              <span className="flex text-neutral-500 text-base sm:text-sm sm:mt-1">
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
              <img
                src={game.image}
                alt={game.name}
                className="w-[300px] h-[400px] rounded-md shadow-md object-cover md:w-72 md:h-96 min-w-[300px] md:min-w-[288px]"
              />
            </Link>
            <EvaluationForm email={email} id={id} />
          </div>
        </div>
      </div>
    </div>
  )
}
