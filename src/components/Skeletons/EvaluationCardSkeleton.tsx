import { Star } from '@phosphor-icons/react'
import React from 'react'

export default function EvaluationCardSkeleton() {
  return (
    <div className="flex items-center justify-between gap-6 sm:gap-2 w-full h-48 bg-white px-2 rounded shadow-md">
      <div className="w-fit">
        <div className="w-28 h-44 object-cover bg-zinc-100 loading-skeleton rounded text-transparent shadow-md cursor-default" />
      </div>
      <div className="flex flex-col w-full h-44 items-start justify-start gap-1">
        <span className="text-xl font-bold sm:text-lg sm:font-semibold w-fit sm:w-full bg-zinc-100 loading-skeleton rounded text-transparent shadow-md cursor-default">
          Nome completo do produto
        </span>

        <div className="flex w-full h-full justify-between items-end">
          <div className="w-full h-full flex-col">
            <div className="flex flex-col items-start justify-between h-full w-full gap-5">
              <div className="flex flex-col gap-1 w-full">
                <span className="sm:text-sm bg-zinc-100 loading-skeleton rounded text-transparent shadow-md cursor-default w-fit">
                  <span className="font-semibold">{`Pedido: `}</span>
                  <span className="text-light">{`#1451`}</span>
                </span>
                <span className="sm:text-sm bg-zinc-100 loading-skeleton rounded text-transparent shadow-md cursor-default w-fit">
                  <span className="font-semibold">{`Data: `}</span>
                  <span>99/99/9999</span>
                </span>
              </div>

              <div className="h-full w-full">
                <div className="flex w-full">
                  {new Array(5).fill('').map((_item, index) => (
                    <Star
                      key={index}
                      size={20}
                      weight="fill"
                      className="text-zinc-200"
                    />
                  ))}
                </div>

                <div className="text-sm font-light sm:hidden w-full flex flex-col gap-1">
                  <p className="font-light text-sm sm:text-sm text-transparent bg-zinc-100 loading-skeleton rounded w-11/12 shadow-md cursor-default">
                    a
                  </p>
                  <p className="font-light text-sm sm:text-sm text-transparent bg-zinc-100 loading-skeleton rounded w-3/5 shadow-md cursor-default">
                    a
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button className="w-64 sm:w-full  px-2 py-2 font-light text-base sm:text-sm  transition-all bg-zinc-100 loading-skeleton rounded text-transparent shadow-md cursor-default">
            Avaliar produto
          </button>
        </div>
      </div>
    </div>
  )
}
