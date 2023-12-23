/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'
import LateralMenu from '@/components/LateralMenu'
import GamesPlatformContext from '@/context/Context'
import { useSearchParams } from 'next/navigation'
import { IGame, ISearchParams } from '@/interfaces'
import { pageTitle } from '@/helpers'
import { getGamesFiltered } from '@/services/requests'
import ProductCardSkeleton from '@/components/ProductCardSkeleton'
import NotFoundProducts from '@/components/NotFoundProducts'

export default function Home({ searchParams }: ISearchParams) {
  const {
    setShowSearchInputMobile,
    setRegisterResponse,
    setUserDataResponse,
    setLoginResponse,
    screenSize,
    setShowMenu,
  } = useContext(GamesPlatformContext)

  const [gamesAPI, setGamesAPI] = useState<IGame[]>([])
  const [notFoundGames, setNotFoundGames] = useState<boolean>(false)

  const headerSearch = useSearchParams().get('busca')
  const queryParams = new URLSearchParams(searchParams).toString()

  const fetchData = async () => {
    const response = await getGamesFiltered(
      new URLSearchParams(queryParams).toString(),
    ).catch((error) => {
      if (error.response.status === 404) {
        setNotFoundGames(true)
      }
      setGamesAPI(error.response.data.data)
    })

    if (response?.data.data) setGamesAPI(response.data.data)
  }

  useEffect(() => {
    fetchData()
    if (screenSize < 1280) setShowMenu({ myAccount: false, filters: false })
    setShowSearchInputMobile(false)
    setRegisterResponse({ error: '', success: '' })
    setUserDataResponse({ error: '', success: '' })
    setLoginResponse({ error: '', success: '' })
  }, [queryParams])

  return (
    <div className="mt-24 xxl:mt-20 w-full">
      <title>{headerSearch ? `${pageTitle} - Busca` : `${pageTitle}`}</title>
      <LateralMenu />

      <div className="flex justify-center items-center w-full">
        <div
          className={`${
            notFoundGames
              ? 'flex items-center justify-center'
              : 'grid grid-cols-5 gap-x-9 gap-y-6 row-auto sm:grid sm:grid-cols-2 sm:w-screen sm:gap-4 lg:grid-cols-3 xxl:grid-cols-4 xxl:gap-6'
          }`}
        >
          {notFoundGames ? (
            <NotFoundProducts />
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  )
}
