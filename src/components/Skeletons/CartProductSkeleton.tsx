/* eslint-disable @next/next/no-img-element */

import React from 'react'

export default function CartProductSkeleton() {
  return (
    <div className="flex w-full gap-3 border-b pb-4 sm:pb-2">
      <div className="w-32 h-36 object-cover rounded sm:w-24 bg-zinc-200 loading-skeleton" />
      <div className="flex flex-col justify-between items-start w-full">
        <div className="flex flex-col w-full gap-1">
          <h1 className="font-bold text-lg tracking-tight sm:text-sm sm:font-semibold text-transparent bg-zinc-200 w-full rounded loading-skeleton">
            Nome
          </h1>
          <h3 className="text-sm font-light sm:text-xs sm:font-light text-transparent bg-zinc-200 w-fit rounded loading-skeleton">
            Generooooooooooooooooooooooo
          </h3>
        </div>
        <div className="flex justify-between items-center w-full">
          <h2 className="font-extrabold tracking-wider text-lg sm:text-sm sm:font-bold text-transparent bg-zinc-200 rounded loading-skeleton">
            R$ 1000.999
          </h2>
          <button
            type="button"
            className="text-xs font-regular tracking-wider uppercase underline text-transparent bg-zinc-200 rounded cursor-default loading-skeleton"
          >
            Remover
          </button>
        </div>
      </div>
    </div>
  )
}
