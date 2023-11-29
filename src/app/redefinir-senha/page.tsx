'use client'

import CoursesPlatformContext from '@/context/Context'
import { ITextInput } from '@/interfaces'
import React, { useContext, useEffect, useState } from 'react'
import ReturnLogin from '@/components/ReturnLogin'

export default function ResetPassword() {
  const [reseted, setReseted] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const { resetPassword, setResetPassword } = useContext(CoursesPlatformContext)

  const inputHandler = ({ target: { name, value } }: ITextInput) =>
    setResetPassword({ ...resetPassword, [name]: value })

  useEffect(() => {
    const validator =
      /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
    const validInput =
      resetPassword.emailReset && validator.test(resetPassword.emailReset)
    setBtnDisabled(!validInput)
  }, [resetPassword.emailReset])

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setReseted(true)
  }

  return (
    <div className="flex flex-col gap-10 mt-32">
      <div className="px-20 py-8 rounded-md flex flex-col gap-10 items-center justify-center bg-zinc-100 shadow">
        <h1 className="font-semibold text-xl text-zinc-800 text-shadow">
          Redefinir senha
        </h1>

        <form
          action=""
          className="flex flex-col justify-center items-center gap-10"
          onSubmit={(e) => submitForm(e)}
        >
          <label htmlFor="email" className="flex flex-col gap-1">
            <span className="text-sm font-semibold">Email</span>
            <input
              type="email"
              id="email"
              placeholder="email@exemplo.com"
              className="h-10 w-80 rounded-md px-3 hover:shadow-lg focus:outline-none focus:shadow-xl shadow"
              name="emailReset"
              onChange={inputHandler}
              value={resetPassword.emailReset}
            />
          </label>

          <button
            type="submit"
            className="w-80 h-10 bg-sky-400 text-zinc-800 rounded-md text-md font-regular shadow hover:shadow-lg disabled:opacity-40"
            disabled={btnDisabled}
          >
            Enviar
          </button>
        </form>

        {reseted ? (
          <span className="text-sm font-light text-zinc-800">
            Por favor confira seu email para redefinir sua senha.
          </span>
        ) : (
          ''
        )}
      </div>

      <ReturnLogin />
    </div>
  )
}
