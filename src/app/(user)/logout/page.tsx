import React from 'react'
import { signOut } from '../../../../auth'

export default async function Logout() {
  await signOut()
  return <></>
}
