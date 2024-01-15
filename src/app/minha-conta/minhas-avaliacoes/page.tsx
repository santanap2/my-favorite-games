/* eslint-disable @next/next/no-img-element */
'use client'

import LateralMyAccount from '@/components/LateralMyAccount'
import GamesPlatformContext from '@/context/Context'
import { pageTitle } from '@/helpers'
import { convertDate } from '@/helpers/date'
import { IEvaluation, IGameWithOrderInfo } from '@/interfaces'
import { getUserByToken } from '@/services'
import { getUserEvaluations } from '@/services/evaluations'
import { getBoughtProducts } from '@/services/orders.requests'
import { ThumbsUp } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { redirect } from 'next/navigation'
import React, { useContext, useState } from 'react'

export default function MinhasAvaliacoes() {
  const { screenSize } = useContext(GamesPlatformContext)
  const [, setFilter] = useState('alphabetical')

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

  const {
    data: userEvaluationsData,
    // refetch: userEvaluationsRefetch,
    // isLoading: userEvaluationsIsLoading,
    // isFetched: userEvaluationsIsFetched,
  } = useQuery({
    queryKey: ['userEvaluations'],
    queryFn: async () => await getUserEvaluations(),
  })

  const {
    data: boughtProductsData,
    // refetch: boughtProductsRefetch,
    // isLoading: boughtProductsIsLoading,
    // isFetched: boughtProductsIsFetched,
  } = useQuery({
    queryKey: ['boughtProducts'],
    queryFn: async () => await getBoughtProducts(),
  })

  return (
    <>
      {userError && null}
      {!userError && (
        <div className="mt-24 xxl:mt-20 w-full h-full">
          <title>{`Minhas avaliações - ${pageTitle}`}</title>
          <LateralMyAccount />

          <div className=" w-full h-full flex flex-col gap-10 text-zinc-800 sm:gap-6 xxl:justify-center xxl:items-center">
            <div className="flex gap-1 w-full items-center justify-start">
              <ThumbsUp
                weight="fill"
                size={screenSize < 600 ? 36 : 56}
                className="text-slate-500"
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
                    <option value="alphabetical">Ordem alfabética</option>
                    <option value="date">Comprados recentemente</option>
                  </select>
                </label>
              </form>

              <div className="w-full flex flex-col gap-4">
                {boughtProductsData?.data.data.map(
                  ({ id, image, name, orderInfo }: IGameWithOrderInfo) => {
                    const alreadyEvaluated =
                      userEvaluationsData?.data.data.some(
                        (item: IEvaluation) => item.productId === id,
                      )

                    return (
                      <div
                        key={id}
                        className="flex items-center justify-between gap-2 w-full h-40 bg-white px-2 rounded shadow-md"
                      >
                        <img
                          src={image}
                          alt={name}
                          className="w-24 h-36 rounded shadow-md object-cover"
                        />
                        <div className="flex flex-col w-full h-36 items-start justify-between">
                          <div className="flex flex-col gap-1">
                            <span className="text-lg font-semibold">
                              {name}
                            </span>
                            <span className="sm:text-sm">
                              <span className="font-semibold">{`Pedido: `}</span>
                              <span className="text-light">{`#${orderInfo.id}`}</span>
                            </span>
                            <span className="sm:text-sm">
                              <span className="font-semibold">{`Data: `}</span>
                              <span>{convertDate(orderInfo.date)}</span>
                            </span>
                          </div>

                          <button className="sm:w-full bg-slate-500 rounded px-2 py-2 text-white font-light text-base">
                            {alreadyEvaluated
                              ? 'Ver avaliação'
                              : 'Avaliar produto'}
                          </button>
                        </div>
                      </div>
                    )
                  },
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
