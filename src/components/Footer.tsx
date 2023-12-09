/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="flex w-screen border-t border-zinc-300 bg-sky-900 text-white justify-center items-center mt-16 sm:mt-12 py-4 sm:items-start">
      <div className="w-3/5 flex justify-between items-center sm:w-[95%] flex-col gap-2">
        <img src="logo.png" alt="My Favorite Games" className="w-96 sm:w-4/5" />
        <div className="w-full flex justify-center gap-20 items-center sm:flex-col sm:gap-4">
          <div className="flex gap-4 sm:gap-2 sm:w-full sm:text-xs sm:justify-between sm:items-center">
            <h1>© 2023 My Favorite Games™</h1>
            <h2>Todos os direitos reservados.</h2>
          </div>
          <ul className="flex flex-wrap gap-4 items-center text-sm font-medium sm:text-xs sm:justify-between sm:gap-4">
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
