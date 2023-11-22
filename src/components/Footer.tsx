import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-20 left-0 bottom-0 right-0 flex h-20 items-center text-zinc-800 w-full border-t border-zinc-300 justify-between px-20">
      <div className="flex gap-4">
        <h1>© 2023 My Fav Courses™</h1>
        <h2>Todos os direitos reservados.</h2>
      </div>
      <ul className="flex flex-wrap items-center text-sm font-medium">
        <li>
          <a href="/sobre" className="hover:underline me-4 md:me-6">
            Sobre
          </a>
        </li>
        <li>
          <a
            href="/politica-de-privacidade"
            className="hover:underline me-4 md:me-6"
          >
            Política de privacidade
          </a>
        </li>
        <li>
          <a href="/licenciamento" className="hover:underline me-4 md:me-6">
            Licenciamento
          </a>
        </li>
        <li>
          <a href="/Contato" className="hover:underline">
            Contato
          </a>
        </li>
      </ul>
    </footer>
  )
}
