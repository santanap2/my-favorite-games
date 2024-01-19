/* eslint-disable @next/next/no-img-element */
'use client'

import EvaluationCard from '@/components/EvaluationCard'
import LateralMyAccount from '@/components/LateralMyAccount'
import EvaluationCardSkeleton from '@/components/Skeletons/EvaluationCardSkeleton'
import { pageTitle } from '@/helpers'
import { sortBoughtProductsByName } from '@/helpers/orders'
import { IEvaluation, IGameWithOrderInfo } from '@/interfaces'
import { getUserByToken } from '@/services'
import { getUserEvaluations } from '@/services/evaluations'
import { getBoughtProducts } from '@/services/orders.requests'
import { SmileySad, ThumbsUp } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { redirect } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function MinhasAvaliacoes() {
  const [filter, setFilter] = useState('date')

  const { isFetched: userIsFetched, error: userError } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => await getUserByToken(),
    retry: false,
  })

  if (
    userIsFetched &&
    userError &&
    userError.message === 'Request failed with status code 401'
  )
    redirect('/login')

  const { data: userEvaluationsData, refetch: userEvaluationsRefetch } =
    useQuery({
      queryKey: ['userEvaluations'],
      queryFn: async () => await getUserEvaluations(),
      retry: false,
    })

  const {
    data: boughtProductsData,
    isLoading: boughtProductsIsLoading,
    refetch: boughtProductsRefetch,
  } = useQuery({
    queryKey: ['boughtProducts'],
    queryFn: async () => await getBoughtProducts(),
    retry: false,
  })

  useEffect(() => {
    boughtProductsRefetch()
    userEvaluationsRefetch()
  }, [boughtProductsRefetch, userEvaluationsRefetch])

  return (
    <>
      {userError && null}
      {!userError && (
        <div className="mt-24 xxl:mt-20 w-full h-full animation-opacity transition-all">
          <title>{`Minhas avaliações - ${pageTitle}`}</title>
          <LateralMyAccount />

          <div className=" w-full h-full flex flex-col gap-10 text-zinc-800 sm:gap-6 xxl:justify-center xxl:items-center animation-opacity transition-all">
            <div className="flex gap-1 w-full items-center justify-start">
              <ThumbsUp
                weight="fill"
                className="text-blue-500 sm:text-3xl text-5xl"
              />
              <h1 className="font-regular text-xl font-semibold">
                Minhas avaliações
              </h1>
            </div>

            <div className="flex flex-col gap-6 w-full">
              <form className="w-fit">
                <label
                  htmlFor="sortBy"
                  className="flex gap-3 items-center justify-center"
                >
                  <span className="text-sm tracking-wide font-semibold">
                    Organizar por:
                  </span>
                  <select
                    name=""
                    id="sortBy"
                    className="h-10 rounded px-3 focus:outline-none text-zinc-700 hover:shadow-lg w-60 text-left text-sm font-light bg-white shadow-md"
                    onChange={({ target: { value } }) => setFilter(value)}
                  >
                    <option value="date">Comprados recentemente</option>
                    <option value="alphabetical">Ordem alfabética</option>
                  </select>
                </label>
              </form>

              <div className="w-full flex flex-col gap-4">
                {boughtProductsIsLoading ? (
                  <>
                    <EvaluationCardSkeleton />
                    <EvaluationCardSkeleton />
                    <EvaluationCardSkeleton />
                  </>
                ) : boughtProductsData?.data.data.length > 0 ? (
                  filter === 'alphabetical' ? (
                    sortBoughtProductsByName(boughtProductsData?.data.data).map(
                      ({ id, image, name, orderInfo }: IGameWithOrderInfo) => {
                        const alreadyEvaluated =
                          userEvaluationsData?.data.data.some(
                            (item: IEvaluation) => item.productId === id,
                          )

                        let stars = 0
                        let description = ''
                        const productEvaluation: IEvaluation | undefined =
                          userEvaluationsData?.data.data.find(
                            (one: IEvaluation) => one.productId === id,
                          )
                        if (productEvaluation !== undefined) {
                          stars = productEvaluation.stars
                          description = productEvaluation.description
                        }

                        return (
                          <EvaluationCard
                            key={id}
                            id={id}
                            alreadyEvaluated={alreadyEvaluated}
                            description={description}
                            image={image}
                            name={name}
                            orderInfo={orderInfo}
                            productEvaluation={productEvaluation}
                            stars={stars}
                          />
                        )
                      },
                    )
                  ) : (
                    boughtProductsData?.data.data
                      .map(
                        ({
                          id,
                          image,
                          name,
                          orderInfo,
                        }: IGameWithOrderInfo) => {
                          const alreadyEvaluated =
                            userEvaluationsData?.data.data.some(
                              (item: IEvaluation) => item.productId === id,
                            )

                          let stars = 0
                          let description = ''
                          const productEvaluation: IEvaluation | undefined =
                            userEvaluationsData?.data.data.find(
                              (one: IEvaluation) => one.productId === id,
                            )
                          if (productEvaluation !== undefined) {
                            stars = productEvaluation.stars
                            description = productEvaluation.description
                          }

                          return (
                            <EvaluationCard
                              key={id}
                              id={id}
                              alreadyEvaluated={alreadyEvaluated}
                              description={description}
                              image={image}
                              name={name}
                              orderInfo={orderInfo}
                              productEvaluation={productEvaluation}
                              stars={stars}
                            />
                          )
                        },
                      )
                      .reverse()
                  )
                ) : (
                  <div className="w-fit sm:w-full flex flex-col gap-1 items-center justify-center mt-10 sm:mt-4 sm:text-center">
                    <SmileySad
                      weight="light"
                      className="text-blue-500 text-5xl"
                    />
                    <span className="text-base font-light">
                      Você não possui nenhum game comprado no momento.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
