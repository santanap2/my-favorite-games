import React from 'react'

export default function OrderInfoSkeleton() {
  return (
    <div className="flex flex-col gap-1 bg-neutral-800 w-[600px] max-w-full p-4 rounded-md shadow-md text-transparent sm:text-sm animation-opacity transition-all">
      <div className="w-fit rounded-md loading-skeleton">
        <span className="font-bold">Número do pedido:</span>
        <span>{` #65156}`}</span>
      </div>

      <div className="w-fit rounded-md loading-skeleton">
        <span className="font-bold">Data: </span>
        <span>quinta-feira, 4 de janeiro de 2024 às 18:37:13</span>
      </div>

      <div className="w-fit rounded-md loading-skeleton">
        <span className="font-bold">Valor:</span>
        <span>R$ 9999,99</span>
      </div>

      <div className="w-fit rounded-md loading-skeleton">
        <span className="font-bold">Método de pagamento: </span>
        <span>Método de pagamento</span>
      </div>

      <div className="mt-4 rounded-md w-full loading-skeleton">
        <span>Confira seu email</span>
        <span> para mais informações</span>
      </div>
      <div className="rounded-md w-1/2 loading-skeleton">
        <span>Confira seu email</span>
      </div>
    </div>
  )
}