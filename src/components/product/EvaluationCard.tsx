/* eslint-disable @next/next/no-img-element */
import { convertDate } from '@/helpers/date'
import { IEvaluationCard } from '@/interfaces'
import { CheckCircle, Star } from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function EvaluationCard({
  id,
  name,
  image,
  orderInfo,
  stars,
  alreadyEvaluated,
  productEvaluation,
}: IEvaluationCard) {
  const router = useRouter()

  return (
    <div className="flex items-center justify-between gap-6 w-full max-w-3xl h-36 bg-neutral-950 border border-neutral-900 p-2 rounded-md shadow-md">
      <img
        src={image}
        alt={name}
        className="w-24 h-32 min-w-[96px] max-w-[96px] min-h-[128px] max-h-[128px] rounded-md shadow-md object-cover"
      />

      <div className="flex flex-col w-full h-32 max-h-32 items-start justify-between gap-1">
        <div className="flex items-center justify-between w-full">
          <span className="text-base font-bold sm:text-lg sm:font-semibold w-full">
            {name.length > 45 ? `${name.slice(0, 45)}...` : name}
          </span>
          {alreadyEvaluated && (
            <div className="flex items-center justify-end gap-1 w-full lg:w-fit">
              <span className="text-sm font-semibold lg:hidden">
                Produto avaliado
              </span>
              <CheckCircle weight="fill" className="text-xl" />
            </div>
          )}
        </div>

        <div className="flex w-full justify-between items-end">
          <div className="w-full h-full flex-col xs:w-fit">
            <div className="flex flex-col items-start justify-between h-full w-full gap-1">
              <div className="flex flex-col w-full ">
                <span className="text-sm">
                  <span className="font-semibold">{`Pedido: `}</span>
                  <span className="text-light">{`#${orderInfo.id}`}</span>
                </span>
                <span className="text-sm">
                  <span className="font-semibold">{`Data: `}</span>
                  <span>{convertDate(orderInfo.date)}</span>
                </span>
              </div>

              <div className="h-full w-full">
                <div className="flex w-full">
                  {new Array(stars).fill('').map((_item, index) => (
                    <Star
                      key={index}
                      weight="fill"
                      className="text-yellow-500 text-xl"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            className="flex xs:w-fit xs:text-xs w-48 justify-center rounded-md bg-neutral-200 px-3 py-1 sm:px-1 text-sm font-semibold leading-6 text-neutral-800 shadow-sm  transition-all"
            onClick={() => {
              alreadyEvaluated
                ? router.push(
                    `/minha-conta/minhas-avaliacoes/${productEvaluation?.id}`,
                  )
                : router.push(
                    `/minha-conta/minhas-avaliacoes/avaliar-produto/${id}`,
                  )
            }}
          >
            {alreadyEvaluated ? 'Ver avaliação' : 'Avaliar produto'}
          </button>
        </div>
      </div>
    </div>
  )
}
