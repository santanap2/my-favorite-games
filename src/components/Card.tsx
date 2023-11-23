/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { ICard } from '@/interfaces'
import Link from 'next/link'
// import CoursesPlatformContext from '@/context/Context'

export default function Card({ name, area, price, image, id }: ICard) {
  const checkPrice = () => {
    if (price < 120) return 'bg-green-400'
    if (price < 280) return 'bg-yellow-400'
    if (price < 400) return 'bg-orange-400'
    return 'bg-red-400'
  }

  // const { cart, setCart } = useContext(CoursesPlatformContext)

  // const addCart = () => {
  //   setCart([...cart, 'pedido 1'])
  // }

  return (
    <Link href={`/curso/${id}`}>
      <div className="flex flex-col w-80 bg-zinc-200 rounded-lg relative items-center justify-center hover:shadow-lg cursor-pointer">
        <div className="w-full h-40 bg-sky-400 rounded-t-lg" />
        <img
          src={image}
          alt={name}
          className="rounded-lg h-48 w-72 absolute top-4 object-cover"
        />
        <div className="flex flex-col gap-10 justify-between items-start mt-12 p-4 relative">
          <h1 className="font-semibold text-xl text-zinc-800 w-full">{name}</h1>
          <div className="bg-zinc-400 w-72 h-px absolute top-24" />
          <div className="flex items-start justify-between w-full">
            <h2 className="font-regular">{area}</h2>
            <div
              className={`${checkPrice()} flex items-center justify-center w-24 h-24 rounded-lg relative`}
            >
              <span className="absolute text-sm top-3 left-2">R$</span>
              <span className="text-2xl font-bold">
                {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
            </div>
          </div>
          {/* <button type="button" onClick={addCart}>
          Add cart
        </button> */}
        </div>
      </div>
    </Link>
  )
}
