/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { ICard } from '@/interfaces'
import Link from 'next/link'
import { priceToBRL } from '@/helpers'

export default function ProductCard({ name, areaPt, price, image, id }: ICard) {
  return (
    <Link href={`/curso/${id}`}>
      <div className="flex flex-col w-80 bg-zinc-100 rounded-md relative items-center justify-center shadow-md hover:shadow-lg cursor-pointe h-[450px]">
        <div className="w-full h-44 absolute top-0 bg-sky-400 rounded-t-md" />
        <img
          src={image}
          alt={name}
          className="rounded-md h-48 w-72 absolute top-4 left-4 right-4 object-cover"
        />
        <div className="flex flex-col gap-10 justify-between items-start mt-48 p-4 relative w-full">
          <h1 className="font-semibold text-xl text-zinc-800 w-full h-20">
            {name.length > 70 ? `${name.slice(0, 70)}...` : name}
          </h1>
          <div className="bg-zinc-400 w-72 h-px absolute top-24" />
          <div className="flex items-start justify-between w-72 h-24 max-w-72 max-h-48">
            <h2 className="font-regular w-48 h-full max-w-48">{areaPt}</h2>
            <div className="flex items-center justify-center w-24 h-24 rounded-md relative bg-sky-400">
              <span className="absolute text-sm top-3 left-2">R$</span>
              <span className="text-2xl font-bold">
                {priceToBRL(price).length > 6
                  ? `${price.toString().slice(0, 4)},`
                  : priceToBRL(price)}
                <span className="absolute bottom-1 right-2">
                  {priceToBRL(price).length > 6 &&
                    `${priceToBRL(price).slice(6, 8)}`}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
