import React from 'react'
import { Skeleton } from '../ui/skeleton'

export default function ProductCardSkeleton() {
  return (
    <div className="w-40 flex flex-col items-center justify-start rounded text-transparent select-none">
      <div className="w-fit">
        <div className="w-40 h-60 inline-block rounded-md">
          <Skeleton className="object-cover w-40 h-full rounded-md" />
        </div>
      </div>

      <div className="w-full h-fit flex flex-col justify-between items-start xl:h-fit">
        <div className="flex flex-col gap-1 h-20 mt-1">
          <div className="w-fit">
            <Skeleton className="font-semibold text-base w-fit max-h-20 sm:text-base sm:max-h-11 rounded-full">
              Nome do produto
            </Skeleton>
          </div>

          <div className=" w-fit">
            <Skeleton className="text-sm w-fit sm:text-xs rounded-full">
              Categoria
            </Skeleton>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center justify-center h-8 text-sm font-bold sm:text-md w-full p-2 rounded-md text-center">
            Comprar
          </div>
        </div>
      </div>
    </div>
  )
}
