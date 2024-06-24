import React from 'react'
import { Star } from '@phosphor-icons/react/dist/ssr'
import { convertDate } from '@/helpers/date'
import { IEvaluation } from '@/interfaces'

export default function EvaluationsGame({
  evaluations,
}: {
  evaluations: IEvaluation[]
}) {
  return (
    <div className="grid grid-cols-2 gap-6 pb-8 lg:flex lg:flex-col lg:gap-4 lg:w-full animation-opacity transition-all">
      {evaluations.length > 0 ? (
        evaluations.map(
          ({
            id,
            created_at: date,
            stars,
            description,
            user: { name },
          }: IEvaluation) => (
            <div
              key={id}
              className="w-full h-fit bg-neutral-800 p-4 rounded-md shadow-md text-base text-neutral-300 flex flex-col gap-6 tracking-wide sm:p-5 lg:w-full lg:h-fit"
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
        <span className="text-sm">O produto ainda não possui avaliações.</span>
      )}
    </div>
  )
}
