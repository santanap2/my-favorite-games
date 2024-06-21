import React from 'react'

export default function OrderDetailsSkeleton() {
  return (
    <div className="text-neutral-500 flex flex-col gap-1 bg-neutral-800 w-[600px] max-w-full p-4 rounded-md shadow-md sm:text-sm md:w-full text-transparent animation-opacity transition-all">
      <p>
        <span className="font-bold rounded">Número do pedido:</span>
        <span className="rounded-md loading-skeleton text-transparent ml-1">
          #999999999
        </span>
      </p>

      <p>
        <span className="font-bold rounded">Data: </span>
        <span className="rounded-md loading-skeleton text-transparent ml-1">
          sexta-feira, 5 de janeiro de 2024 às 15:43:25
        </span>
      </p>

      <p>
        <span className="font-bold rounded">Valor: </span>
        <span className="rounded-md loading-skeleton text-transparent ml-1">
          R$9999.99
        </span>
      </p>

      <p>
        <span className="font-bold rounded">Método de pagamento: </span>
        <span className="rounded-md loading-skeleton text-transparent ml-1">
          Cartão de crédito
        </span>
      </p>

      <p className="mt-4 flex flex-col gap-1">
        <span className="rounded-md loading-skeleton w-full text-transparent">
          Confira seu email{' '}
        </span>
        <span className="font-bold loading-skeleton w-1/2 rounded-md text-transparent">
          emaildousuario@email.com
        </span>
      </p>
    </div>
  )
}
