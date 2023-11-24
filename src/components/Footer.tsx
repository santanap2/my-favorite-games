import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="flex h-14 text-zinc-800 w-screen border-t border-zinc-300 justify-center items-center mt-16">
      <div className="w-3/5 flex justify-between items-center">
        <div className="flex gap-4">
          <h1>© 2023 My Fav Courses™</h1>
          <h2>Todos os direitos reservados.</h2>
        </div>
        <ul className="flex flex-wrap items-center text-sm font-medium">
          <li>
            <Link href="/sobre" className="hover:underline me-4 md:me-6">
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="/politica-de-privacidade"
              className="hover:underline me-4 md:me-6"
            >
              Política de privacidade
            </Link>
          </li>
          <li>
            <Link
              href="/licenciamento"
              className="hover:underline me-4 md:me-6"
            >
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
    </footer>
  )
}
