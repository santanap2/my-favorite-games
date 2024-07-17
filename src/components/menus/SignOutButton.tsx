'use client'

import { SignOut } from '@phosphor-icons/react/dist/ssr'
import { signOut } from 'next-auth/react'
import React from 'react'

export default function SignOutButton() {
  return (
    <button
      className="flex gap-2"
      onClick={() => signOut({ redirect: true, callbackUrl: '/home' })}
    >
      <SignOut weight="regular" className="text-lg" />
      <span>Sair</span>
    </button>
  )
}
