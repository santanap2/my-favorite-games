import React from 'react'
import { Star } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import { getGame } from '@/services/games.requests'
import { convertDate } from '@/helpers/date'
import { IEvaluation } from '@/interfaces'

export default function EvaluationsGame({ gameId }: { gameId: string }) {
  const { data: evaluationData } = useQuery({
    queryKey: ['product'],
    queryFn: async () => await getGame(gameId),
  })

  return (
    <div className="grid grid-cols-2 gap-6 pb-8 lg:flex lg:flex-col lg:gap-4 lg:w-full animation-opacity transition-all">
      {evaluationData?.data.data.evaluations.length > 0 ? (
        evaluationData?.data.data.evaluations.map(
          ({
            id,
            created_at: date,
            stars,
            description,
            user: { name },
          }: IEvaluation) => (
            <div
              key={id}
              className="w-full h-fit bg-slate-800 p-4 rounded shadow-md text-base text-zinc-300 flex flex-col gap-6 tracking-wide sm:p-5 lg:w-full lg:h-fit"
            >
              <div className="flex flex-col">
                <h1 className="font-bold">{name}</h1>
                <div className="flex">
                  {new Array(stars).fill('').map((_item, index) => (
                    <Star
                      key={index}
                      weight="duotone"
                      className="text-yellow-500 text-xl"
                    />
                  ))}
                </div>
                <span className="font-light text-xs">
                  {`Avaliado em ${convertDate(date)}`}
                </span>
              </div>
              <p className="text-sm font-light overflow-auto w-full text-justify">
                {description}
              </p>
            </div>
          ),
        )
      ) : (
        <span className="tracking-wide font-light text-base sm:text-sm">
          O produto ainda não possui avaliações.
        </span>
      )}
    </div>
  )
}
