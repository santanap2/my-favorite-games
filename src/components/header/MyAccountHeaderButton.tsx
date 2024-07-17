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
      className="flex items-center justify-center hover:underline relative transition-all text-neutral-200"
    >
      <span className="font-semibold text-xs">
        {session ? username : 'Entrar'}
      </span>
      <User className="text-2xl" weight="regular" />
    </Link>
  )
}
