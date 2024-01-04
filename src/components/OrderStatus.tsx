'use client'

import { IOrderData } from '@/interfaces'
import {
  Storefront,
  CheckCircle,
  CurrencyCircleDollar,
  XCircle,
  Circle,
  HourglassMedium,
  Package,
} from '@phosphor-icons/react'
import React from 'react'

export default function OrderStatus({ order }: { order: IOrderData }) {
  const checkOrderStatus = () => {
    if (!order) return 'w-1/6'
    if (order.status === 'awaitingPayment') return 'w-1/6 bg-emerald-500'
    if (order.status === 'approvedPayment') return 'w-3/6 bg-emerald-500'
    if (order.status === 'processing') return 'w-4/5 bg-emerald-500'
    if (order.status === 'concluded') return 'w-6/6 bg-emerald-500'
    if (order.status === 'canceled') return 'w-6/6 bg-rose-500'
  }

  return (
    <div className="flex w-[463px] sm:max-w-full h-40 gap-16 items-center justify-center text-slate-400 relative">
      <div className="bg-slate-400 h-2 w-[400px] absolute left-10 bottom-14 z-0 sm:w-[300px] xs:w-[250px]">
        <div className={`${checkOrderStatus()} relative h-2 z-10`} />
      </div>

      <div className="w-20 flex flex-col gap-4 items-center justify-center absolute left-0 z-10">
        <Storefront
          size={64}
          weight="fill"
          className="rounded-3xl bg-zinc-50 p-2 border-2 border-emerald-500 text-emerald-500 sm:p-1"
        />
        <div className="flex flex-col items-center justify-center h-full">
          <CheckCircle
            size={40}
            weight="fill"
            className="text-emerald-500 rounded-3xl bg-zinc-50"
          />
          <span className="text-zinc-700 text-sm text-center">
            Pedido realizado
          </span>
        </div>
      </div>

      <div className="w-20 flex flex-col gap-4 items-center justify-center absolute left-32 z-10 sm:left-24 xs:left-20">
        <CurrencyCircleDollar
          size={64}
          weight={
            order.status === 'approvedPayment' ||
            order.status === 'processing' ||
            order.status === 'concluded' ||
            order.status === 'canceled'
              ? 'fill'
              : 'regular'
          }
          className={`${
            order.status === 'approvedPayment' ||
            order.status === 'processing' ||
            order.status === 'concluded'
              ? 'text-emerald-500 border-emerald-500'
              : order.status === 'canceled'
                ? 'text-rose-500 border-rose-500'
                : 'border-slate-400'
          } rounded-3xl bg-zinc-50 p-2 border-2 sm:p-1`}
        />

        <div className="flex flex-col items-center justify-center">
          {order.status === 'canceled' ? (
            <XCircle
              size={40}
              weight="fill"
              className=" rounded-3xl bg-zinc-50 text-rose-500"
            />
          ) : order.status === 'approvedPayment' ||
            order.status === 'processing' ||
            order.status === 'concluded' ? (
            <CheckCircle
              size={40}
              weight="fill"
              className="rounded-3xl bg-zinc-50 text-emerald-500"
            />
          ) : (
            <Circle
              size={40}
              weight="fill"
              className="rounded-3xl bg-zinc-50"
            />
          )}
          <span className="text-zinc-700 text-sm text-center">
            Pagamento confirmado
          </span>
        </div>
      </div>

      <div className="w-20 flex flex-col gap-4 items-center justify-center absolute left-64 z-10 sm:left-48 xs:left-40">
        <HourglassMedium
          size={64}
          weight={
            order.status === 'processing' ||
            order.status === 'concluded' ||
            order.status === 'canceled'
              ? 'fill'
              : 'regular'
          }
          className={`${
            order.status === 'processing' || order.status === 'concluded'
              ? 'text-emerald-500 border-emerald-500'
              : order.status === 'canceled'
                ? 'text-rose-500 border-rose-500'
                : 'border-slate-400'
          } rounded-3xl bg-zinc-50 p-2 border-2 sm:p-1`}
        />
        <div className="flex flex-col items-center justify-center">
          {order.status === 'canceled' ? (
            <XCircle
              size={40}
              weight="fill"
              className=" rounded-3xl bg-zinc-50 text-rose-500"
            />
          ) : order.status === 'processing' || order.status === 'concluded' ? (
            <CheckCircle
              size={40}
              weight="fill"
              className="rounded-3xl bg-zinc-50 text-emerald-500"
            />
          ) : (
            <Circle
              size={40}
              weight="fill"
              className="rounded-3xl bg-zinc-50"
            />
          )}
          <span className="text-zinc-700 text-sm text-center">
            Processando pedido
          </span>
        </div>
      </div>

      <div className="w-20 flex flex-col gap-4 items-center justify-center absolute left-96 z-10 sm:left-72 xs:left-60">
        <Package
          size={64}
          weight={
            order.status === 'concluded' || order.status === 'canceled'
              ? 'fill'
              : 'regular'
          }
          className={`${
            order.status === 'concluded'
              ? 'text-emerald-500 border-emerald-500'
              : order.status === 'canceled'
                ? 'text-rose-500 border-rose-500'
                : 'border-slate-400'
          } rounded-3xl bg-zinc-50 p-2 border-2 sm:p-1`}
        />
        <div className="flex flex-col items-center justify-center">
          {order.status === 'canceled' ? (
            <XCircle
              size={40}
              weight="fill"
              className=" rounded-3xl bg-zinc-50 text-rose-500"
            />
          ) : order.status === 'concluded' ? (
            <CheckCircle
              size={40}
              weight="fill"
              className="rounded-3xl bg-zinc-50 text-emerald-500"
            />
          ) : (
            <Circle
              size={40}
              weight="fill"
              className="rounded-3xl bg-zinc-50"
            />
          )}
          <span className="text-zinc-700 text-sm text-center">
            {order.status === 'canceled'
              ? 'Pedido cancelado'
              : 'Pedido concluído'}
          </span>
        </div>
      </div>
    </div>
  )
}
