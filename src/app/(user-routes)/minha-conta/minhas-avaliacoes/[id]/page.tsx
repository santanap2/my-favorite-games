/* eslint-disable @next/next/no-img-element */
'use client'

import LateralMyAccount from '@/components/LateralMyAccount'
import EvaluationIdSkeleton from '@/components/Skeletons/EvaluationIdSkeleton'

import { pageTitle } from '@/helpers'
import { convertFullDate } from '@/helpers/date'
import { IGameIDParams } from '@/interfaces'
import { getUserByToken } from '@/services'
import { getOneUserEvaluation } from '@/services/evaluations'
import { Star, ThumbsUp } from '@phosphor-icons/react/dist/ssr'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function MinhasAvaliacoesId({ params: { id } }: IGameIDParams) {
  const { error: userError } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => await getUserByToken(),
    retry: false,
  })

  const {
    data: userEvaluationsData,
    refetch: userEvaluationRefetch,
    isLoading: userEvaluationIsLoading,
  } = useQuery({
    queryKey: ['userEvaluation'],
    queryFn: async () => await getOneUserEvaluation(id),
    retry: false,
  })

  useEffect(() => {
    userEvaluationRefetch()
  }, [userEvaluationRefetch])

  return (
    <>
      {userError && null}
      {!userError &&
        (userEvaluationIsLoading ? (
          <EvaluationIdSkeleton />
        ) : (
          <div className="mt-24 xxl:mt-20 w-full h-full">
            <title>{`Minhas avaliações - ${pageTitle}`}</title>
            <LateralMyAccount />
            <div className=" w-full h-full flex flex-col gap-10 text-neutral-100 sm:gap-6 xxl:justify-center xxl:items-center animation-opacity transition-all">
              <div className="flex gap-1 w-full items-center justify-start relative">
                <ThumbsUp
                  weight="fill"
                  className="text-indigo-600 sm:text-3xl text-5xl"
                />
                <h1 className="font-regular text-xl font-semibold">
                  Avaliação de produto
                </h1>
              </div>

              <div className="w-full flex flex-col gap-4">
                <div className="flex w-full sm:justify-start items-center gap-4">
                  <img
                    src={userEvaluationsData?.data.data?.product.image}
                    alt={userEvaluationsData?.data.data?.product.name}
                    className="rounded w-40 h-60 sm:w-24 sm:h-24 object-cover"
                  />
                  <span className="text-xl tracking-wide font-light text-neutral-100">
                    {userEvaluationsData?.data.data.product.name}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="sm:text-sm font-semibold tracking-wide">
                    Produto avaliado em:
                  </span>
                  <span className="text-sm tracking-wide font-light text-neutral-200">
                    {convertFullDate(userEvaluationsData?.data.data.created_at)}
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
                        weight={
                          index < userEvaluationsData?.data.data.stars
                            ? 'fill'
                            : 'duotone'
                        }
                        className={`${
                          index < userEvaluationsData?.data.data.stars
                            ? 'text-yellow-500'
                            : 'text-neutral-600'
                        } text-3xl`}
                      />
                    ))}
                    <span className="ml-2 tracking-wide font-light text-neutral-200">
                      {`( ${userEvaluationsData?.data.data.stars} )`}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="sm:text-sm font-semibold tracking-wide">
                    Sua descrição para o produto:
                  </span>

                  {userEvaluationsData?.data.data.description ? (
                    <div className="p-2 w-full min-w-fit bg-neutral-700 rounded border border-neutral-600 min-h-fit text-justify">
                      <span className="text-sm tracking-wide font-light text-neutral-200">
                        {userEvaluationsData?.data.data.description}
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
                    className="w-64 sm:w-full px-4 py-2 text-base text-neutral-100 font-light rounded shadow-md bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg transition-all"
                  >
                    Editar avaliação
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}
