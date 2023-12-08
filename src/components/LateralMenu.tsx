import { usePathname } from 'next/navigation'
import React from 'react'
import LateralFilters from './LateralFilters'
import LateralMyAccount from './LateralMyAccount'

export default function LateralMenu() {
  const pathname = usePathname()

  return (
    <>
      {pathname.includes('/home') && <LateralFilters />}
      {pathname.includes('/game') && <LateralFilters />}
      {pathname.includes('/minha-conta') && <LateralMyAccount />}
    </>
  )
}
