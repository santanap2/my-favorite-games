/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { pageTitle } from '@/helpers'
import {
  Chat,
  Clock,
  Envelope,
  WhatsappLogo,
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'

export default function Contato() {
  return (
    <div className="mt-24 xxl:mt-20  w-full h-full animation-opacity transition-all">
      <title>{`Contato - ${pageTitle}`}</title>
      <div className=" w-full h-full flex flex-col gap-10 text-white sm:gap-6">
        <div className="flex gap-1 w-fit items-center justify-center">
          <Chat
            weight="fill"
            className="text-indigo-700 sm:text-3xl text-5xl"
          />
          <h1 className="font-regular text-xl font-semibold">Contato</h1>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col gap-4 bg-neutral-800 w-80 px-6 py-4 rounded-md shadow-md">
            <h1 className="text-lg font-semibold">Horário de atendimento</h1>

            <div className="flex gap-2 items-center justify-start">
              <Clock weight="bold" className="text-indigo-600 text-3xl" />
              <h3 className="text-sm">10:00h às 20:00h</h3>
            </div>
          </div>

          <div className="flex flex-col gap-4 bg-neutral-800 w-80 px-6 py-4 rounded-md shadow-md">
            <h1 className="font-semibold text-lg">Atendimento via WhatsApp</h1>

            <Link
              href="https://api.whatsapp.com/send?phone=5531998695219"
              className="flex gap-2 items-start justify-start hover:text-indigo-600 text-sm font-light"
            >
              <WhatsappLogo
                weight="duotone"
                className="text-indigo-600 text-3xl"
              />
              <h3 className="flex flex-col">
                <span>(31) 99869-5219</span>
                <span className="font-semibold">Pedro Santana</span>
              </h3>
            </Link>

            <Link
              href="https://api.whatsapp.com/send?phone=553799042144"
              className="flex gap-2 items-start justify-start hover:text-indigo-600 text-sm font-light"
            >
              <WhatsappLogo
                weight="duotone"
                className="text-indigo-600 text-3xl"
              />
              <h3 className="flex flex-col">
                <span>(37) 9904-2144</span>
                <span className="font-semibold">Italo Zampese</span>
              </h3>
            </Link>
          </div>

          <div className="flex flex-col gap-4 bg-neutral-800 w-80 px-6 py-4 rounded-md shadow-md">
            <h1 className="font-semibold text-lg">Atendimento via E-mail</h1>

            <Link
              href="mailto:suporte@myfavgames.com"
              className="flex gap-2 items-start justify-start hover:text-indigo-600 text-sm font-light"
            >
              <Envelope weight="duotone" className="text-indigo-600 text-3xl" />
              <h3 className="flex flex-col">
                <span>suporte@myfavgames.com</span>
                <span className="font-semibold">Suporte My Fav Games</span>
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
