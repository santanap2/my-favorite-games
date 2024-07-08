import React from 'react'
import { pageTitle } from '@/helpers'
import GameFilters from '@/components/menus/GameFilters'
import GameFiltersMobile from '@/components/menus/GameFiltersMobile'
import { getCategories } from '@/services/categories.requests'
import { sortCategoriesByName } from '@/helpers/categories'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { IGame } from '@/interfaces'
import NotFoundProducts from '@/components/general/NotFoundProducts'
import ProductCard from '@/components/product/ProductCard'
import { getGamesFiltered } from '@/services'

export default async function Home({
  params: { page },
  searchParams,
}: {
  params: { page: string }
  searchParams: { size: string }
}) {
  const { data } = await getCategories()
  const orderedCategories = sortCategoriesByName(data.categories)

  const queryParams = new URLSearchParams(searchParams).toString()

  const {
    data: { games, message },
  } = await getGamesFiltered(new URLSearchParams(queryParams).toString())

  const itemsPerPage = 18
  const totalPages = Math.ceil(games.length / itemsPerPage)
  const gamesToDisplay = () => {
    const startIndex = (Number(page) - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return games.slice(startIndex, endIndex)
  }

  return (
    <div className="w-full h-full mt-24 xxl:mt-20 flex justify-start items-start gap-3">
      <title>{`Home - ${pageTitle}`}</title>

      <GameFilters categories={orderedCategories} searchParams={searchParams} />
      <GameFiltersMobile
        categories={orderedCategories}
        searchParams={searchParams}
      />

      <div className="flex w-full pl-2">
        <div className="w-full md:flex items-center justify-center">
          <div
            className={`${
              message === 'Nenhum jogo encontrado'
                ? 'flex items-center justify-center'
                : 'grid grid-cols-6 auto-cols-auto gap-12 row-auto sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 xxl:gap-6'
            }`}
          >
            {message === 'Nenhum jogo encontrado' ? (
              <NotFoundProducts />
            ) : (
              gamesToDisplay().map((game: IGame) => (
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
          <div className="text-white mt-12">
            <Pagination>
              <PaginationContent>
                <button
                  type="button"
                  disabled={page === '1'}
                  className="disabled:hidden"
                >
                  <PaginationItem>
                    <PaginationPrevious
                      href={`/home/${Number(page) - 1}`}
                      className="hover:bg-opacity-10 hover:text-white"
                    />
                  </PaginationItem>
                </button>

                {new Array(totalPages).fill('').map(
                  (_, index) =>
                    index <= 2 && (
                      <PaginationItem key={index + 1}>
                        <PaginationLink
                          href={`/home/${index + 1}`}
                          className="hover:bg-opacity-10 hover:text-white"
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ),
                )}

                {totalPages > 3 && (
                  <>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>

                    <PaginationItem>
                      <PaginationLink
                        href={`/home/${totalPages}`}
                        className="hover:bg-opacity-10 hover:text-white"
                      >
                        {totalPages}
                      </PaginationLink>
                    </PaginationItem>
                  </>
                )}

                <button
                  type="button"
                  disabled={page === totalPages.toString()}
                  className="disabled:hidden"
                >
                  <PaginationItem>
                    <PaginationNext
                      href={`/home/${Number(page) + 1}`}
                      className="hover:bg-opacity-10 hover:text-white"
                    />
                  </PaginationItem>
                </button>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  )
}
