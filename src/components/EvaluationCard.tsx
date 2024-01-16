/* eslint-disable @next/next/no-img-element */
import GamesPlatformContext from '@/context/Context'
import { convertDate } from '@/helpers/date'
import { IEvaluationCard } from '@/interfaces'
import { Star } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

export default function EvaluationCard({
  id,
  name,
  image,
  orderInfo,
  stars,
  description,
  alreadyEvaluated,
  productEvaluation,
}: IEvaluationCard) {
  const { screenSize } = useContext(GamesPlatformContext)
  const router = useRouter()

  const calcNameSlice = (name: string) => {
    const small = name.length > 45 ? `${name.slice(0, 45)}...` : name
    const extraSmall = name.length > 40 ? `${name.slice(0, 40)}...` : name

    if (screenSize < 370) return extraSmall
    if (screenSize < 600) return small
    return name
  }

  const calcDescriptionSlice = (description: string) => {
    const mid =
      description.length > 100 ? `${description.slice(0, 100)}...` : description

    const large =
      description.length > 185 ? `${description.slice(0, 185)}...` : description

    const extraLarge =
      description.length > 280 ? `${description.slice(0, 280)}...` : description

    const defaultSize =
      description.length > 330 ? `${description.slice(0, 330)}...` : description

    if (screenSize < 800) return mid
    if (screenSize < 1000) return large
    if (screenSize < 1280) return extraLarge

    return defaultSize
  }

  return (
    <div className="flex items-center justify-between gap-6 sm:gap-2 w-full h-48 bg-white px-2 rounded shadow-md">
      <img
        src={image}
        alt={name}
        className="w-28 h-44 rounded shadow-md object-cover"
      />
      <div className="flex flex-col w-full h-44 items-start justify-start gap-1">
        <span className="text-xl font-bold sm:text-lg sm:font-semibold w-full">
          {calcNameSlice(name)}
        </span>

        <div className="flex w-full h-full justify-between items-end">
          <div className="w-full h-full flex-col">
            <div className="flex flex-col items-start justify-between h-full w-full gap-5">
              <div className="flex flex-col gap-1 w-full">
                <span className="sm:text-sm">
                  <span className="font-semibold">{`Pedido: `}</span>
                  <span className="text-light">{`#${orderInfo.id}`}</span>
                </span>
                <span className="sm:text-sm">
                  <span className="font-semibold">{`Data: `}</span>
                  <span>{convertDate(orderInfo.date)}</span>
                </span>
              </div>

              <div className="h-full">
                <div className="flex w-full">
                  {new Array(stars).fill('').map((_item, index) => (
                    <Star
                      key={index}
                      size={20}
                      weight="fill"
                      className="text-yellow-400"
                    />
                  ))}
                </div>

                <div className="text-sm font-light sm:hidden">
                  {calcDescriptionSlice(description)}
                </div>
              </div>
            </div>
          </div>

          <button
            className="w-64 sm:w-full bg-slate-500 rounded px-2 py-2 text-white font-light text-base sm:text-sm shadow-md hover:bg-slate-600 transition-all"
            onClick={() => {
              alreadyEvaluated
                ? router.push(`/minhas-avaliações/${productEvaluation?.id}`)
                : router.push(`/avaliar-produto/${id}`)
            }}
          >
            {alreadyEvaluated ? 'Ver avaliação' : 'Avaliar produto'}
          </button>
        </div>
      </div>
    </div>
  )
}
