import React from 'react'

export default function ProductOnOrderSkeleton() {
  return (
    <div className="flex w-[600px] gap-3 border-b pb-4 sm:max-w-full sm:w-full sm:pb-2 animation-opacity transition-all">
      <div className="w-24 h-36 object-cover rounded bg-zinc-100 loading-skeleton" />

      <div className="flex flex-col items-start justify-center w-full">
        <div className="flex sm:flex-col gap-0 sm:gap-1 text-transparent w-3/5 sm:w-full">
          <h1 className="font-semibold text-lg tracking-tight w-full sm:w-fit bg-zinc-100 loading-skeleton rounded">
            Nome do jogo grande o suficiente
          </h1>
        </div>

        <div className="w-full h-full flex items-start justify-between mt-1">
          <div className="flex flex-col justify-between items-start text-sm font-light sm:text-sm sm:font-light w-full h-full">
            <h3 className="rounded bg-zinc-100 w-fit loading-skeleton text-transparent">
              Genero do jogo
            </h3>
            <div className="flex flex-col gap-1 text-xs max-h-16 sm:hidden  text-transparent mr-3">
              <h4 className="rounded bg-zinc-100 w-fit loading-skeleton">
                Descrição do jogo grande o suficiente pra ocupar muitas linhas
                até
              </h4>
              <h4 className="rounded bg-zinc-100 w-fit loading-skeleton">
                dar 160 caracteres porque é o número que eu defini para o card
              </h4>
              <h4 className="rounded bg-zinc-100 w-fit loading-skeleton">
                cortar a linha e adicionar os tres pontos.
              </h4>
            </div>
          </div>
          <div className="font-black flex items-center justify-center text-slate-600 tracking-wide text-lg sm:text-base sm:font-extrabold min-w-fit h-full">
            <h2 className="rounded bg-zinc-100 w-fit loading-skeleton text-transparent">
              R$9999,99
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
