import React from 'react'

export default function ProductCardSkeleton() {
  return (
    <div className="flex flex-col w-64 h-fit items-start justify-start lg:w-full xl:w-64 animation-opacity animation-opacity transition-all">
      <div className="w-64 h-72 lg:w-full md:h-52 xl:h-72 loading-skeleton">
        <div className="w-64 h-72 overflow-hidden inline-block rounded lg:w-full md:h-52 xl:w-64 xl:h-72 shadow-[0_0px_5px_rgba(0,0,0,0.2)]">
          <div
            className={`object-cover transition-all duration-500 w-full h-full rounded`}
          />
        </div>
      </div>

      <div className="w-full h-40 flex flex-col justify-between items-start xl:h-fit">
        <div className="flex flex-col gap-1 h-20 mt-1 w-full">
          <div className="w-full flex flex-col gap-1">
            <h1 className="font-semibold text-lg w-full max-h-20 sm:text-base loading-skeleton rounded text-transparent">
              Title Title Title Title Title
            </h1>
            <h1 className="font-semibold text-lg w-fit max-h-20 sm:text-base loading-skeleton rounded text-transparent">
              Title Title Title Titleee
            </h1>
          </div>

          <h2 className="font-light text-md w-fit sm:text-xs h-fit hover:underline loading-skeleton rounded text-transparent">
            Category
          </h2>
        </div>

        <span className="mt-2 text-lg font-bold text-transparent sm:text-md loading-skeleton rounded">
          R$ 999,99
        </span>

        <button
          type="button"
          className="w-full h-9 text-transparent font-bold uppercase py-1 rounded text-sm flex items-center justify-center relative  transition-all sm:text-xs loading-skeleton mt-1"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
