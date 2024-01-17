import React from 'react'

export default function OrderDetailsSkeleton() {
  return (
    <div className="text-black flex flex-col gap-1 bg-white w-[600px] max-w-full p-4 rounded shadow-md sm:text-sm md:w-full text-transparent animation-opacity transition-all">
      <p>
        <span className="font-bold rounded bg-zinc-100 loading-skeleton">
          Número do pedido:
        </span>
        <span className="rounded bg-zinc-100 loading-skeleton ml-1">
          #999999999
        </span>
      </p>

      <p>
        <span className="font-bold rounded bg-zinc-100 loading-skeleton">
          Data:{' '}
        </span>
        <span className="rounded bg-zinc-100 loading-skeleton ml-1">
          sexta-feira, 5 de janeiro de 2024 às 15:43:25
        </span>
      </p>

      <p>
        <span className="font-bold rounded bg-zinc-100 loading-skeleton">
          Valor:{' '}
        </span>
        <span className="rounded bg-zinc-100 loading-skeleton ml-1">
          R$9999.99
        </span>
      </p>

      <p>
        <span className="font-bold rounded bg-zinc-100 loading-skeleton">
          Método de pagamento:{' '}
        </span>
        <span className="rounded bg-zinc-100 loading-skeleton ml-1">
          Cartão de crédito
        </span>
      </p>

      <p className="mt-4 flex flex-col gap-1">
        <span className="rounded bg-zinc-100 loading-skeleton w-full">
          Confira seu email{' '}
        </span>
        <span className="font-bold bg-zinc-100 loading-skeleton w-1/2 rounded">
          emaildousuario@email.com
        </span>
      </p>
    </div>
  )
}
