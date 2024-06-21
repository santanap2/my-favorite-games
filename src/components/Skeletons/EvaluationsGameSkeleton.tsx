import { Star } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export default function EvaluationsGameSkeleton() {
  return (
    <div className="w-full h-fit bg-neutral-800 p-4 rounded-md shadow-md text-base text-neutral-600 flex flex-col gap-6 tracking-wide sm:p-5 lg:w-full lg:h-fit animation-opacity transition-all">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-transparent bg-neutral-100 loading-skeleton rounded-md w-fit shadow-md cursor-default">
          Nome completo do usuário
        </h1>
        <div className="flex">
          {new Array(5).fill('').map((item, index) => (
            <Star
              key={index}
              weight="fill"
              className="text-neutral-600 text-xl"
            />
          ))}
        </div>
        <span className="font-light text-xs text-transparent bg-neutral-100 loading-skeleton rounded-md w-fit shadow-md cursor-default">
          Avaliado em 99/99/9999
        </span>
      </div>
      <span className="text-sm font-light overflow-auto w-full text-justify flex flex-col gap-1">
        <p className="font-light text-base sm:text-sm text-transparent bg-neutral-100 loading-skeleton rounded-md w-full shadow-md cursor-default">
          a
        </p>
        <p className="font-light text-base sm:text-sm text-transparent bg-neutral-100 loading-skeleton rounded-md w-2/3 shadow-md cursor-default">
          a
        </p>
      </span>
    </div>
  )
}
