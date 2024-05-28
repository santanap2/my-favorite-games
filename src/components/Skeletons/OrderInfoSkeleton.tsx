import React from 'react'

export default function OrderInfoSkeleton() {
  return (
    <div className="flex flex-col gap-1 bg-white w-[600px] max-w-full p-4 rounded shadow-md text-transparent sm:text-sm animation-opacity transition-all">
      <div className="bg-slate-100 w-fit rounded loading-skeleton">
        <span className="font-bold">Número do pedido:</span>
        <span>{` #65156}`}</span>
      </div>

      <div className="bg-slate-100 w-fit rounded loading-skeleton">
        <span className="font-bold">Data: </span>
        <span>quinta-feira, 4 de janeiro de 2024 às 18:37:13</span>
      </div>

      <div className="bg-slate-100 w-fit rounded loading-skeleton">
        <span className="font-bold">Valor:</span>
        <span>R$ 9999,99</span>
      </div>

      <div className="bg-slate-100 w-fit rounded loading-skeleton">
        <span className="font-bold">Método de pagamento: </span>
        <span>Método de pagamento</span>
      </div>

      <div className="mt-4 bg-slate-100 rounded w-full loading-skeleton">
        <span>Confira seu email</span>
        <span> para mais informações</span>
      </div>
      <div className="bg-slate-100 rounded w-1/2 loading-skeleton">
        <span>Confira seu email</span>
      </div>
    </div>
  )
}
