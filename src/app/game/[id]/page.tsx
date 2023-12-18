/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'

import EvaluationsGame from '@/components/EvaluationsGame'
import LateralMenu from '@/components/LateralMenu'
import GamesPlatformContext from '@/context/Context'
import { games } from '@/data/games'
import { pageTitle, portionPrice, priceToBRL } from '@/helpers'
import { IGame, IGameIDParams } from '@/interfaces'
import {
  ArrowUUpLeft,
  CaretDown,
  CaretRight,
  CaretUp,
  Heart,
  PlusCircle,
  ShoppingCartSimple,
} from '@phosphor-icons/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

export default function GameId({ params: { id } }: IGameIDParams) {
  const [expandMenus, setExpandMenus] = useState({
    description: true,
    evaluation: true,
  })

  const [isFavorite, setIsFavorite] = useState(false)

  const {
    cart,
    setCart,
    setShowCart,
    showMenu,
    setShowMenu,
    setFilteredProducts,
  } = useContext(GamesPlatformContext)

  useEffect(() => setShowMenu({ ...showMenu, filters: false }), [])
  const router = useRouter()

  const clickExpandMenu = (menu: string) => {
    if (menu === 'description')
      setExpandMenus({ ...expandMenus, description: !expandMenus.description })
    if (menu === 'evaluation')
      setExpandMenus({ ...expandMenus, evaluation: !expandMenus.evaluation })
  }

  const addCartItem = (item: IGame) => {
    setShowCart(true)
    const isItemInCart = cart.some((cartItem) => cartItem.id === item.id)
    if (!isItemInCart) setCart([...cart, item])
  }

  const game = games.find((one) => one.id === Number(id))
  if (!game)
    return (
      <div className="mt-24 xxl:mt-20 w-full h-full flex flex-col items-center justify-center gap-10">
        <title>{`${pageTitle} - Produto não encontrado`}</title>

        <LateralMenu />
        <h1 className="text-sm font-regular">
          Produto não encontrado, tente novamente.
        </h1>
        <button
          onClick={() => router.push('/home')}
          className="flex gap-3 items-center justify-center px-8 py-2 bg-sky-400 rounded text-sm font-semibold uppercase tracking-wider text-white shadow-sm hover:shadow-lg sm:w-3/5 sm:font-semibold sm:text-sm sm:h-12"
        >
          <ArrowUUpLeft size={28} />
          <span>Retornar ao início</span>
        </button>
      </div>
    )

  const { name, area, areaPt, price, image, description } = game

  return (
    <div className="mt-24 xxl:mt-20 w-full h-full">
      <title>{`${pageTitle} - ${name}`}</title>
      <LateralMenu />
      <div className="w-full h-full">
        <div className="flex items-center gap-1 w-fit sm:w-full sm:text-xs">
          <Link
            href="/"
            className="text-zinc-500 hover:text-sky-400"
            onClick={() => setFilteredProducts(games)}
          >
            Início
          </Link>
          <CaretRight size={16} weight="light" className="text-zinc-500" />
          <Link
            onClick={() =>
              setFilteredProducts(games.filter((item) => item.area === area))
            }
            href={`/home`}
            className="text-zinc-500 hover:text-sky-400"
          >
            {areaPt}
          </Link>
        </div>
        <h1 className="mt-4 font-bold text-2xl text-zinc-800 sm:text-xl sm:mt-2">
          {name}
        </h1>

        <div className="flex gap-10 mt-10 w-4/5 sm:mt-2 sm:w-full sm:justify-center sm:items-center sm:flex-col sm:gap-4">
          <img
            src={image}
            alt={name}
            className="w-[300px] h-[400px] rounded shadow-md object-cover sm:w-4/5 sm:h-96 md:w-72 md:h-96"
          />
          <div className="flex flex-col justify-start items-start w-full h-full text-zinc-600">
            <span className="font-light sm:text-sm">
              Vendido por: My Fav Games™
            </span>
            <div className="text-sky-500 text-4xl font-black sm:text-3xl">
              <span>{'R$ '}</span>
              <span>{priceToBRL(price * 0.9)}</span>
            </div>
            <div className="flex flex-col mt-6 text-zinc-500 sm:mt-0 sm:text-xs">
              <span>À vista no PIX com 10% de desconto</span>
              <span>{`Ou em até 3x de R$${portionPrice(
                price,
                3,
              )} sem juros no cartão de crédito`}</span>
            </div>
            <div className="flex gap-4 mt-20 sm:mt-6 sm:w-full sm:justify-center sm:items-center sm:gap-1">
              <button
                onClick={() => {
                  setCart([game])
                  router.push('/finalizar-compra')
                }}
                className="w-64 h-14 bg-sky-400 rounded text-lg font-bold uppercase tracking-wider text-white shadow-sm hover:shadow-lg sm:w-3/5 sm:font-semibold sm:text-sm sm:h-12"
              >
                Comprar agora
              </button>
              <button
                onClick={() => addCartItem(game)}
                className="w-14 h-14 bg-sky-400 rounded text-lg font-bold uppercase tracking-wider text-white flex items-center justify-center relative shadow-sm hover:shadow-lg sm:h-12 sm:w-12"
              >
                <ShoppingCartSimple
                  size={28}
                  weight="bold"
                  className="text-white relative"
                />
                <PlusCircle
                  size={20}
                  weight="fill"
                  className="absolute top-2 right-1 sm:top-1 sm:right-0"
                />
              </button>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="w-14 h-14 bg-sky-400 rounded text-lg font-bold uppercase tracking-wider text-white flex items-center justify-center relative shadow-sm hover:shadow-lg sm:h-12 sm:w-12"
              >
                <Heart
                  size={28}
                  weight={isFavorite ? 'fill' : 'bold'}
                  className="text-white relative"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 text-zinc-500 w-full flex flex-col gap-4">
          <div className="w-full border-b">
            <button
              className="tracking-wide flex gap-2 py-3 hover:underline sm:pb-2"
              onClick={() => clickExpandMenu('description')}
            >
              <span className="text-xl font-semibold sm:text-base">
                Descrição
              </span>
              {expandMenus.description ? (
                <CaretUp size={28} />
              ) : (
                <CaretDown size={28} />
              )}
            </button>
            {expandMenus.description && (
              <div className="tracking-wide pb-8">
                <h1 className=" font-normal text-lg sm:text-base">{name}</h1>
                <p className="font-light text-base sm:text-sm">{description}</p>
              </div>
            )}
          </div>

          <div className={`w-full ${!expandMenus.evaluation && 'border-b'}`}>
            <button
              className="tracking-wide flex gap-2 py-3 hover:underline sm:pb-2"
              onClick={() => clickExpandMenu('evaluation')}
            >
              <span className="text-xl font-semibold sm:text-base ">
                Avaliações
              </span>
              {expandMenus.evaluation ? (
                <CaretUp size={28} />
              ) : (
                <CaretDown size={28} />
              )}
            </button>
            {expandMenus.evaluation && <EvaluationsGame />}
          </div>
        </div>
      </div>
    </div>
  )
}
