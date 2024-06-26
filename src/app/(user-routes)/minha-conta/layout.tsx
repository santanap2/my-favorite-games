import { getServerSession } from 'next-auth'
import React, { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/auth'
import MyAccountMenu from '@/components/menus/MyAccountMenu'

export default async function MyAccountLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getServerSession(nextAuthOptions)
  if (!session) {
    redirect('/api/auth/signin')
  }

  return (
    <div className="w-full flex h-full gap-2 mt-24 xxl:mt-20">
      <MyAccountMenu />
      {children}
    </div>
  )
}
