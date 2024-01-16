/* eslint-disable @next/next/no-img-element */
'use client'

import LateralMyAccount from '@/components/LateralMyAccount'
import EvaluationIdSkeleton from '@/components/Skeletons/EvaluationIdSkeleton'

import GamesPlatformContext from '@/context/Context'
import { pageTitle } from '@/helpers'
import { convertFullDate } from '@/helpers/date'
import { IGameIDParams } from '@/interfaces'
import { getOneUserEvaluation } from '@/services/evaluations'
import { Star, ThumbsUp } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect } from 'react'

export default function MinhasAvaliacoesId({ params: { id } }: IGameIDParams) {
  const { screenSize } = useContext(GamesPlatformContext)

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
      {userEvaluationIsLoading ? (
        <EvaluationIdSkeleton />
      ) : (
        <div className="mt-24 xxl:mt-20 w-full h-full">
          <title>{`Minhas avaliações - ${pageTitle}`}</title>
          <LateralMyAccount />
          <div className=" w-full h-full flex flex-col gap-10 text-zinc-800 sm:gap-6 xxl:justify-center xxl:items-center">
            <div className="flex gap-1 w-full items-center justify-start relative">
              <ThumbsUp
                weight="fill"
                size={screenSize < 600 ? 36 : 56}
                className="text-slate-500"
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
                  className="rounded w-40 h-40 sm:w-24 sm:h-24 object-cover"
                />
                <span className="text-xl tracking-wide font-light text-zinc-600">
                  {userEvaluationsData?.data.data.product.name}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="sm:text-sm font-semibold tracking-wide">
                  Produto avaliado em:
                </span>
                <span className="text-sm tracking-wide font-light text-zinc-600">
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
                      size={28}
                      className={`${
                        index < userEvaluationsData?.data.data.stars
                          ? 'text-yellow-400'
                          : 'text-zinc-200'
                      }`}
                    />
                  ))}
                  <span className="ml-2 tracking-wide font-light text-zinc-400">{`(${userEvaluationsData?.data.data.stars})`}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="sm:text-sm font-semibold tracking-wide">
                  Sua descrição para o produto:
                </span>

                <div className="px-2 py-4 w-full min-w-fit bg-white rounded border border-zinc-200 min-h-fit text-justify">
                  <span className="text-sm tracking-wide font-light text-zinc-600">
                    {userEvaluationsData?.data.data.description}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="w-64 sm:w-full px-4 py-2 text-base text-white font-light rounded shadow-md bg-slate-500 hover:bg-slate-600 hover:shadow-lg transition-all"
              >
                Editar avaliação
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
