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
    <div className="mt-6 sm:mt-2 grid grid-cols-2 gap-6 lg:flex lg:flex-col lg:gap-4 lg:w-full">
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
              className="w-full h-fit bg-zinc-950 border border-zinc-800 p-4 rounded-md shadow-md text-base text-zinc-300 flex flex-col gap-6 tracking-wide sm:p-5 lg:w-full lg:h-fit"
            >
              <div className="flex flex-col">
                <h1 className="font-bold">{name}</h1>
                <div className="flex">
                  {new Array(stars).fill('').map((_item, index) => (
                    <Star
                      key={index}
                      weight="fill"
                      className="text-yellow-600 text-xl"
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
