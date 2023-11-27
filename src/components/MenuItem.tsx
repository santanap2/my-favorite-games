'use client'

import { IMenuItem } from '@/interfaces'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

export default function MenuItem({
  Icon,
  name,
  size,
  link,
  iconClass,
  especialClass,
}: IMenuItem) {
  //   const [hoverMenu, setHoverMenu] = useState('regular')
  //
  //   const hoverIconChange = () => {
  //     if (hoverMenu === 'regular') setHoverMenu('fill')
  //     if (hoverMenu === 'fill') setHoverMenu('regular')
  //   }

  const pathname = usePathname()
  const isActive = pathname === link

  return (
    <Link href={link}>
      <div
        className={`flex gap-3 px-4 items-center w-64  text-sm font-light text-zinc-500 h-14 rounded-lg ${especialClass}`}
        // onMouseEnter={hoverIconChange}
        // onMouseLeave={hoverIconChange}
      >
        <Icon
          weight={isActive ? 'fill' : 'duotone'}
          size={size}
          className={iconClass}
        />
        <span className="w-full">{name}</span>
      </div>
    </Link>
  )
}
