'use client'

import LateralMenu from '@/components/LateralMenu'
import {
  Envelope,
  IdentificationBadge,
  IdentificationCard,
  Password,
  Phone,
} from '@phosphor-icons/react'
import React from 'react'

export default function page() {
  return (
    <div className="mt-32 w-full h-full">
      <LateralMenu />
      <div className="ml-32 w-full h-full flex flex-col gap-16 text-zinc-800">
        <div className="flex gap-1 w-fit items-center justify-center">
          <IdentificationCard
            weight="fill"
            size={56}
            className="text-sky-500"
          />
          <h1 className="font-regular text-xl font-semibold">Meus dados</h1>
        </div>

        <div className="flex flex-col gap-6">
          <div className="w-3/5 h-full bg-zinc-100 p-6 rounded-md shadow-md">
            <form action="" className="w-full flex flex-col gap-6">
              <div className="flex w-full gap-20 justify-between">
                <label htmlFor="name" className="flex flex-col gap-2 w-fit">
                  <h2 className="font-light text-sm tracking-normal flex gap-1 items-center justify center">
                    <IdentificationBadge
                      size={28}
                      weight="light"
                      className="text-sky-400"
                    />
                    <span>Nome completo</span>
                  </h2>
                  <input
                    type="text"
                    id="name"
                    className="px-4 h-10 w-96 shadow-md focus:outline-none hover:shadow-lg focus:shadow-xl text-zinc-700 text-sm font-light rounded-md"
                  />
                </label>

                <label htmlFor="phone" className="flex flex-col gap-2 w-fit">
                  <h2 className="font-light text-sm tracking-normal flex gap-1 items-center justify center">
                    <Phone size={28} weight="light" className="text-sky-400" />
                    <span>Celular</span>
                  </h2>
                  <input
                    type="tel"
                    id="phone"
                    className="px-4 h-10 w-72 shadow-md focus:outline-none hover:shadow-lg focus:shadow-xl text-zinc-700 text-sm font-light rounded-md"
                  />
                </label>
              </div>

              <div className="flex w-full gap-20 justify-between">
                <label htmlFor="email" className="flex flex-col gap-2 w-fit">
                  <h2 className="font-light text-sm tracking-normal flex gap-1 items-center justify center">
                    <Envelope
                      size={28}
                      weight="light"
                      className="text-sky-400"
                    />
                    <span>E-mail</span>
                  </h2>
                  <input
                    type="email"
                    id="email"
                    className="px-4 h-10 w-96 shadow-md focus:outline-none hover:shadow-lg focus:shadow-xl text-zinc-700 text-sm font-light rounded-md"
                  />
                </label>
                <label htmlFor="password" className="flex flex-col gap-2 w-fit">
                  <h2 className="font-light text-sm tracking-normal flex gap-1 items-center justify center">
                    <Password
                      size={28}
                      weight="light"
                      className="text-sky-400"
                    />
                    <span>Senha</span>
                  </h2>
                  <input
                    type="password"
                    id="password"
                    className="px-4 h-10 w-72 shadow-md focus:outline-none hover:shadow-lg focus:shadow-xl text-zinc-700 text-sm font-light rounded-md"
                  />
                </label>
              </div>
            </form>
          </div>

          <div className="w-3/5 flex items-center justify-start">
            <button
              type="button"
              className="bg-sky-400 w-80 px-6 py-3 rounded-md shadow-md hover:shadow-lg font-regular text-sm text-white"
            >
              Atualizar dados
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
