import { Star, ThumbsUp } from '@phosphor-icons/react'
import React from 'react'

export default function UpdateEvaluationSkeleton() {
  return (
    <div className="mt-24 xxl:mt-20 w-full h-full">
      <div className=" w-full h-full flex flex-col gap-10 text-zinc-800 sm:gap-6 xxl:justify-center xxl:items-center animation-opacity transition-all">
        <div className="flex gap-1 w-full items-center justify-start relative">
          <ThumbsUp
            weight="fill"
            className="text-slate-500 sm:text-3xl text-5xl"
          />
          <h1 className="font-regular text-xl font-semibold">
            Editar avaliação
          </h1>
        </div>

        <div className="w-full flex flex-col gap-6">
          <div className="flex w-full sm:justify-start items-center gap-4">
            <span className="text-xl tracking-wide font-light text-zinc-600">
              <div className="w-fit">
                <div className="w-40 h-40 sm:w-24 sm:h-24 bg-zinc-100 loading-skeleton rounded cursor-default shadow-md text-transparent" />
              </div>
            </span>
            <div className="flex flex-col gap-1 w-full">
              <span className="text-xl tracking-wide font-light bg-zinc-100 loading-skeleton rounded cursor-default shadow-md text-transparent w-3/5 sm:w-full">
                Nome completo
              </span>
              <span className="text-xl tracking-wide font-light bg-zinc-100 loading-skeleton rounded cursor-default shadow-md text-transparent w-1/5 sm:w-3/5">
                do jogo
              </span>
            </div>
          </div>

          <div className="w-full bg-white px-2 py-4 rounded shadow-md flex flex-col gap-4">
            <label className="flex flex-col gap-1">
              <span className="text-sm tracking-wide font-semibold">
                Quantas estrelas você dá para o produto:
              </span>

              <div className="flex items-center">
                {new Array(5).fill('').map((_, index) => (
                  <Star
                    key={index}
                    weight="fill"
                    className="text-zinc-200 text-4xl"
                  />
                ))}
              </div>
            </label>

            <label htmlFor="description" className="flex flex-col gap-1">
              <span className="text-sm tracking-wide font-semibold ">
                Descreva sua experiência com o produto:
              </span>
              <div className="border rounded px-2 py-4 w-full resize-none h-40 sm:h-80 md:h-60 focus:outline-none focus:shadow-md flex flex-col gap-2">
                <p className="bg-zinc-100 loading-skeleton rounded cursor-default shadow-md text-transparent w-4/5">
                  a
                </p>
                <p className="bg-zinc-100 loading-skeleton rounded cursor-default shadow-md text-transparent w-3/5">
                  a
                </p>
                <p className="bg-zinc-100 loading-skeleton rounded cursor-default shadow-md text-transparent w-2/5">
                  a
                </p>
              </div>
            </label>
            <button
              type="submit"
              className="p-2 sm:w-full w-64 font-light transition-all bg-zinc-100 loading-skeleton rounded cursor-default shadow-md text-transparent "
            >
              Atualizar avaliação
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
