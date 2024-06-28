import GamesPlatformContext from '@/context/Context'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function LoginHooks() {
  const { loading, setLoading, loginResponse, setLoginResponse } =
    useContext(GamesPlatformContext)

  const router = useRouter()

  const formSchema = z.object({
    email: z
      .string()
      .email('Informe um email válido')
      .min(1, 'Informe seu email'),
    password: z.string().min(8, 'Informe uma senha válida'),
    rememberUser: z.boolean(),
  })

  type FormProps = z.infer<typeof formSchema>

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberUser: false,
    },
  })

  const buttonDisabled = () => {
    const email = watch('email')
    const password = watch('password')

    if (!email || !password) return true
    if (errors.email || errors.password) return true

    return false
  }

  const handleFormSubmit = async ({ email, password }: FormProps) => {
    setLoading({ ...loading, login: true })

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      if (result.error === 'Request failed with status code 401') {
        setLoginResponse({
          ...loginResponse,
          error: 'O email ou a senha inseridos estão incorretos.',
        })
        setLoading({ ...loading, login: false })
        return
      }

      setLoginResponse({
        ...loginResponse,
        error: 'Ocorreu um erro inesperado.',
      })
      setLoading({ ...loading, login: false })
      return
    }

    setLoading({ ...loading, login: false })
    router.replace('/minha-conta')
  }

  return {
    handleSubmit,
    register,
    errors,
    handleFormSubmit,
    buttonDisabled,
  }
}
