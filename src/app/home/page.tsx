import React from 'react'
import ProductCard from '@/components/product/ProductCard'
import { IGame, ISearchParams } from '@/interfaces'
import { pageTitle } from '@/helpers'
import { getGamesFiltered } from '@/services'
import GameFilters from '@/components/menus/GameFilters'
import NotFoundProducts from '@/components/general/NotFoundProducts'

export default async function Home({ searchParams }: ISearchParams) {
  const queryParams = new URLSearchParams(searchParams).toString()

  const {
    data: { games, message },
  } = await getGamesFiltered(new URLSearchParams(queryParams).toString())

  return (
    <div className="w-full h-full mt-24 xxl:mt-20 flex justify-start items-start gap-3">
      <title>{`Home - ${pageTitle}`}</title>

      <GameFilters searchParams={searchParams} />

      <div className="flex w-full pl-2">
        <div
          className={`${
            message === 'Nenhum jogo encontrado'
              ? 'flex items-center justify-center'
              : 'grid grid-cols-6 auto-cols-auto gap-12 row-auto sm:grid sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 xxl:grid-cols-4 xxl:gap-6'
          }`}
        >
          {message === 'Nenhum jogo encontrado' ? (
            <NotFoundProducts />
          ) : (
            games.map((game: IGame) => (
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
        </div>
      </div>
    </div>
  )
}
