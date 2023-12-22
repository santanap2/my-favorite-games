/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'
import LateralMenu from '@/components/LateralMenu'
import GamesPlatformContext from '@/context/Context'
import { useRouter, useSearchParams } from 'next/navigation'
import { IGame } from '@/interfaces'
import { pageTitle } from '@/helpers'
import { ArrowUUpLeft } from '@phosphor-icons/react'
import { getAllGames } from '@/services/requests'
import NotFoundProducts from '@/components/NotFoundProducts'
import ProductCardSkeleton from '@/components/ProductCardSkeleton'

export default function Home() {
  const {
    filteredProducts,
    setFilteredProducts,
    setShowSearchInputMobile,
    setRegisterResponse,
    setUserDataResponse,
    setLoginResponse,
  } = useContext(GamesPlatformContext)

  const [gamesAPI, setGamesAPI] = useState<IGame[]>([])

  const searchParams = useSearchParams()
  const headerSearch = searchParams.get('busca')
  const router = useRouter()

  useEffect(() => {
    if (headerSearch) {
      const filteredBySearch = gamesAPI.filter((item: IGame) =>
        item.name.toLowerCase().includes(headerSearch.toLowerCase()),
      )
      setFilteredProducts(filteredBySearch)
    }
  }, [headerSearch])

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { data },
      } = await getAllGames()

      setGamesAPI(data)
    }

    fetchData()
    setShowSearchInputMobile(false)
    setRegisterResponse({ error: '', success: '' })
    setUserDataResponse({ error: '', success: '' })
    setLoginResponse({ error: '', success: '' })
  }, [])

  return (
    <div className="mt-24 xxl:mt-20 w-full">
      <title>{headerSearch ? `${pageTitle} - Busca` : `${pageTitle}`}</title>
      <LateralMenu />

      <div className="flex justify-center items-center w-full">
        <div
          // className={`${
          //   gamesAPI.length === 0
          //     ? 'flex items-center justify-center'
          //     : 'grid grid-cols-5 gap-x-9 gap-y-6 row-auto sm:grid sm:grid-cols-2 sm:w-screen sm:gap-4 lg:grid-cols-3 xxl:grid-cols-4 xxl:gap-6'
          // }`}
          className="grid grid-cols-5 gap-x-9 gap-y-6 row-auto sm:grid sm:grid-cols-2 sm:w-screen sm:gap-4 lg:grid-cols-3 xxl:grid-cols-4 xxl:gap-6"
        >
          {gamesAPI.length > 0 ? (
            gamesAPI.map((game: IGame) => (
              <ProductCard
                key={game.id}
                name={game.name}
                id={game.id}
                genre={game.genre}
                genrePt={game.genrePt}
                price={game.price}
                image={game.image}
                description={game.description}
              />
            ))
          ) : (
            <>
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
