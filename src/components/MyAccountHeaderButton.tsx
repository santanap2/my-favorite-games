/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'

export default function MyAccountHeaderButton({
  session,
  username,
}: {
  session: any
  username: string
}) {
  return (
    <Link
      href="/api/auth/signin"
      className="flex items-center justify-center hover:underline relative hover:text-indigo-600 transition-all text-white"
    >
      <span className="uppercase font-semibold text-xs">
        {session ? username?.split(' ')[0] : 'Entrar'}
      </span>
      <User className="text-3xl" weight="regular" />
    </Link>
  )
}
