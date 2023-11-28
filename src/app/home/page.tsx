'use client'

import React from 'react'
import ProductCard from '@/components/ProductCard'
import { courses } from '@/data/courses'
import LateralFilters from '@/components/LateralFilters'

export default function Cursos() {
  return (
    <div className="mt-32 w-full">
      <LateralFilters />
      <div className="ml-32 flex flex-wrap gap-6 justify-center items-center">
        {courses.map(({ name, area, price, id, image }) => (
          <ProductCard
            key={id}
            name={name}
            id={id}
            area={area}
            price={price}
            image={image}
          />
        ))}
      </div>
    </div>
  )
}
