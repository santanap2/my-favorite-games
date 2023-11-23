import React from 'react'
import Card from '@/components/Card'
import { courses } from '@/data/courses'
import Link from 'next/link'

export default function Cursos() {
  return (
    <div className="mt-32 flex justify-between items-center gap-10 flex-wrap">
      {courses.map(({ name, area, price, id, image }) => (
        <Link href={`/course/${id}`} key={name}>
          <Card name={name} area={area} price={price} id={id} image={image} />
        </Link>
      ))}
    </div>
  )
}
