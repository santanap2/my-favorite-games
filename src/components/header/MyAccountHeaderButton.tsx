import { IServerSession } from '@/interfaces'
import { User } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'

export default function MyAccountHeaderButton({
  session,
  username,
}: {
  session: IServerSession | null
  username: string
}) {
  return (
    <Link
      href="/api/auth/signin"
      className="flex items-center justify-center hover:underline relative hover:text-indigo-600 transition-all text-white"
    >
      <span className="font-semibold text-xs">
        {session ? username : 'Entrar'}
      </span>
      <User className="text-2xl" weight="regular" />
    </Link>
  )
}
