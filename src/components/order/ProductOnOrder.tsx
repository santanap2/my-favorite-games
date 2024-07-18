/* eslint-disable @next/next/no-img-element */

import { priceToBRL } from '@/helpers'
import { IGame } from '@/interfaces'
import React from 'react'

export default function ProductOnOrder({
  image,
  name,
  category,
  price,
  description,
  indexAndLength,
}: IGame) {
  return (
    <div
      className={`flex w-[600px] gap-3 pb-4 sm:max-w-full sm:w-full sm:pb-2 animation-opacity transition-all text-zinc-300 ${
        indexAndLength && indexAndLength?.index === indexAndLength.lenght - 1
          ? ''
          : 'border-b border-zinc-900'
      }`}
    >
      <img
        src={image}
        alt={name}
        className="w-24 h-36 object-cover rounded-md sm:w-24"
      />

      <div className="flex flex-col items-start justify-center w-full">
        <h1 className="font-semibold text-lg tracking-tight w-full">{name}</h1>

        <div className="w-full h-full flex items-start justify-between">
          <div className="flex flex-col justify-between items-start text-sm font-light sm:text-sm sm:font-light w-full h-full">
            <h3>{category.namePt}</h3>
            <h4 className="text-xs max-h-16 sm:hidden text-zinc-500">{`${
              description.length > 160 ? description.slice(0, 160) : description
            }...`}</h4>
          </div>
          <div className="font-extrabold flex items-center justify-center text-base min-w-fit h-full ml-2">
            <h2>{`R$ ${priceToBRL(price)}`}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
