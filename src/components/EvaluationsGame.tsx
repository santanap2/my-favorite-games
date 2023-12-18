import React from 'react'
import evaluations from '@/data/evaluations'
import { Star } from '@phosphor-icons/react'

export default function EvaluationsGame() {
  const starsCount = (stars: number) => {
    if (stars === 2) return ['a', 'a']
    if (stars === 3) return ['a', 'a', 'a']
    if (stars === 4) return ['a', 'a', 'a', 'a']
    if (stars === 5) return ['a', 'a', 'a', 'a', 'a']
    return ['a']
  }
  return (
    <div className="grid grid-cols-2 gap-6 pb-8 lg:flex lg:flex-col lg:gap-4 lg:w-full">
      {evaluations.map(({ id, client, stars, date, description }) => (
        <div
          key={id}
          className="w-full h-fit bg-white p-4 rounded shadow-md text-base text-zinc-600 flex flex-col gap-6 sm:p-5 lg:w-full lg:h-fit"
        >
          <div className="flex flex-col">
            <h1 className="font-bold">{client}</h1>
            <div className="flex">
              {starsCount(stars).map((item, index) => (
                <Star
                  key={index}
                  size={20}
                  weight="duotone"
                  className="text-sky-400"
                />
              ))}
            </div>
            <span className="font-light text-xs">{`Avaliado em ${date.toLocaleDateString(
              'pt-BR',
            )}`}</span>
          </div>
          <p className="text-sm font-normal overflow-auto w-full text-justify">
            {description}
          </p>
        </div>
      ))}
    </div>
  )
}
