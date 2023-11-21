/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { ICard } from '@/interfaces'

export default function Card({ name, area, price, image }: ICard) {
  return (
    <div className="flex flex-col w-80 bg-zinc-200 rounded-lg relative items-center justify-center hover:shadow-lg cursor-pointer">
      <div className="w-full h-40 bg-sky-400 rounded-t-lg" />
      <img
        src={image}
        alt={name}
        className="rounded-lg h-48 w-72 absolute top-4 object-cover"
      />
      <div className="flex flex-col gap-10 justify-between items-start mt-12 p-4 relative">
        <h1 className="font-extrabold text-xl text-zinc-800 w-full">{name}</h1>
        <div className="bg-zinc-400 w-72 h-px absolute top-24" />
        <div className="flex items-start justify-between w-full">
          <h2 className="font-bold">{area}</h2>
          <div className="bg-orange-400 flex items-center justify-center w-24 h-24 rounded-lg relative">
            <span className="absolute text-sm top-3 left-2">R$</span>
            <span className="text-2xl font-extrabold">
              {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
