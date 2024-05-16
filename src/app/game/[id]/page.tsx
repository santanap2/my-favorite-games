/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'

import PopUpFavorite from '@/components/PopUpFavorite'
import EvaluationsGame from '@/components/EvaluationsGame'
import LateralFilters from '@/components/LateralFilters'
import GamesPlatformContext from '@/context/Context'
import { pageTitle, portionPrice, priceToBRL } from '@/helpers'
import { IGame, IGameIDParams } from '@/interfaces'
import { addItemToCart } from '@/services'
import { buyOneItem } from '@/services/cart.requests'
import {
  addItemToFavorites,
  getAllFavorites,
} from '@/services/favorites.requests'
import { getGame } from '@/services/games.requests'
import {
  CaretDown,
  CaretRight,
  CaretUp,
  Heart,
  PlusCircle,
  ShoppingCartSimple,
} from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import GameIdSkeleton from '@/components/Skeletons/GameIdSkeleton'

export default function GameId({ params: { id } }: IGameIDParams) {
  const { setShowCart, showMenu, setShowMenu, loading, setLoading } =
    useContext(GamesPlatformContext)

  const [expandMenus, setExpandMenus] = useState({
    description: true,
    evaluation: true,
  })
  const [isFavorite, setIsFavorite] = useState(false)
  const [showPopupFavorite, setShowPopupFavorite] = useState(false)

  const router = useRouter()

  const {
    data: productData,
    refetch: productRefetch,
    isLoading: productIsLoading,
  } = useQuery({
    queryKey: ['product'],
    queryFn: async () => await getGame(id),
    retry: false,
  })

  const {
    data: favoritesData,
    refetch: favoritesRefetch,
    isFetched: favoritesIsFetched,
  } = useQuery({
    queryKey: ['favorites'],
    queryFn: async () => await getAllFavorites(),
    retry: false,
  })

  const alreadyFavorited = favoritesData?.data.data.products.some(
    (product: IGame) => product.id === Number(id),
  )

  const clickExpandMenu = (menu: string) => {
    if (menu === 'description')
      setExpandMenus({ ...expandMenus, description: !expandMenus.description })
    if (menu === 'evaluation')
      setExpandMenus({ ...expandMenus, evaluation: !expandMenus.evaluation })
  }

  useEffect(() => {
    setShowMenu({ ...showMenu, filters: false })
    productRefetch()
    favoritesRefetch()
  }, [])

  useEffect(() => {
    setIsFavorite(alreadyFavorited)
    favoritesRefetch()
  }, [favoritesIsFetched])

  useEffect(() => {
    if (showPopupFavorite === true) {
      setTimeout(() => setShowPopupFavorite(false), 2000)
    }
  }, [isFavorite])

  return (
    <div className="mt-24 xxl:mt-20 w-full h-full animation-opacity transition-all">
      <title>{`${productData?.data.data.name} - ${pageTitle}`}</title>
      <LateralFilters />
      {productIsLoading ? (
        <GameIdSkeleton />
      ) : (
        <div className="w-full h-full">
          <div className="flex flex-wrap items-center gap-1 w-fit text-sm sm:w-full sm:text-xs max-w-full">
            <Link
              href="/"
              className="text-zinc-300 hover:text-zinc-50 hover:underline min-w-fit"
            >
              Todos os jogos
            </Link>
            <CaretRight weight="light" className="text-zinc-300 text-base" />
            <Link
              href={`/home?${productData?.data.data.category.name}=true`}
              className="text-zinc-300 hover:text-zinc-50 hover:underline min-w-fit"
            >
              {productData?.data.data.category.namePt}
            </Link>

            <CaretRight weight="light" className="text-zinc-300 text-base" />

            <Link
              href={`/game/${id}`}
              className="text-zinc-300 hover:text-zinc-50 hover:underline min-w-fit"
            >
              {productData?.data.data.name}
            </Link>
          </div>
          <h1 className="mt-4 font-bold text-2xl text-zinc-100 sm:text-xl sm:mt-2">
            {productData?.data.data.name}
          </h1>

          <div className="flex gap-10 mt-10 w-4/5 sm:mt-2 sm:w-full sm:justify-center sm:items-center sm:flex-col sm:gap-4">
            <img
              src={productData?.data.data.image}
              alt={productData?.data.data.name}
              className="w-[300px] h-[400px] rounded shadow-md object-cover md:w-72 md:h-96"
            />
            <div className="flex flex-col justify-start items-start w-full h-full text-zinc-300 gap-2">
              <span className="font-light sm:text-sm">
                Vendido por: My Fav Games™
              </span>
              <div className="text-rose-500 text-4xl font-black sm:text-3xl">
                <span>{'R$ '}</span>
                <span>{priceToBRL(productData?.data.data.price * 0.9)}</span>
              </div>
              <div className="flex flex-col mt-6 text-zinc-300 sm:mt-0 sm:text-xs gap-1">
                <span>À vista no PIX com 10% de desconto</span>
                <span>{`Ou em até 3x de R$${portionPrice(
                  productData?.data.data.price,
                  3,
                )} sem juros no cartão de crédito`}</span>
              </div>
              <div className="flex gap-4 mt-20 sm:mt-6 sm:w-full sm:justify-center sm:items-center sm:gap-1">
                <button
                  onClick={async () => {
                    setLoading({ ...loading, cart: !loading.cart })
                    await buyOneItem(id.toString())
                    router.push('/finalizar-compra')
                  }}
                  className="w-64 h-14 bg-rose-500 rounded text-lg font-bold uppercase tracking-wider text-white shadow-sm hover:bg-rose-600 sm:w-3/5 sm:font-semibold sm:text-sm sm:h-12"
                >
                  Comprar agora
                </button>
                <button
                  type="button"
                  onClick={async () => {
                    setLoading({ ...loading, cart: !loading.cart })
                    await addItemToCart(id.toString())
                    setShowCart(true)
                  }}
                  className="w-14 h-14 bg-rose-500 rounded text-lg font-bold uppercase tracking-wider text-white flex items-center justify-center relative shadow-sm hover:bg-rose-600 sm:h-12 sm:w-12"
                >
                  <ShoppingCartSimple
                    weight="bold"
                    className="text-white relative text-3xl"
                  />
                  <PlusCircle
                    weight="fill"
                    className="absolute top-2 right-1 sm:top-1 sm:right-0 text-xl"
                  />
                </button>
                <button
                  onClick={async () => {
                    await addItemToFavorites(id.toString())
                    setIsFavorite(!isFavorite)
                    setShowPopupFavorite(true)
                  }}
                  className="w-14 h-14 bg-rose-500 rounded text-lg font-bold tracking-wider text-white flex items-center justify-center relative shadow-sm hover:bg-rose-600 sm:h-12 sm:w-12"
                >
                  <Heart
                    weight={isFavorite ? 'fill' : 'bold'}
                    className="text-white relative text-3xl"
                  />
                  {showPopupFavorite && (
                    <PopUpFavorite removeFavorite={!isFavorite} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 text-zinc-300 w-full flex flex-col gap-4">
            <div className="w-full border-b">
              <button
                className="tracking-wide flex gap-2 py-3 hover:underline sm:pb-2"
                onClick={() => clickExpandMenu('description')}
              >
                <span className="text-xl font-semibold sm:text-base">
                  Descrição
                </span>
                {expandMenus.description ? (
                  <CaretUp className="text-3xl" />
                ) : (
                  <CaretDown className="text-3xl" />
                )}
              </button>
              {expandMenus.description && (
                <div className="tracking-wide pb-8">
                  <h1 className=" font-normal text-lg sm:text-base">
                    {productData?.data.data.name}
                  </h1>
                  <p className="font-light text-base sm:text-sm">
                    {productData?.data.data.description}
                  </p>
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
                  <CaretUp className="text-3xl" />
                ) : (
                  <CaretDown className="text-3xl" />
                )}
              </button>
              {expandMenus.evaluation && <EvaluationsGame gameId={id} />}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
