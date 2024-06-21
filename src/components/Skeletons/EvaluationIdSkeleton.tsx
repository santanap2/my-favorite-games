import { pageTitle } from '@/helpers'
import { ThumbsUp, Star } from '@phosphor-icons/react/dist/ssr'
import React from 'react'
import LateralMyAccount from '../LateralMyAccount'

export default function EvaluationIdSkeleton() {
  return (
    <div className="mt-24 xxl:mt-20 w-full h-full">
      <title>{`Minhas avaliações - ${pageTitle}`}</title>
      <LateralMyAccount />
      <div className=" w-full h-full flex flex-col gap-10 text-neutral-800 sm:gap-6 xxl:justify-center xxl:items-center animation-opacity transition-all">
        <div className="flex gap-1 w-full items-center justify-start relative">
          <ThumbsUp
            weight="fill"
            className="text-indigo-600 sm:text-3xl text-5xl"
          />
          <h1 className="font-regular text-xl font-semibold">
            Avaliação de produto
          </h1>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="flex w-full sm:justify-start items-center gap-4">
            <div className="w-fit">
              <div className="w-40 h-40 sm:w-24 sm:h-24 object-cover bg-neutral-100 loading-skeleton shadow-md text-transparent cursor-default rounded" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <span className="text-xl tracking-wide font-light bg-neutral-100 loading-skeleton shadow-md text-transparent cursor-default rounded w-full">
                Nome completo do jogo
              </span>
              <span className="text-xl tracking-wide font-light bg-neutral-100 loading-skeleton shadow-md text-transparent cursor-default rounded w-1/2">
                a
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="sm:text-sm font-semibold tracking-wide bg-neutral-100 loading-skeleton shadow-md text-transparent cursor-default rounded w-fit">
              Produto avaliado em:
            </span>
            <span className="text-sm tracking-wide font-light bg-neutral-100 loading-skeleton shadow-md text-transparent cursor-default rounded w-fit">
              domingo, 14 de janeiro de 2024 às 10:54:20
            </span>
          </div>

          <div>
            <span className="sm:text-sm font-semibold tracking-wide bg-neutral-100 loading-skeleton shadow-md text-transparent cursor-default rounded w-fit">
              Sua nota para o produto:
            </span>

            <div className="flex items-center">
              {new Array(5).fill('').map((item, index) => (
                <Star
                  key={index}
                  weight="fill"
                  className="text-neutral-200 text-3xl"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="sm:text-sm font-semibold tracking-wide bg-neutral-100 loading-skeleton shadow-md text-transparent cursor-default rounded w-fit">
              Sua descrição para o produto:
            </span>

            <div className="px-2 py-4 w-full bg-white rounded min-h-fit flex flex-col gap-1 shadow-md">
              <p className="text-sm tracking-wide font-light bg-neutral-100 loading-skeleton shadow-md text-transparent cursor-default rounded">
                Descricao
              </p>
              <p className="text-sm tracking-wide font-light bg-neutral-100 loading-skeleton shadow-md text-transparent cursor-default rounded w-2/3">
                Descricao
              </p>
              <p className="text-sm tracking-wide font-light bg-neutral-100 loading-skeleton shadow-md text-transparent cursor-default rounded w-1/3">
                Descricao
              </p>
            </div>
          </div>

          <button
            type="button"
            className="w-64 sm:w-full px-4 py-2 text-base font-light bg-neutral-100 loading-skeleton shadow-md text-transparent cursor-default rounded"
          >
            Editar avaliação
          </button>
        </div>
      </div>
    </div>
  )
}
