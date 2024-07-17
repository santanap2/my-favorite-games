/* eslint-disable @next/next/no-img-element */
'use client'

import { CaretUp, CaretDown } from '@phosphor-icons/react/dist/ssr'
import React, { useState } from 'react'
import { IGame } from '@/interfaces'
import { priceToBRL } from '@/helpers'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselItem,
} from '../ui/carousel'

export default function GameDetails({
  id,
  name,
  description,
  similarGames,
}: {
  id: string
  name: string
  description: string
  similarGames: IGame[]
}) {
  const [expandMenus, setExpandMenus] = useState({
    description: !(description.length > 700),
    evaluation: true,
    similar: true,
  })

  const clickExpandMenu = (menu: string) => {
    if (menu === 'description')
      setExpandMenus({ ...expandMenus, description: !expandMenus.description })
    if (menu === 'evaluation')
      setExpandMenus({ ...expandMenus, evaluation: !expandMenus.evaluation })
    if (menu === 'similar')
      setExpandMenus({ ...expandMenus, similar: !expandMenus.similar })
  }

  const formatDescription = (text: string) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))
  }

  return (
    <div className="text-stone-300 h-full flex flex-col xxl:max-w-4xl max-w-2xl w-full">
      <div className="w-full border-b border-stone-700 py-6">
        <button
          className="tracking-wide flex gap-2 hover:underline"
          onClick={() => clickExpandMenu('description')}
        >
          <span className="text-base font-semibold sm:text-base">
            Descrição
          </span>
          {expandMenus.description ? (
            <CaretUp className="text-xl" />
          ) : (
            <CaretDown className="text-xl" />
          )}
        </button>
        {expandMenus.description && (
          <div className="mt-4 sm:mt-2">
            <h1 className=" font-medium text-base sm:text-sm">{name}</h1>
            <p className="text-sm">{formatDescription(description)}</p>
          </div>
        )}
      </div>

      <div className="w-full py-6">
        <button
          className="tracking-wide flex gap-2 hover:underline"
          onClick={() => clickExpandMenu('similar')}
        >
          <span className="flex items-center space-x-3 text-base font-semibold sm:text-base">
            Jogos similares
          </span>
          {expandMenus.similar ? (
            <CaretUp className="text-xl" />
          ) : (
            <CaretDown className="text-xl" />
          )}
        </button>

        {expandMenus.similar && (
          <Carousel
            className="mt-4 sm:mt-2 flex items-center justify-between w-full px-12 relative"
            opts={{
              align: 'start',
              loop: false,
            }}
          >
            <CarouselPrevious className="text-stone-300 -950 bg-stone-300 bg-opacity-30 border-none rounded-full p-2 absolute top-auto left-0" />

            <CarouselContent className="w-full -ml-4">
              {similarGames
                .filter((game) => game.id.toString() !== id)
                .map(({ id, name, price, image }) => (
                  <CarouselItem key={id} className="basis-32 h-56 pl-4">
                    <Link
                      href={`/game/${id}`}
                      className="flex w-full h-full flex-col justify-between items-start"
                    >
                      <img
                        src={image}
                        alt={name}
                        className="w-32 h-40 rounded-md object-cover"
                      />
                      <div className="flex flex-col justify-between items-start w-full h-16">
                        <span className="text-sm font-bold">
                          {name.length > 20 ? `${name.slice(0, 20)}...` : name}
                        </span>
                        <span className="text-sm font-bold">{`R$ ${priceToBRL(price)}`}</span>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselNext className="text-stone-300 -950 bg-stone-300 bg-opacity-30 border-none rounded-full p-2 absolute top-auto right-0" />
          </Carousel>
        )}
      </div>
    </div>
  )
}
