/* eslint-disable @next/next/no-img-element */
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'
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
    <div className="w-full h-full border-l border-neutral-800 pl-4 md:border-none md:pl-0">
      <title>{`Minhas avaliação: ${data.evaluation.product.name} - ${pageTitle}`}</title>

      <div className=" w-full h-full flex flex-col gap-10 text-white sm:gap-6 xxl:justify-center xxl:items-center animation-opacity transition-all">
        <div className="flex flex-col gap-1 items-start justify-center w-full pb-5 border-b border-neutral-800">
          <div className="flex gap-1 items-center justify-center w-full">
            <div className="flex flex-col w-full h-full text-base">
              <span className="font-extrabold text-2xl sm:text-lg flex gap-2 items-center justify-center w-fit">
                <ThumbsUp weight="bold" className="text-3xl" />
                {`Minha avaliação: ${data.evaluation.product.name}`}
              </span>

              <span className="flex text-neutral-500 text-base sm:text-sm sm:mt-1">
                {`Confira sua avaliação de ${data.evaluation.product.name} e edite-a se quiser`}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="flex w-full sm:justify-start items-center gap-4">
            <img
              src={data.evaluation.product.image}
              alt={data.evaluation.product.name}
              className="rounded-md w-40 h-60 sm:w-24 sm:h-24 object-cover"
            />
            <span className="text-xl tracking-wide font-light text-white">
              {data.evaluation.product.name}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="sm:text-sm font-semibold tracking-wide">
              Produto avaliado em:
            </span>
            <span className="text-sm tracking-wide font-light text-white">
              {convertFullDate(data.evaluation.created_at)}
            </span>
          </div>

          <div>
            <span className="sm:text-sm font-semibold tracking-wide">
              Sua nota para o produto:
            </span>

            <div className="flex items-center">
              {new Array(5).fill('').map((item, index) => (
                <Star
                  key={index}
                  weight={index < data.evaluation.stars ? 'fill' : 'duotone'}
                  className={`${
                    index < data.evaluation.stars
                      ? 'text-yellow-500'
                      : 'text-neutral-600'
                  } text-3xl`}
                />
              ))}
              <span className="ml-2 tracking-wide font-light text-white">
                {`( ${data.evaluation.stars} )`}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="sm:text-sm font-semibold tracking-wide">
              Sua descrição para o produto:
            </span>

            {data.evaluation.description ? (
              <div className="p-2 w-full min-w-fit bg-neutral-700 rounded-md border border-neutral-600 min-h-fit text-justify">
                <span className="text-sm tracking-wide font-light text-white">
                  {data.evaluation.description}
                </span>
              </div>
            ) : (
              <span className="font-light text-sm text-neutral-500">
                Você não forneceu nenhuma descrição para o produto.
              </span>
            )}
          </div>
          <Link href={`/minha-conta/minhas-avaliacoes/editar/${id}`}>
            <button
              type="button"
              className="w-64 sm:w-full px-4 py-2 text-base text-white font-light rounded-md shadow-md bg-indigo-700 hover:bg-indigo-700 hover:shadow-lg transition-all"
            >
              Editar avaliação
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
