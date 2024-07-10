'use client'

import { sortBoughtProductsByName } from '@/helpers/orders'
import { IGameWithOrderInfo, IEvaluation } from '@/interfaces'
import React, { useContext } from 'react'
import EvaluationCard from '../product/EvaluationCard'
import GamesPlatformContext from '@/context/Context'

export default function AllEvaluations({
  evaluations,
  boughtGames,
}: {
  evaluations: IEvaluation[]
  boughtGames: IGameWithOrderInfo[]
}) {
  const { filters } = useContext(GamesPlatformContext)
  return (
    <>
      {boughtGames.length > 0 ? (
        filters.myEvaluations === 'alphabetical' ? (
          sortBoughtProductsByName(boughtGames).map(
            ({ id, image, name, orderInfo }: IGameWithOrderInfo) => {
              const alreadyEvaluated = evaluations.some(
                (item: IEvaluation) => item.productId === id,
              )

              let stars = 0
              let description = ''
              const productEvaluation: IEvaluation | undefined =
                evaluations.find((one: IEvaluation) => one.productId === id)
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
          boughtGames
            .map(({ id, image, name, orderInfo }: IGameWithOrderInfo) => {
              const alreadyEvaluated = evaluations.some(
                (item: IEvaluation) => item.productId === id,
              )

              let stars = 0
              let description = ''
              const productEvaluation: IEvaluation | undefined =
                evaluations.find((one: IEvaluation) => one.productId === id)
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
            })
            .reverse()
        )
      ) : (
        <div className="flex p-4 text-sm">
          Você não possui nenhuma avaliação.
        </div>
      )}
    </>
    // <>Evaluations</>
  )
}
