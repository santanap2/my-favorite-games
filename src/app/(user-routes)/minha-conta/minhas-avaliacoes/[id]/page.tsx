/* eslint-disable @next/next/no-img-element */
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'
import ColorThief from '@/components/product/ColorThief'
import { pageTitle } from '@/helpers'
import { convertFullDate } from '@/helpers/date'
import { IGameIDParams } from '@/interfaces'
import { getOneUserEvaluation } from '@/services/evaluations'
import { Star, ThumbsUp } from '@phosphor-icons/react/dist/ssr'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'

export default async function MinhasAvaliacoesId({
  params: { id },
}: IGameIDParams) {
  const session = await getServerSession(nextAuthOptions)
  const email = session?.user?.email as string

  const { data } = await getOneUserEvaluation({ email, evaluationId: id })

  return (
    <div className="w-full h-full border-l border-zinc-800 pl-4 md:border-none md:pl-0 text-zinc-300">
      <title>{`Minha avaliação: ${data.evaluation.product.name} - ${pageTitle}`}</title>

      <div className="w-full h-full flex flex-col gap-10 sm:gap-6 xxl:justify-center xxl:items-center animation-opacity transition-all">
        <div className="flex flex-col gap-1 items-start justify-center w-full pb-5 border-b border-zinc-800">
          <div className="flex gap-1 items-center justify-center w-full">
            <div className="flex flex-col w-full h-full text-base">
              <span className="font-extrabold text-2xl sm:text-lg flex gap-2 items-center justify-center w-fit">
                <ThumbsUp weight="bold" className="text-3xl" />
                {`Minha avaliação: ${data.evaluation.product.name}`}
              </span>

              <span className="flex text-base sm:text-sm sm:mt-1">
                {`Confira sua avaliação de ${data.evaluation.product.name} e edite-a se quiser`}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex gap-6">
          <div className="flex w-full lg:flex-col justify-start gap-10">
            <Link
              href={`/game/${data.evaluation.product.id}`}
              className="text-xl tracking-wide font-light"
            >
              <div className="relative w-[300px] h-[400px] min-w-[300px] min-h-[400px]">
                <img
                  src={data.evaluation.product.image}
                  alt={data.evaluation.product.name}
                  className="w-[300px] h-[400px] rounded-md shadow-md object-cover md:w-72 md:h-96 min-w-[300px] md:min-w-[288px]"
                />
                <ColorThief imageUrl={data.evaluation.product.image} />
              </div>
            </Link>

            <div className="w-full h-full px-2 flex flex-col justify-between items-start gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm tracking-wide font-semibold">
                  Produto avaliado em:
                </span>
                <span className="text-sm tracking-wide">
                  {convertFullDate(data.evaluation.created_at)}
                </span>
              </div>

              <div>
                <span className="text-sm tracking-wide font-semibold">
                  Sua nota para o produto:
                </span>

                <div className="flex items-center">
                  {new Array(5).fill('').map((_, index) => (
                    <Star
                      key={index}
                      weight={
                        index < data.evaluation.stars ? 'fill' : 'duotone'
                      }
                      className={`${
                        index < data.evaluation.stars
                          ? 'text-yellow-500'
                          : 'text-zinc-600'
                      } text-2xl`}
                    />
                  ))}
                  <span className="ml-4">{`( ${data.evaluation.stars} )`}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <span className="text-sm tracking-wide font-semibold">
                  Sua descrição para o produto:
                </span>

                {data.evaluation.description ? (
                  <div className="border border-zinc-800 rounded-md p-2 w-full resize-none h-40 sm:h-80 md:h-60 focus:outline-none focus:shadow-md bg-zinc-950 placeholder:text-zinc-500">
                    <span className="text-sm tracking-wide">
                      {data.evaluation.description}
                    </span>
                  </div>
                ) : (
                  <div className="border border-zinc-800 rounded-md p-2 w-full resize-none h-40 sm:h-80 md:h-60 focus:outline-none focus:shadow-md bg-zinc-950">
                    <span className="text-sm tracking-wide text-red-800">
                      Você não forneceu nenhuma descrição para o produto.
                    </span>
                  </div>
                )}
              </div>
              <Link href={`/minha-conta/minhas-avaliacoes/editar/${id}`}>
                <button
                  type="button"
                  className="flex justify-center rounded-md bg-zinc-300 text-zinc-800 px-12 py-1.5 text-sm font-semibold leading-6 shadow-sm  transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-40"
                >
                  Editar avaliação
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
