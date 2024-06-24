import React from 'react'

export default function ProductCardSkeleton() {
  return (
    <div className="flex flex-col w-40 h-fit items-start justify-start animation-opacity">
      <div className="w-40 h-60 loading-skeleton rounded" />

      <div className="w-full h-40 flex flex-col justify-between items-start xl:h-fit">
        <div className="flex flex-col gap-1 h-20 mt-1 w-full">
          <div className="w-full flex flex-col gap-[2px]">
            <h1 className="font-semibold text-base text-transparent loading-skeleton rounded-md w-full max-h-20 sm:text-base sm:max-h-11 hover:underline">
              Titulo titulo titulo
            </h1>
            <h1 className="font-semibold text-base text-transparent loading-skeleton rounded-md w-fit max-h-20 sm:text-base sm:max-h-11 hover:underline">
              Titulo titulo titulo
            </h1>
          </div>

          <div className="w-fit">
            <h2 className="font-light text-sm w-fit sm:text-xs hover:underline text-transparent loading-skeleton rounded">
              Category
            </h2>
          </div>
        </div>

        <span className="text-lg font-bold text-transparent sm:text-md loading-skeleton rounded">
          R$ 999.99
        </span>

        <button
          type="button"
          className="mt-1 w-fit h-9 px-4 text-transparent font-bold uppercase  py-1 text-sm flex items-center justify-center relative transition-all sm:text-xs sm:w-full loading-skeleton rounded"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
