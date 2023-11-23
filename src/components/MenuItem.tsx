'use client'

import { IMenuItem } from '@/interfaces'
import Link from 'next/link'
import React, { useState } from 'react'

export default function MenuItem({
  Icon,
  name,
  size,
  link,
  iconClass,
  especialClass,
}: IMenuItem) {
  const [hoverMenu, setHoverMenu] = useState('regular')

  const hoverIconChange = () => {
    if (hoverMenu === 'regular') setHoverMenu('fill')
    if (hoverMenu === 'fill') setHoverMenu('regular')
  }

  return (
    <Link href={link}>
      <div
        className={`flex gap-3 px-4 items-center w-64  text-sm font-light text-zinc-500 h-14 rounded-lg hover:bg-zinc-100 hover:text-sky-400 ${especialClass}`}
        onMouseEnter={hoverIconChange}
        onMouseLeave={hoverIconChange}
      >
        <Icon weight={hoverMenu} size={size} className={iconClass} />
        <span className="w-full">{name}</span>
      </div>
    </Link>
  )
}
