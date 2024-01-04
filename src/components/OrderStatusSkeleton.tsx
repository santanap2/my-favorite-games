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
    <div className="flex w-[463px] sm:w-full h-40 gap-16 items-center justify-center text-slate-400 relative">
      <div className="bg-slate-400 h-2 w-[400px] absolute left-10 bottom-14 z-0 loading-skeleton sm:w-[300px] xs:w-[250px]" />

      <div className="w-20 flex flex-col gap-4 items-center justify-center absolute left-0 z-10">
        <Storefront
          size={64}
          weight="fill"
          className="rounded-3xl bg-zinc-200 p-2 border-2 border-zinc-200 text-zinc-300 loading-skeleton"
        />
        <div className="flex flex-col items-center justify-center h-full">
          <Circle
            size={40}
            weight="fill"
            className="text-zinc-200 rounded-3xl bg-zinc-50"
          />
          <span className="text-zinc-700 text-sm text-center">
            Pedido realizado
          </span>
        </div>
      </div>

      <div className="w-20 flex flex-col gap-4 items-center justify-center absolute left-32 z-10 sm:left-24 xs:left-20">
        <CurrencyCircleDollar
          size={64}
          weight="fill"
          className="rounded-3xl bg-slate-400 p-2 border-2 border-zinc-200 text-zinc-300 loading-skeleton"
        />

        <div className="flex flex-col items-center justify-center">
          <Circle
            size={40}
            weight="fill"
            className="text-zinc-200 rounded-3xl bg-zinc-50"
          />
          <span className="text-zinc-700 text-sm text-center">
            Pagamento confirmado
          </span>
        </div>
      </div>

      <div className="w-20 flex flex-col gap-4 items-center justify-center absolute left-64 z-10 sm:left-48 xs:left-40">
        <HourglassMedium
          size={64}
          weight="fill"
          className="rounded-3xl bg-slate-400 p-2 border-2 border-zinc-200 text-zinc-300 loading-skeleton"
        />
        <div className="flex flex-col items-center justify-center">
          <Circle
            size={40}
            weight="fill"
            className="text-zinc-200 rounded-3xl bg-zinc-50"
          />
          <span className="text-zinc-700 text-sm text-center">
            Processando pedido
          </span>
        </div>
      </div>

      <div className="w-20 flex flex-col gap-4 items-center justify-center absolute left-96 z-10 sm:left-72 xs:left-60">
        <Package
          size={64}
          // screenSize < 600 ? 54 : 64
          weight="fill"
          className="rounded-3xl bg-slate-400 p-2 border-2 border-zinc-200 text-zinc-300 loading-skeleton"
        />
        <div className="flex flex-col items-center justify-center">
          <Circle
            size={40}
            // screenSize < 600 ? 32 : 40
            weight="fill"
            className="text-zinc-200 rounded-3xl bg-zinc-50"
          />
          {/* <div className="w-[37px] h-[37px] border-[4px] border-zinc-50 rounded-3xl bg-zinc-300 loading-skeleton" /> */}
          <span className="text-zinc-700 text-sm text-center">
            Pedido concluído
          </span>
        </div>
      </div>
    </div>
  )
}
