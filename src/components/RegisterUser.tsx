'use client'

import CoursesPlatformContext from '@/context/Context'
import { ITextInput } from '@/interfaces'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

export default function RegisterUser() {
  const { registerUser, setRegisterUser, setRegisterSuccess } = useContext(
    CoursesPlatformContext,
  )
  const [btnDisabled, setBtnDisabled] = useState(true)

  const router = useRouter()

  const inputHandler = ({ target: { name, value } }: ITextInput) =>
    setRegisterUser({ ...registerUser, [name]: value })

  const minPasswordLength = 10

  useEffect(() => {
    const validator =
      /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
    const validInput =
      registerUser.emailRegister &&
      registerUser.passwordRegister &&
      registerUser.passwordRegister.length >= minPasswordLength &&
      validator.test(registerUser.emailRegister)
    setBtnDisabled(!validInput)
  }, [registerUser.emailRegister, registerUser.passwordRegister])

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setRegisterSuccess(true)
  }
  return (
    <div className="px-20 py-8 rounded-lg flex flex-col gap-10 items-center justify-center bg-zinc-100 shadow">
      <h1 className="font-semibold text-xl text-zinc-800 text-shadow">
        Cadastre-se
      </h1>

      <form
        onSubmit={(e) => submitForm(e)}
        className="flex flex-col justify-center items-center gap-10"
      >
        <label htmlFor="email" className="flex flex-col gap-1">
          <span className="text-sm font-semibold">Email</span>
          <input
            type="email"
            id="email"
            placeholder="email@exemplo.com"
            className="h-10 w-80 rounded-md px-3 hover:shadow-lg focus:outline-none focus:shadow-xl shadow"
            name="emailRegister"
            onChange={inputHandler}
            value={registerUser.emailRegister}
          />
        </label>

        <label htmlFor="password" className="flex flex-col gap-1">
          <span className="text-sm font-semibold">Senha</span>

          <input
            type="password"
            id="password"
            placeholder="**********"
            className="h-10 w-80 rounded-md px-3 focus:outline-none text-zinc-700 focus:shadow-xl hover:shadow-lg shadow"
            name="passwordRegister"
            onChange={inputHandler}
            value={registerUser.passwordRegister}
          />
        </label>

        <button
          type="submit"
          className="w-80 h-10 bg-sky-400 text-zinc-800 rounded-md text-md font-regular shadow hover:shadow-lg disabled:opacity-40"
          disabled={btnDisabled}
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}
