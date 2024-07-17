'use client'

import GamesPlatformContext from '@/context/Context'
import React, { useContext } from 'react'

export default function MyEvaluationsForm() {
  const { filters, setFilters } = useContext(GamesPlatformContext)
  return (
    <form className="w-fit">
      <label
        htmlFor="sortBy"
        className="flex gap-3 items-center justify-center"
      >
        <span className="text-sm tracking-wide font-semibold">
          Organizar por:
        </span>
        <select
          name=""
          id="sortBy"
          className="h-10 rounded-md px-3 focus:outline-none text-neutral-200 hover:shadow-lg w-60 text-left text-sm font-light bg-neutral-950 border border-neutral-900 shadow-md"
          onChange={({ target: { value } }) =>
            setFilters({ ...filters, myEvaluations: value })
          }
        >
          <option value="date">Comprados recentemente</option>
          <option value="alphabetical">Ordem alfabética</option>
        </select>
      </label>
    </form>
  )
}
