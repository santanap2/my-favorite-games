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

  const itemsPerPage = 24
  const pageNumber = Number(page)
  const totalPages = Math.ceil(games.length / itemsPerPage)
  const gamesToDisplay = () => {
    const startIndex = (Number(page) - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return games.slice(startIndex, endIndex)
  }

  const renderPaginationItems = () => {
    const paginationItems = []

    paginationItems.push(
      <PaginationItem key={1}>
        <PaginationLink
          href={`/home/1`}
          className={`hover:bg-neutral-700 hover:text-white ${Number(page) === 1 && 'border border-neutral-700'}`}
        >
          1
        </PaginationLink>
      </PaginationItem>,
    )

    if (pageNumber > 3) {
      paginationItems.push(
        <PaginationItem key="ellipsis1">
          <PaginationEllipsis />
        </PaginationItem>,
      )
    }

    for (
      let i = Math.max(2, pageNumber - 1);
      i <= Math.min(totalPages - 1, pageNumber + 1);
      i++
    ) {
      paginationItems.push(
        <PaginationItem key={i}>
          <PaginationLink
            href={`/home/${i}`}
            className={`hover:bg-neutral-700 hover:text-white ${pageNumber === i && 'border border-neutral-700'}`}
          >
            {i}
          </PaginationLink>
        </PaginationItem>,
      )
    }

    if (pageNumber < totalPages - 2) {
      paginationItems.push(
        <PaginationItem key="ellipsis2">
          <PaginationEllipsis />
        </PaginationItem>,
      )
    }

    if (totalPages > 1) {
      paginationItems.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            href={`/home/${totalPages}`}
            className={`hover:bg-neutral-700 hover:text-white ${pageNumber === totalPages && 'border border-neutral-700'}`}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      )
    }

    return paginationItems
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
        <div className="w-full flex flex-col items-center justify-center">
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
                      href={`/home/${pageNumber - 1}`}
                      className="hover:bg-neutral-700 hover:text-white"
                    />
                  </PaginationItem>
                </button>

                {renderPaginationItems()}

                <button
                  type="button"
                  disabled={page === totalPages.toString()}
                  className="disabled:hidden"
                >
                  <PaginationItem>
                    <PaginationNext
                      href={`/home/${pageNumber + 1}`}
                      className="hover:bg-neutral-700 hover:text-white"
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
