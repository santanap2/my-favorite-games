import React from 'react'
import LateralMenu from './LateralMenu'
import WelcomeUser from './WelcomeUser'

export default function LoggedUser() {
  return (
    <div className="w-full h-full mt-32">
      <LateralMenu />
      <WelcomeUser username="Pedro Santana" email="phsantana99@gmail.com" />
    </div>
  )
}
