/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="flex w-screen border-t border-zinc-300 bg-violet-900 text-white justify-center items-center mt-16 xl:mt-12 py-4 xl:items-start z-10">
      <div className="w-3/5 flex justify-between items-center xxl:w-[95%] flex-col gap-2">
        <img
          src="logo.png"
          alt="My Favorite Games"
          className="w-96 h-fit sm:w-4/5"
        />
        <div className="w-full flex justify-center gap-20 items-center xl:flex-col xl:gap-4">
          <div className="flex gap-4 sm:gap-4 md:gap-10 lg:gap-16 xl:gap-20 xl:w-full xl:text-xs xl:justify-center xl:items-center">
            <h1>© 2023 My Favorite Games™</h1>
            <h2>Todos os direitos reservados.</h2>
          </div>
          <ul className="flex flex-wrap gap-4 items-center text-sm font-medium xl:text-xs xl:justify-between xl:gap-4">
            <li>
              <Link href="/sobre" className="hover:underline">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/politica-de-privacidade" className="hover:underline">
                Política de privacidade
              </Link>
            </li>
            <li>
              <Link href="/licenciamento" className="hover:underline">
                Licenciamento
              </Link>
            </li>
            <li>
              <Link href="/Contato" className="hover:underline">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
