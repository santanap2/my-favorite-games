/* eslint-disable @next/next/no-img-element */
'use server'

import React from 'react'
import { ICard } from '@/interfaces'
import Link from 'next/link'
import ProductCardForm from './ProductCardForm'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'
import { getServerSession } from 'next-auth'

export default async function ProductCard({
  name,
  category,
  categoryPt,
  price,
  image,
  id,
}: ICard) {
  const session = await getServerSession(nextAuthOptions)
  const email = session?.user?.email as string

  return (
    <div className="w-40 flex flex-col h-fit items-center justify-start rounded">
      <Link href={`/game/${id}`} className="w-fit">
        <div className="w-40 h-60 overflow-hidden inline-block rounded-md shadow-[0_0px_5px_rgba(0,0,0,0.2)]">
          <img
            src={image}
            alt={name}
            className={`object-cover transition-all duration-500 w-40 h-full rounded-md hover:scale-110`}
          />
        </div>
      </Link>

      <div className="w-full h-fit flex flex-col justify-between items-start xl:h-fit">
        <div className="flex flex-col gap-1 h-20 mt-1">
          <Link href={`/game/${id}`} className="w-fit">
            <h1 className="font-semibold text-base text-white w-fit max-h-20 sm:text-base sm:max-h-11 hover:underline">
              {name.length > 26 ? `${name.slice(0, 27)}...` : name}
            </h1>
          </Link>

          <Link href={`/home?${category}=true`} className=" w-fit">
            <h2 className="text-sm w-fit sm:text-xs sm:h-8 hover:underline text-neutral-500">
              {categoryPt}
            </h2>
          </Link>
        </div>

        <ProductCardForm
          email={email}
          id={id}
          price={price}
          session={session}
        />
      </div>
    </div>
  )
}
