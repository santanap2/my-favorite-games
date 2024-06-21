'use client'

import { ISearchParams } from '@/interfaces'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function FormOrdersSelect({ searchParams }: ISearchParams) {
  const router = useRouter()
  const queryParams = new URLSearchParams(searchParams).toString()

  const checkStatusValue = () => {
    if (queryParams.includes('approvedPayment')) return 'approvedPayment'
    if (queryParams.includes('awaitingPayment')) return 'awaitingPayment'
    if (queryParams.includes('canceled')) return 'canceled'
    if (queryParams.includes('concluded')) return 'concluded'
    if (queryParams.includes('processing')) return 'processing'
    return 'all'
  }

  return (
    <form className="w-fit">
      <label
        htmlFor="filters"
        className="flex gap-3 items-center justify-center"
      >
        <span className="text-sm tracking-wide font-semibold">
          Filtrar pedidos:
        </span>
        <select
          name=""
          id="filters"
          className="h-10 rounded px-3 focus:outline-none text-neutral-200 hover:shadow-lg w-60 text-left text-sm font-light bg-neutral-700 shadow-md"
          onChange={({ target: { value } }) =>
            router.push(`/minha-conta/meus-pedidos?filter=${value}`)
          }
          value={checkStatusValue()}
        >
          <option value="all">Todos</option>
          <option value="awaitingPayment">Aguardando pagamento</option>
          <option value="canceled">Cancelado</option>
          <option value="concluded">Concluído</option>
          <option value="approvedPayment">Pagamento aprovado</option>
          <option value="processing">Processando</option>
        </select>
      </label>
    </form>
  )
}
