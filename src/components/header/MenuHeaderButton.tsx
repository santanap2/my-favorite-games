'use client'

import GamesPlatformContext from '@/context/Context'
import { TextIndent } from '@phosphor-icons/react/dist/ssr'
import { usePathname } from 'next/navigation'
import React, { useContext } from 'react'

export default function MenuHeaderButton() {
  const { setShowMenu, showMenu } = useContext(GamesPlatformContext)

  const pathname = usePathname()

  const clickMenu = () => {
    if (pathname.includes('/minha-conta'))
      setShowMenu({ ...showMenu, myAccount: !showMenu.myAccount })

    if (pathname.includes('/home'))
      setShowMenu({ ...showMenu, filters: !showMenu.filters })

    if (pathname.includes('/game'))
      setShowMenu({ ...showMenu, filters: !showMenu.filters })

    if (pathname.includes('/pedido'))
      setShowMenu({ ...showMenu, myAccount: !showMenu.myAccount })

    if (pathname.includes('/avaliar-produto'))
      setShowMenu({ ...showMenu, myAccount: !showMenu.myAccount })
  }

  return (
    <button type="button" className="transition-all" onClick={clickMenu}>
      <TextIndent
        className="text-2xl"
        weight={showMenu.filters || showMenu.myAccount ? 'fill' : 'regular'}
      />
    </button>
  )
}
