'use client'

import GamesPlatformContext from '@/context/Context'
import { TextIndent } from '@phosphor-icons/react/dist/ssr'
import { usePathname } from 'next/navigation'
import React, { useContext, useState } from 'react'

export default function ClickMenuHeaderButton() {
  const { setShowMenu, showMenu } = useContext(GamesPlatformContext)

  const [hoverBtn, setHoverBtn] = useState({
    search: false,
    user: false,
    cart: false,
    menu: false,
  })

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
    <button
      type="button"
      className="hover:text-indigo-600 transition-all"
      onClick={clickMenu}
      onMouseEnter={() => setHoverBtn((prev) => ({ ...prev, menu: true }))}
      onMouseLeave={() => setHoverBtn((prev) => ({ ...prev, menu: false }))}
    >
      <TextIndent
        className="text-2xl"
        weight={hoverBtn.menu ? 'duotone' : 'regular'}
      />
    </button>
  )
}
