/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function UserProductCardSkeleton() {
  return (
    <div className="bg-white rounded shadow-md w-80 h-60 relative flex justify-center items-end hover:scale-105 hover:shadow-lg transition-all sm:w-44 md:w-52 lg:w-64 lg:h-56 xxl:w-72 xxl:hover:scale-100">
      <div className="w-full absolute top-0 left-0 right-0 rounded-t h-40 bg-zinc-100 loading-skeleton" />

      <div className="absolute top-40 px-3 py-3 w-full h-20 rounded-b sm:p-2 sm:h-fit">
        <span className="w-64 text-md font-semibold mb-4 h-14 lg:text-sm lg:max-h-14 lg:mb-0 lg:w-full bg-zinc-100 text-transparent loading-skeleton rounded">
          Nome do jogo grande para ocupar duas linhas
        </span>
      </div>
    </div>
  )
}
