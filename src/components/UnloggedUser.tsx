import { ITextInput } from '@/interfaces'
import React, { useState } from 'react'

export default function UnloggedUser() {
  const [formInput, setFormInput] = useState({
    emailInput: '',
    passwordInput: '',
    remember: false,
  })

  const inputHandler = ({ target: { name, value } }: ITextInput) =>
    setFormInput({ ...formInput, [name]: value })
  return (
    <div className="px-20 py-8 rounded-lg flex flex-col gap-10 items-center justify-center bg-zinc-100 shadow">
      <h1 className="font-semibold text-xl text-zinc-800 text-shadow">
        Fazer login
      </h1>

      <form
        action=""
        className="flex flex-col justify-center items-center gap-10"
      >
        <label htmlFor="email" className="flex flex-col gap-1">
          <span className="text-sm font-semibold">Email</span>
          <input
            type="email"
            id="email"
            placeholder="email@exemplo.com"
            className="h-10 w-80 rounded-md px-3 hover:shadow-lg focus:outline-none focus:shadow-xl shadow"
            name="emailInput"
            onChange={inputHandler}
            value={formInput.emailInput}
          />
        </label>

        <label htmlFor="password" className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Senha</span>
            <a
              href="/redefinir-senha"
              className="font-light text-sm text-sky-600 hover:underline"
            >
              Esqueci a senha
            </a>
          </div>
          <input
            type="password"
            id="password"
            placeholder="**********"
            className="h-10 w-80 rounded-md px-3 focus:outline-none text-zinc-700 focus:shadow-xl hover:shadow-lg shadow"
            name="passwordInput"
            onChange={inputHandler}
            value={formInput.passwordInput}
          />
        </label>

        <label
          htmlFor="remember"
          className="flex items-center justify-center gap-2"
        >
          <input
            type="checkbox"
            id="remember"
            onChange={() =>
              setFormInput((prev) => ({ ...prev, remember: !prev.remember }))
            }
          />
          <span>Lembre-me</span>
        </label>

        <button
          type="submit"
          className="w-80 h-10 bg-sky-400 text-zinc-800 rounded-md text-md font-regular shadow hover:shadow-lg"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
