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
      className={`flex w-[600px] gap-3 pb-4 sm:max-w-full sm:w-full sm:pb-2 animation-opacity transition-all ${
        indexAndLength && indexAndLength?.index === indexAndLength.lenght - 1
          ? ''
          : 'border-b border-zinc-600'
      }`}
    >
      <img
        src={image}
        alt={name}
        className="w-24 h-36 object-cover rounded sm:w-24"
      />

      <div className="flex flex-col items-start justify-center w-full">
        <h1 className="font-semibold text-lg tracking-tight text-emerald-600 w-full">
          {name}
        </h1>

        <div className="w-full h-full flex items-start justify-between">
          <div className="flex flex-col justify-between items-start text-sm font-light sm:text-sm sm:font-light w-full h-full">
            <h3>{category.namePt}</h3>
            <h4 className="text-xs max-h-16 sm:hidden">{`${
              description.length > 160 ? description.slice(0, 160) : description
            }...`}</h4>
          </div>
          <div className="font-black flex items-center justify-center text-emerald-600 tracking-wide text-lg sm:text-base sm:font-extrabold min-w-fit h-full">
            <h2>{`R$ ${priceToBRL(price)}`}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
