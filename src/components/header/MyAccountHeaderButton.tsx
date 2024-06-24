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
  const firstName = (str: string) => {
    const firstName = str.split(' ')[0]
    return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()
  }

  return (
    <Link
      href="/api/auth/signin"
      className="flex items-center justify-center hover:underline relative hover:text-indigo-600 transition-all text-white"
    >
      <span className="font-semibold text-xs">
        {session ? firstName(username) : 'Entrar'}
      </span>
      <User className="text-2xl" weight="regular" />
    </Link>
  )
}
