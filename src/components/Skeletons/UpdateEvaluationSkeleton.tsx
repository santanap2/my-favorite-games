import { Star, ThumbsUp } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export default function UpdateEvaluationSkeleton() {
  return (
    <div className="mt-24 xxl:mt-20 w-full h-full">
      <div className=" w-full h-full flex flex-col gap-10 text-white sm:gap-6 xxl:justify-center xxl:items-center animation-opacity transition-all">
        <div className="flex gap-1 w-full items-center justify-start relative">
          <ThumbsUp
            weight="fill"
            className="text-indigo-600 sm:text-3xl text-5xl"
          />
          <h1 className="font-regular text-xl font-semibold">
            Editar avaliação
          </h1>
        </div>

        <div className="w-full flex flex-col gap-6">
          <div className="flex w-full sm:justify-start items-center gap-4">
            <span className="text-xl tracking-wide font-light text-neutral-600">
              <div className="w-fit">
                <div className="w-40 h-60 sm:w-24 sm:h-36 loading-skeleton rounded-md cursor-default shadow-md text-transparent" />
              </div>
            </span>
            <div className="flex flex-col gap-1 w-full">
              <span className="text-xl tracking-wide font-light loading-skeleton rounded-md cursor-default shadow-md text-transparent w-3/5 sm:w-full">
                Nome completo
              </span>
              <span className="text-xl tracking-wide font-light loading-skeleton rounded-md cursor-default shadow-md text-transparent w-1/5 sm:w-3/5">
                do jogo
              </span>
            </div>
          </div>

          <div className="w-full bg-neutral-800 px-2 py-4 rounded-md shadow-md flex flex-col gap-4">
            <label className="flex flex-col gap-1">
              <span className="text-sm tracking-wide font-semibold">
                Quantas estrelas você dá para o produto:
              </span>

              <div className="flex items-center">
                {new Array(5).fill('').map((_, index) => (
                  <Star
                    key={index}
                    weight="fill"
                    className="text-white0 text-4xl"
                  />
                ))}
              </div>
            </label>

            <label htmlFor="description" className="flex flex-col gap-1">
              <span className="text-sm tracking-wide font-semibold ">
                Descreva sua experiência com o produto:
              </span>
              <div className="border border-neutral-500 bg-neutral-700 rounded-md px-2 py-4 w-full resize-none h-40 sm:h-80 md:h-60 focus:outline-none focus:shadow-md flex flex-col gap-2">
                <p className="loading-skeleton rounded-md cursor-default shadow-md text-transparent w-4/5">
                  a
                </p>
                <p className="loading-skeleton rounded-md cursor-default shadow-md text-transparent w-3/5">
                  a
                </p>
                <p className="loading-skeleton rounded-md cursor-default shadow-md text-transparent w-2/5">
                  a
                </p>
              </div>
            </label>
            <button
              type="submit"
              className="p-2 sm:w-full w-64 font-light transition-all loading-skeleton rounded-md cursor-default shadow-md text-transparent "
            >
              Atualizar avaliação
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
