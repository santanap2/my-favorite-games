/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useContext, useEffect } from 'react'
import ProductCard from '@/components/ProductCard'
import GamesPlatformContext from '@/context/Context'
import { useSearchParams } from 'next/navigation'
import { IGame, ISearchParams } from '@/interfaces'
import { pageTitle } from '@/helpers'
import { getGamesFiltered } from '@/services'
import ProductCardSkeleton from '@/components/Skeletons/ProductCardSkeleton'
import NotFoundProducts from '@/components/NotFoundProducts'
import LateralFilters from '@/components/LateralFilters'
import { useQuery } from '@tanstack/react-query'

export default function Home({ searchParams }: ISearchParams) {
  const {
    setShowSearchInputMobile,
    setRegisterResponse,
    setUserDataResponse,
    setLoginResponse,
    screenSize,
    setShowMenu,
  } = useContext(GamesPlatformContext)

  const headerSearch = useSearchParams().get('busca')
  const queryParams = new URLSearchParams(searchParams).toString()

  const { data, isLoading, refetch, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () =>
      await getGamesFiltered(new URLSearchParams(queryParams).toString()),
    retry: false,
    staleTime: 1000 * 60 * 3, // 3 minutes
  })

  useEffect(() => {
    refetch()
  }, [queryParams])

  useEffect(() => {
    setShowMenu({ myAccount: false, filters: true })
    if (screenSize < 1280) setShowMenu({ myAccount: false, filters: false })
    setShowSearchInputMobile(false)
    setRegisterResponse({ error: '', success: '' })
    setUserDataResponse({ error: '', success: '' })
    setLoginResponse({ error: '', success: '' })
  }, [])

  return (
    <div className="mt-24 xxl:mt-20 w-full transition-all">
      <title>{headerSearch ? `${pageTitle} - Busca` : `${pageTitle}`}</title>
      <LateralFilters />

      <div className="flex justify-center items-center w-full animation-opacity">
        <div
          className={`${
            error?.message === 'Request failed with status code 404'
              ? 'flex items-center justify-center'
              : 'grid grid-cols-6 auto-cols-auto gap-12 row-auto sm:grid sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 xxl:grid-cols-4 xxl:gap-6'
          }`}
        >
          {error?.message === 'Request failed with status code 404' ? (
            <NotFoundProducts />
          ) : (
            <>
              {isLoading ? (
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
                  <ProductCardSkeleton />
                  <ProductCardSkeleton />
                </>
              ) : (
                // data?.data.data
                // allGames
                data?.data.data.map((game: IGame) => (
                  <ProductCard
                    key={game.id}
                    name={game.name}
                    id={game.id}
                    categoryPt={game.category.namePt}
                    category={game.category.name}
                    price={game.price}
                    image={game.image}
                    description={game.description}
                  />
                ))
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
