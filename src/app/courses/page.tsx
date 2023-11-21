import React from 'react'
import Card from '@/components/Card'
import { courses } from '@/data/courses'

export default function page() {
  return (
    <div className="mt-32 flex justify-between items-center gap-10 flex-wrap mb-20">
      {courses.map(({ name, area, price, image }) => (
        <a href={`/course/${name}`} key={name}>
          <Card name={name} area={area} price={price} image={image} />
        </a>
      ))}
    </div>
  )
}
