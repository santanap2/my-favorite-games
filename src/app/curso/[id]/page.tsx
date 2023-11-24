/* eslint-disable @next/next/no-img-element */
'use client'

import DescriptionCourse from '@/components/DescriptionCourse'
import EvaluationsCourse from '@/components/EvaluationsCourse'
import LateralFilters from '@/components/LateralFilters'
import CoursesPlatformContext from '@/context/Context'
import { courses } from '@/data/courses'
import { IParams } from '@/interfaces'
import {
  CaretDown,
  CaretRight,
  CaretUp,
  PlusCircle,
  ShoppingCartSimple,
} from '@phosphor-icons/react'
import Link from 'next/link'
import React, { useContext, useState } from 'react'

export default function Page({ params: { id } }: IParams) {
  const [expandMenus, setExpandMenus] = useState({
    description: true,
    evaluation: true,
  })

  const course = courses.find((one) => one.id === Number(id))

  const { name, area, price, image, description } = course
  const convertedPrice = Number((price * 0.9).toFixed(2)).toLocaleString(
    'pt-BR',
    {
      minimumFractionDigits: 2,
    },
  )

  const { cart, setCart } = useContext(CoursesPlatformContext)

  const portionPrice = (price: number, portions: number) => {
    const portion = price / portions
    return Number(portion.toFixed(2)).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
    })
  }

  const clickExpandMenu = (menu: string) => {
    setExpandMenus({ ...expandMenus, [menu]: !expandMenus[menu] })
  }

  return (
    <div className="ml-64 mt-32 w-full h-full">
      <LateralFilters />
      <div className="w-full h-full">
        <div className="flex gap-1 justify-center items-center w-fit">
          <Link href="/" className="text-zinc-500 hover:text-sky-400">
            Início
          </Link>
          <CaretRight size={16} weight="light" className="text-zinc-500" />
          <Link
            href={`/cursos/${area}`}
            className="text-zinc-500 hover:text-sky-400"
          >
            {area}
          </Link>
        </div>
        <h1 className="mt-4 font-bold text-2xl text-zinc-800">{name}</h1>

        <div className="flex gap-16 mt-10 w-4/5">
          <img
            src={image}
            alt={name}
            className="w-[640px] h-[400px] rounded-lg shadow-md object-cover"
          />
          <div className="flex flex-col justify-start items-start  w-full h-full text-zinc-600">
            <span>Vendido por: My Fav Courses™</span>
            <div className="text-sky-500 text-4xl font-black">
              <span>{'R$ '}</span>
              <span>{convertedPrice}</span>
            </div>
            <div className="flex flex-col mt-6 text-zinc-500">
              <span>À vista no PIX com 10% de desconto</span>
              <span>{`Ou em até 3x de R$${portionPrice(
                price,
                3,
              )} sem juros no cartão de crédito`}</span>
            </div>
            <div className="flex gap-4 mt-20">
              <button className="w-64 h-14 bg-sky-400 rounded-md text-lg font-bold uppercase tracking-wider text-white shadow-sm hover:shadow-lg">
                Comprar agora
              </button>
              <button
                onClick={() => setCart([...cart, course])}
                className="w-14 h-14 bg-sky-400 rounded-md text-lg font-bold uppercase tracking-wider text-white flex items-center justify-center relative shadow-sm hover:shadow-lg"
              >
                <ShoppingCartSimple
                  size={28}
                  weight="bold"
                  className="text-white relative"
                />
                <PlusCircle
                  size={20}
                  weight="fill"
                  className="absolute top-2 right-1"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 font-semibold text-xl text-zinc-500 w-4/5 flex flex-col gap-4">
          <div className="w-full border-b">
            <button
              className="tracking-wide flex gap-2 py-3 hover:underline"
              onClick={() => clickExpandMenu('description')}
            >
              <span>Descrição</span>
              {expandMenus.description ? (
                <CaretUp size={28} />
              ) : (
                <CaretDown size={28} />
              )}
            </button>
            {expandMenus.description ? (
              <DescriptionCourse name={name} text={description} />
            ) : (
              ''
            )}
          </div>

          <div className="w-full border-b">
            <button
              className="tracking-wide flex gap-2 py-3 hover:underline"
              onClick={() => clickExpandMenu('evaluation')}
            >
              <span>Avaliações</span>
              {expandMenus.evaluation ? (
                <CaretUp size={28} />
              ) : (
                <CaretDown size={28} />
              )}
            </button>
            {expandMenus.evaluation ? <EvaluationsCourse /> : ''}
          </div>
        </div>
      </div>
    </div>
  )
}
