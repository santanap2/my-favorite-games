import { sortCategoriesByName } from '@/helpers/categories'
import { IGame, ISearchParams } from '@/interfaces'
import { getGamesFiltered } from '@/services'
import { getCategories } from '@/services/categories.requests'
import { redirect } from 'next/navigation'

import NotFoundProducts from '@/components/general/NotFoundProducts'
import GameFilters from '@/components/menus/GameFilters'
import GameFiltersMobile from '@/components/menus/GameFiltersMobile'
import ProductCard from '@/components/product/ProductCard'
import { pageTitle } from '@/helpers'

export default async function HomeLayout({ searchParams }: ISearchParams) {
  if (Object.keys(searchParams).length === 0) redirect('home/1')

  const { data } = await getCategories()
  const orderedCategories = sortCategoriesByName(data.categories)

  const queryParams = new URLSearchParams(searchParams).toString()

  const {
    data: { games, message },
  } = await getGamesFiltered(new URLSearchParams(queryParams).toString())

  return (
    <div className="w-full h-full mt-24 xxl:mt-20 flex justify-start items-start gap-3">
      <title>{`Home - ${pageTitle}`}</title>

      <GameFilters categories={orderedCategories} searchParams={searchParams} />
      <GameFiltersMobile
        categories={orderedCategories}
        searchParams={searchParams}
      />

      <div className="flex w-full pl-2">
        <div className="w-full flex flex-col items-center justify-center">
          <div
            className={`${
              message === 'Nenhum jogo encontrado'
                ? 'flex items-center justify-center'
                : 'grid grid-cols-6 auto-cols-auto gap-12 row-auto sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 xxl:gap-6'
            }`}
          >
            {message === 'Nenhum jogo encontrado' && <NotFoundProducts />}

            {games.map((game: IGame) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
