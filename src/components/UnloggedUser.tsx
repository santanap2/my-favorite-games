import { ITextInput } from '@/interfaces'
import React, { useContext, useEffect, useState } from 'react'
import CoursesPlatformContext from '@/context/Context'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function UnloggedUser() {
  const { loginInputs, setLoginInputs, setLogged } = useContext(
    CoursesPlatformContext,
  )
  const [btnDisabled, setBtnDisabled] = useState(true)

  const router = useRouter()

  const inputHandler = ({ target: { name, value } }: ITextInput) =>
    setLoginInputs({ ...loginInputs, [name]: value })

  useEffect(() => {
    const validator =
      /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
    const validInput =
      loginInputs.emailLogin &&
      loginInputs.passwordLogin &&
      validator.test(loginInputs.emailLogin)
    setBtnDisabled(!validInput)
  }, [loginInputs.emailLogin, loginInputs.passwordLogin])

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLogged(true)
    router.push('/minha-conta')
  }

  return (
    <div className="px-20 py-8 rounded-lg flex flex-col gap-10 items-center justify-center bg-zinc-100 shadow">
      <h1 className="font-semibold text-xl text-zinc-800 text-shadow">
        Fazer login
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
            name="emailLogin"
            onChange={inputHandler}
            value={loginInputs.emailLogin}
          />
        </label>

        <label htmlFor="password" className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Senha</span>
            <Link
              href="/redefinir-senha"
              className="font-light text-sm text-sky-600 hover:underline"
            >
              Esqueci a senha
            </Link>
          </div>
          <input
            type="password"
            id="password"
            placeholder="**********"
            className="h-10 w-80 rounded-md px-3 focus:outline-none text-zinc-700 focus:shadow-xl hover:shadow-lg shadow"
            name="passwordLogin"
            onChange={inputHandler}
            value={loginInputs.passwordLogin}
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
              setLoginInputs({
                ...loginInputs,
                remember: !loginInputs.remember,
              })
            }
          />
          <span>Lembre-me</span>
        </label>

        <button
          type="submit"
          className="w-80 h-10 bg-sky-400 text-zinc-800 rounded-md text-md font-regular shadow hover:shadow-lg disabled:opacity-40"
          // disabled={btnDisabled}
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
