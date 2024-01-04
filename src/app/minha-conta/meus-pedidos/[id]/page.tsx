import { IGameIDParams } from '@/interfaces'
import React from 'react'

export default function PedidoId({ params: { id } }: IGameIDParams) {
  return <div className="mt-24">{`Detalhes do pedido ${id}`}</div>
}
