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
import { ArrowUUpLeft } from '@phosphor-icons/react'

export default function Home() {
  const {
    filteredProducts,
    setFilteredProducts,
    setShowSearchInputMobile,
    setRegisterResponse,
    setUserDataResponse,
    setLoginResponse,
  } = useContext(GamesPlatformContext)

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
          className={`${
            filteredProducts.length === 0
              ? 'flex items-center justify-center'
              : 'grid grid-cols-5 gap-x-9 gap-y-6 row-auto sm:grid sm:grid-cols-2 sm:w-screen sm:gap-4 lg:grid-cols-3 xxl:grid-cols-4 xxl:gap-6'
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
                className="flex gap-3 items-center justify-center px-8 py-2 bg-indigo-400 rounded text-sm font-semibold uppercase tracking-wider text-white shadow-sm hover:shadow-lg sm:w-3/5 sm:font-semibold sm:text-sm sm:h-12"
              >
                <ArrowUUpLeft size={28} />

                <span>Voltar para a página inicial</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
