/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import GamesPlatformContext from '@/context/Context'
import { pageTitle } from '@/helpers'
import { getUserByToken } from '@/services'
import { Chat, Clock, Envelope, WhatsappLogo } from '@phosphor-icons/react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { useContext } from 'react'

export default function Contato() {
  const { screenSize } = useContext(GamesPlatformContext)

  const { isFetched: userIsFetched, error: userError } = useQuery({
    queryKey: ['userData'],
    queryFn: async () => await getUserByToken(),
    retry: false,
  })

  if (
    userIsFetched &&
    userError &&
    userError.message === 'Request failed with status code 401'
  )
    redirect('/login')

  return (
    <>
      {userError && null}
      {!userError && (
        <div className="mt-24 xxl:mt-20 w-full h-full">
          <title>{`Contato - ${pageTitle}`}</title>
          <div className=" w-full h-full flex flex-col gap-10 text-zinc-800 sm:gap-6">
            <div className="flex gap-1 w-fit items-center justify-center">
              <Chat
                weight="fill"
                className="text-slate-500 sm:text-3xl text-5xl"
              />
              <h1 className="font-regular text-xl font-semibold">Ajuda</h1>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col gap-4 bg-white w-80 px-6 py-4 rounded shadow-md">
                <h1 className="text-lg font-semibold">
                  Horário de atendimento
                </h1>

                <div className="flex gap-2 items-center justify-start">
                  <Clock weight="bold" className="text-slate-400 text-3xl" />
                  <h3 className="text-sm">10:00h às 20:00h</h3>
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-white w-80 px-6 py-4 rounded shadow-md">
                <h1 className="font-semibold text-lg">
                  Atendimento via WhatsApp
                </h1>

                <Link
                  href="https://api.whatsapp.com/send?phone=5531998695219"
                  className="flex gap-2 items-start justify-start hover:text-slate-400 text-sm font-light"
                >
                  <WhatsappLogo
                    weight="duotone"
                    className="text-green-400 text-3xl"
                  />
                  <h3 className="flex flex-col">
                    <span>(31) 99869-5219</span>
                    <span className="font-semibold">Pedro Santana</span>
                  </h3>
                </Link>

                <Link
                  href="https://api.whatsapp.com/send?phone=553799042144"
                  className="flex gap-2 items-start justify-start hover:text-slate-400 text-sm font-light"
                >
                  <WhatsappLogo
                    weight="duotone"
                    className="text-green-400 text-3xl"
                  />
                  <h3 className="flex flex-col">
                    <span>(37) 9904-2144</span>
                    <span className="font-semibold">Italo Zampese</span>
                  </h3>
                </Link>
              </div>

              <div className="flex flex-col gap-4 bg-white w-80 px-6 py-4 rounded shadow-md">
                <h1 className="font-semibold text-lg">
                  Atendimento via E-mail
                </h1>

                <Link
                  href="mailto:suporte@myfavgames.com"
                  className="flex gap-2 items-start justify-start hover:text-slate-400 text-sm font-light"
                >
                  <Envelope
                    weight="duotone"
                    className="text-slate-400 text-3xl"
                  />
                  <h3 className="flex flex-col">
                    <span>suporte@myfavgames.com</span>
                    <span className="font-semibold">Suporte My Fav Games</span>
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}