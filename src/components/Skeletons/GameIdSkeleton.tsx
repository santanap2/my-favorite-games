import {
  CaretRight,
  ShoppingCartSimple,
  PlusCircle,
  Heart,
  CaretUp,
} from '@phosphor-icons/react'

import React from 'react'
import EvaluationsGameSkeleton from './EvaluationsGameSkeleton'

export default function GameIdSkeleton() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap items-center gap-1 w-fit text-sm sm:w-full sm:text-xs max-w-full">
        <span className="min-w-fit text-transparent bg-zinc-100 loading-skeleton rounded shadow-md cursor-default text-select">
          Todos os jogos
        </span>
        <CaretRight size={16} weight="light" className="text-zinc-300" />
        <span className="min-w-fit text-transparent bg-zinc-100 loading-skeleton rounded shadow-md cursor-default">
          Nome da categoria
        </span>

        <CaretRight size={16} weight="light" className="text-zinc-300" />

        <span className="min-w-fit text-transparent bg-zinc-100 loading-skeleton rounded shadow-md cursor-default">
          Nome completo do jogo
        </span>
      </div>
      <h1 className="mt-4 font-bold text-2xl sm:text-xl sm:mt-2 text-transparent bg-zinc-100 loading-skeleton rounded w-fit shadow-md cursor-default">
        Nome completo do jogo
      </h1>

      <div className="flex gap-10 mt-10 w-4/5 sm:mt-2 sm:w-full sm:justify-center sm:items-center sm:flex-col sm:gap-4">
        <div>
          <div className="w-[300px] h-[400px] shadow-md md:w-72 md:h-96 text-transparent bg-zinc-100 loading-skeleton rounded" />
        </div>

        <div className="flex flex-col justify-start items-start w-full h-full text-zinc-600 gap-2">
          <span className="font-light sm:text-sm text-transparent bg-zinc-100 loading-skeleton rounded w-fit shadow-md  cursor-default">
            Vendido por: My Fav Games™
          </span>

          <span className="text-4xl font-black sm:text-3xl text-transparent bg-zinc-100 loading-skeleton rounded w-fit shadow-md cursor-default">
            R$9999.99
          </span>
          <div className="flex flex-col mt-6 sm:mt-0 sm:text-xs">
            <span className="text-transparent bg-zinc-100 loading-skeleton rounded w-fit shadow-md cursor-default">
              À vista no PIX com 10% de desconto
            </span>
            <span className="text-transparent bg-zinc-100 loading-skeleton rounded w-fit shadow-md mt-1 cursor-default">
              {`Ou em até 3x de R$9999.99 sem juros no cartão de crédito`}
            </span>
          </div>
          <div className="flex gap-4 mt-20 sm:mt-6 sm:w-full sm:justify-center sm:items-center sm:gap-1">
            <div className="w-64 h-14 text-lg font-bold uppercase tracking-wider sm:w-3/5 sm:font-semibold sm:text-sm sm:h-12 text-transparent bg-zinc-100 loading-skeleton rounded shadow-md cursor-default">
              Comprar agora
            </div>
            <div className="w-14 h-14 text-lg font-bold uppercase tracking-wider flex items-center justify-center relative shadow-md sm:h-12 sm:w-12 text-transparent bg-zinc-100 loading-skeleton rounded">
              <ShoppingCartSimple
                size={28}
                weight="bold"
                className="relative"
              />
              <PlusCircle
                size={20}
                weight="fill"
                className="absolute top-2 right-1 sm:top-1 sm:right-0"
              />
            </div>
            <div className="w-14 h-14  text-lg font-bold tracking-wider flex items-center justify-center relative hover:shadow-lg sm:h-12 sm:w-12 text-transparent bg-zinc-100 loading-skeleton rounded shadow-md">
              <Heart size={28} className=" relative" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 text-zinc-500 w-full flex flex-col gap-4">
        <div className="w-full flex gap-2 py-3">
          <span className="text-xl font-semibold sm:text-base text-transparent bg-zinc-100 loading-skeleton rounded w-fit shadow-md cursor-default">
            Descrição
          </span>

          <CaretUp size={28} className="text-zinc-300" />
        </div>

        <div className="tracking-wide pb-8 flex flex-col gap-1 border-b">
          <h1 className=" font-normal text-lg sm:text-base text-transparent bg-zinc-100 loading-skeleton rounded w-fit shadow-md cursor-default">
            Nome completo do produto
          </h1>
          <p className="font-light text-base sm:text-sm text-transparent bg-zinc-100 loading-skeleton rounded w-full shadow-md cursor-default">
            a
          </p>

          <p className="font-light text-base sm:text-sm text-transparent bg-zinc-100 loading-skeleton rounded w-2/3 shadow-md cursor-default">
            a
          </p>
        </div>

        <div className="w-full flex gap-2 py-3">
          <span className="text-xl font-semibold sm:text-base text-transparent bg-zinc-100 loading-skeleton rounded w-fit shadow-md cursor-default">
            Avaliações
          </span>
          <CaretUp size={28} className="text-zinc-300" />
        </div>

        <div className="grid grid-cols-2 gap-6 pb-8 lg:flex lg:flex-col lg:gap-4 lg:w-full">
          <EvaluationsGameSkeleton />
          <EvaluationsGameSkeleton />
        </div>
      </div>
    </div>
  )
}
