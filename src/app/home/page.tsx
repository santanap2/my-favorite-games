/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useContext, useEffect } from 'react'
import ProductCard from '@/components/ProductCard'
import LateralMenu from '@/components/LateralMenu'
import GamesPlatformContext from '@/context/Context'
import { useRouter, useSearchParams } from 'next/navigation'
import { IGame } from '@/interfaces'
import { games } from '@/data/games'
import { pageTitle } from '@/helpers'

export default function Home() {
  const { filteredProducts, setFilteredProducts, setShowSearchInputMobile } =
    useContext(GamesPlatformContext)

  const searchParams = useSearchParams()
  const headerSearch = searchParams.get('busca')
  const router = useRouter()

  useEffect(() => {
    if (headerSearch) {
      const filteredBySearch = games.filter((item: IGame) =>
        item.name.toLowerCase().includes(headerSearch.toLowerCase()),
      )
      setFilteredProducts(filteredBySearch)
    }
  }, [headerSearch])

  useEffect(() => {
    setShowSearchInputMobile(false)
  }, [])

  return (
    <div className="mt-24 xl:mt-20 w-full">
      <title>{headerSearch ? `${pageTitle} - Busca` : `${pageTitle}`}</title>
      <LateralMenu />
      <div className="flex justify-center items-center w-full">
        <div
          className={`${
            filteredProducts.length === 0
              ? 'flex items-center justify-center'
              : 'grid grid-cols-5 gap-x-9 gap-y-6 row-auto sm:grid sm:grid-cols-2 sm:w-screen sm:gap-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6'
          }`}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map(
              ({ name, area, areaPt, price, id, image, description }) => (
                <ProductCard
                  key={id}
                  name={name}
                  id={id}
                  area={area}
                  areaPt={areaPt}
                  price={price}
                  image={image}
                  description={description}
                />
              ),
            )
          ) : (
            <div className="w-full flex flex-col gap-6 justify-center items-center">
              <span className="w-full text-sm text-center">
                Nenhum produto encontrado, tente novamente.
              </span>

              <button
                type="button"
                onClick={() => {
                  router.push('/home')
                  setFilteredProducts(games)
                }}
                className="bg-sky-400 px-3 py-2 rounded-md shadow-md text-sm font-light text-white"
              >
                Voltar para a página inicial
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
