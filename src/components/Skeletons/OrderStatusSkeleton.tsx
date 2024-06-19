import {
  Storefront,
  CurrencyCircleDollar,
  Circle,
  HourglassMedium,
  Package,
} from '@phosphor-icons/react'
import React from 'react'

export default function OrderStatusSkeleton() {
  return (
    <div className="flex w-[463px] sm:max-w-full sm:w-full h-40 gap-16 items-center justify-center relative animation-opacity transition-all">
      <div className="h-2 w-[400px] absolute left-10 bottom-14 z-0 loading-skeleton sm:w-[300px] xs:w-[250px]" />

      <div className="w-20 flex flex-col gap-4 items-center justify-center absolute left-0 z-10">
        <Storefront
          weight="fill"
          className="rounded-3xl p-2 border-2 border-neutral-500 text-neutral-500 loading-skeleton text-6xl"
        />
        <div className="flex flex-col items-center justify-center h-full">
          <Circle
            weight="fill"
            className="text-neutral-500 rounded-3xl bg-neutral-500 text-4xl"
          />
          <span className="text-neutral-500 text-sm text-center">
            Pedido realizado
          </span>
        </div>
      </div>

      <div className="w-20 flex flex-col gap-4 items-center justify-center absolute left-32 z-10 sm:left-24 xs:left-20">
        <CurrencyCircleDollar
          weight="fill"
          className="rounded-3xl p-2 border-2 border-neutral-500 text-neutral-500 loading-skeleton text-6xl"
        />

        <div className="flex flex-col items-center justify-center">
          <Circle
            weight="fill"
            className="text-neutral-500 rounded-3xl bg-neutral-500 text-4xl"
          />
          <span className="text-neutral-500 text-sm text-center">
            Pagamento confirmado
          </span>
        </div>
      </div>

      <div className="w-20 flex flex-col gap-4 items-center justify-center absolute left-64 z-10 sm:left-48 xs:left-40">
        <HourglassMedium
          weight="fill"
          className="rounded-3xl p-2 border-2 border-neutral-500 text-neutral-500 loading-skeleton text-6xl"
        />
        <div className="flex flex-col items-center justify-center">
          <Circle
            weight="fill"
            className="text-neutral-500 rounded-3xl bg-neutral-500 text-4xl"
          />
          <span className="text-neutral-500 text-sm text-center">
            Processando pedido
          </span>
        </div>
      </div>

      <div className="w-20 flex flex-col gap-4 items-center justify-center absolute left-96 z-10 sm:left-72 xs:left-60">
        <Package
          weight="fill"
          className="rounded-3xl p-2 border-2 border-neutral-500 text-neutral-500 loading-skeleton text-6xl"
        />
        <div className="flex flex-col items-center justify-center">
          <Circle
            weight="fill"
            className="text-neutral-500 rounded-3xl bg-neutral-500 text-4xl"
          />
          <span className="text-neutral-500 text-sm text-center">
            Pedido concluído
          </span>
        </div>
      </div>
    </div>
  )
}
