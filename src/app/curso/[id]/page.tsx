/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'

import EvaluationsCourse from '@/components/EvaluationsCourse'
import LateralMenu from '@/components/LateralMenu'
import CoursesPlatformContext from '@/context/Context'
import { courses } from '@/data/courses'
import { portionPrice, priceToBRL } from '@/helpers'
import { ICartItem, IParams } from '@/interfaces'
import {
  CaretDown,
  CaretRight,
  CaretUp,
  PlusCircle,
  ShoppingCartSimple,
} from '@phosphor-icons/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

export default function CursoId({ params: { id } }: IParams) {
  const [expandMenus, setExpandMenus] = useState({
    description: true,
    evaluation: true,
  })

  const { cart, setCart, setShowCart, showMenu, setShowMenu } = useContext(
    CoursesPlatformContext,
  )

  const course = courses.find((one) => one.id === Number(id))
  const { name, area, price, image, description } = course

  useEffect(() => setShowMenu({ ...showMenu, filters: false }), [])
  const router = useRouter()

  const clickExpandMenu = (menu: string) => {
    if (menu === 'description')
      setExpandMenus({ ...expandMenus, description: !expandMenus.description })
    if (menu === 'evaluation')
      setExpandMenus({ ...expandMenus, description: !expandMenus.evaluation })
  }

  const addCartItem = (item: ICartItem) => {
    setShowCart(true)
    setCart((prev: ICartItem[]) => {
      if (prev.includes(item)) {
        setCart(prev)
      } else {
        setCart([...cart, item])
      }
    })
  }

  return (
    <div className="ml-64 mt-24 w-full h-full">
      <LateralMenu />
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

        <div className="flex gap-10 mt-10 w-4/5">
          <img
            src={image}
            alt={name}
            className="w-[640px] h-[400px] rounded-md shadow-md object-cover"
          />
          <div className="flex flex-col justify-start items-start  w-full h-full text-zinc-600">
            <span>Vendido por: My Fav Courses™</span>
            <div className="text-sky-500 text-4xl font-black">
              <span>{'R$ '}</span>
              <span>{priceToBRL(price * 0.9)}</span>
            </div>
            <div className="flex flex-col mt-6 text-zinc-500">
              <span>À vista no PIX com 10% de desconto</span>
              <span>{`Ou em até 3x de R$${portionPrice(
                price,
                3,
              )} sem juros no cartão de crédito`}</span>
            </div>
            <div className="flex gap-4 mt-20">
              <button
                onClick={() => {
                  setCart([course])
                  router.push('/finalizar-compra')
                }}
                className="w-64 h-14 bg-sky-400 rounded-md text-lg font-bold uppercase tracking-wider text-white shadow-sm hover:shadow-lg"
              >
                Comprar agora
              </button>
              <button
                onClick={() => addCartItem(course)}
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
            {expandMenus.description && (
              <div className="tracking-wide pb-8">
                <h1 className=" font-normal text-lg">{name}</h1>
                <p className="font-light text-base">{description}</p>
              </div>
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
            {expandMenus.evaluation && <EvaluationsCourse />}
          </div>
        </div>
      </div>
    </div>
  )
}
