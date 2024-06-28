import { getServerSession } from 'next-auth'
import React, { ReactNode } from 'react'
import { nextAuthOptions } from '../api/auth/[...nextauth]/auth'
import { redirect } from 'next/navigation'

export default async function PrivateLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getServerSession(nextAuthOptions)
  if (!session) {
    redirect('/api/auth/signin')
  }

  return <>{children}</>
}
