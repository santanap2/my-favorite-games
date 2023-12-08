/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useContext, useEffect } from 'react'
import ProductCard from '@/components/ProductCard'
import LateralMenu from '@/components/LateralMenu'
import GamesPlatformContext from '@/context/Context'
import { useRouter, useSearchParams } from 'next/navigation'
import { IGame } from '@/interfaces'
import { games } from '@/data/games'

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
    <div className="mt-24 w-full">
      <LateralMenu />
      <div className="flex justify-center items-center w-full">
        <div className="flex w-[1096px] gap-6 flex-wrap justify-start items-start sm:w-screen">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(({ name, areaPt, price, id, image }) => (
              <ProductCard
                key={id}
                name={name}
                id={id}
                areaPt={areaPt}
                price={price}
                image={image}
              />
            ))
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
