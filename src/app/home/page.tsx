/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useContext, useEffect } from 'react'
import ProductCard from '@/components/ProductCard'
import LateralMenu from '@/components/LateralMenu'
import GamesPlatformContext from '@/context/Context'
import { useSearchParams } from 'next/navigation'
import { IGame } from '@/interfaces'
import { games } from '@/data/games'

export default function Home() {
  const { showMenu, setShowMenu, filteredProducts, setFilteredProducts } =
    useContext(GamesPlatformContext)

  const searchParams = useSearchParams()
  const headerSearch = searchParams.get('busca')

  useEffect(() => {
    if (headerSearch) {
      const filteredBySearch = games.filter((item: IGame) =>
        item.name.toLowerCase().includes(headerSearch.toLowerCase()),
      )
      setFilteredProducts(filteredBySearch)
    }
  }, [headerSearch])

  useEffect(() => {
    // setFilteredProducts(filteredBySearch)
    // setShowMenu({ ...showMenu, filters: true })
  }, [])

  return (
    <div className="mt-24 w-full">
      <LateralMenu />
      <div className="flex justify-center items-center w-full">
        <div className="flex w-[1096px] gap-6 flex-wrap justify-start items-start">
          {filteredProducts.map(({ name, areaPt, price, id, image }) => (
            <ProductCard
              key={id}
              name={name}
              id={id}
              areaPt={areaPt}
              price={price}
              image={image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
