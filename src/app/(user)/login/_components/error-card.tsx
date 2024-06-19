'use client'

import Link from 'next/link'

export default function ErrorCard({
  errorMessage,
  reset,
}: {
  errorMessage: string
  reset: () => void
}) {
  return (
    <>
      <div className="mx-auto max-w-96 border border-red-700">
        <div>
          <h1 className="flex items-center justify-center gap-2 text-red-300">
            Ops...
            <h2>Ocorreu um erro</h2>
          </h1>
        </div>
        <span className="underline">{errorMessage}</span>
        <div className="flex justify-center">
          <button onClick={reset}>Tentar novamente</button>
        </div>
      </div>
      <Link className="mt-8" href="/">
        Voltar para Home
      </Link>
    </>
  )
}
