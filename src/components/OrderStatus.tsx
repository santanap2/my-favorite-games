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
    if (order.status === 'awaitingPayment') return 'w-1/6 bg-indigo-500'
    if (order.status === 'approvedPayment') return 'w-3/6 bg-indigo-500'
    if (order.status === 'processing') return 'w-4/5 bg-indigo-500'
    if (order.status === 'concluded') return 'w-6/6 bg-indigo-500'
    if (order.status === 'canceled') return 'w-6/6 bg-indigo-500'
  }

  return (
    <div className="flex w-[463px] sm:max-w-full sm:w-full h-40 gap-16 items-center justify-center text-neutral-200 relative">
      <div className="bg-neutral-500 h-2 w-[400px] absolute left-10 bottom-14 z-0 sm:w-[300px] xs:w-[250px] animation-opacity transition-all">
        <div className={`${checkOrderStatus()} relative h-2 z-10`} />
      </div>

      <div className="w-20 flex flex-col gap-4 items-center justify-center absolute left-0 z-10">
        <Storefront
          weight="fill"
          className="rounded-3xl bg-neutral-900 p-2 border-2 border-indigo-500 text-indigo-500 sm:p-1 text-6xl"
        />
        <div className="flex flex-col items-center justify-center h-full">
          <CheckCircle
            weight="fill"
            className="text-indigo-500 rounded-3xl bg-neutral-900 text-4xl"
          />
          <span className="text-neutral-300 text-sm text-center">
            Pedido realizado
          </span>
        </div>
      </div>

      <div className="w-20 flex flex-col gap-4 items-center justify-center absolute left-32 z-10 sm:left-24 xs:left-20">
        <CurrencyCircleDollar
          weight={
            order.status === 'approvedPayment' ||
            order.status === 'processing' ||
            order.status === 'concluded' ||
            order.status === 'canceled'
              ? 'fill'
              : 'regular'
          }
          className={`${
            order.status === 'awaitingPayment'
              ? 'text-neutral-500'
              : 'text-indigo-500'
          } ${
            order.status === 'approvedPayment' ||
            order.status === 'processing' ||
            order.status === 'concluded'
              ? 'text-indigo-500 border-indigo-500'
              : order.status === 'canceled'
                ? 'text-indigo-500 border-indigo-500'
                : 'border-neutral-500'
          } rounded-3xl bg-neutral-900 p-2 border-2 sm:p-1 text-6xl`}
        />

        <div className="flex flex-col items-center justify-center">
          {order.status === 'canceled' ? (
            <XCircle
              weight="fill"
              className=" rounded-3xl bg-neutral-900 text-indigo-500 text-4xl"
            />
          ) : order.status === 'approvedPayment' ||
            order.status === 'processing' ||
            order.status === 'concluded' ? (
            <CheckCircle
              weight="fill"
              className="rounded-3xl bg-neutral-900 text-indigo-500 text-4xl"
            />
          ) : (
            <Circle
              weight="fill"
              className="rounded-3xl bg-neutral-500 text-4xl text-neutral-500"
            />
          )}
          <span className="text-neutral-300 text-sm text-center">
            Pagamento confirmado
          </span>
        </div>
      </div>

      <div className="w-20 flex flex-col gap-4 items-center justify-center absolute left-64 z-10 sm:left-48 xs:left-40">
        <HourglassMedium
          weight={
            order.status === 'processing' ||
            order.status === 'concluded' ||
            order.status === 'canceled'
              ? 'fill'
              : 'regular'
          }
          className={`${
            order.status === 'processing' || order.status === 'concluded'
              ? 'text-indigo-500'
              : 'text-neutral-500'
          } ${
            order.status === 'processing' || order.status === 'concluded'
              ? 'text-indigo-500 border-indigo-500'
              : order.status === 'canceled'
                ? 'text-indigo-500 border-indigo-500'
                : 'border-neutral-500'
          } rounded-3xl bg-neutral-900 p-2 border-2 sm:p-1 text-6xl`}
        />
        <div className="flex flex-col items-center justify-center">
          {order.status === 'canceled' ? (
            <XCircle
              weight="fill"
              className=" rounded-3xl bg-neutral-900 text-indigo-500 text-4xl"
            />
          ) : order.status === 'processing' || order.status === 'concluded' ? (
            <CheckCircle
              weight="fill"
              className="rounded-3xl bg-neutral-900 text-indigo-500 text-4xl"
            />
          ) : (
            <Circle
              weight="fill"
              className="rounded-3xl bg-neutral-500 text-neutral-500 text-4xl"
            />
          )}
          <span className="text-neutral-300 text-sm text-center">
            Processando pedido
          </span>
        </div>
      </div>

      <div className="w-20 flex flex-col gap-4 items-center justify-center absolute left-96 z-10 sm:left-72 xs:left-60">
        <Package
          weight={
            order.status === 'concluded' || order.status === 'canceled'
              ? 'fill'
              : 'regular'
          }
          className={`${
            order.status === 'concluded' ? 'text-indigo-500' : 'text-neutral-500'
          } ${
            order.status === 'concluded'
              ? 'text-indigo-500 border-indigo-500'
              : order.status === 'canceled'
                ? 'text-indigo-500 border-indigo-500'
                : 'border-neutral-500'
          } rounded-3xl bg-neutral-900 p-2 border-2 sm:p-1 text-6xl`}
        />
        <div className="flex flex-col items-center justify-center">
          {order.status === 'canceled' ? (
            <XCircle
              weight="fill"
              className=" rounded-3xl bg-neutral-900 text-indigo-500 text-4xl"
            />
          ) : order.status === 'concluded' ? (
            <CheckCircle
              weight="fill"
              className="rounded-3xl bg-neutral-900 text-indigo-500 text-4xl"
            />
          ) : (
            <Circle
              weight="fill"
              className="rounded-3xl bg-neutral-500 text-neutral-500 text-4xl"
            />
          )}
          <span className="text-neutral-300 text-sm text-center">
            {order.status === 'canceled'
              ? 'Pedido cancelado'
              : 'Pedido concluído'}
          </span>
        </div>
      </div>
    </div>
  )
}
