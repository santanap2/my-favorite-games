import GamesPlatformContext from '@/context/Context'
import { requestLogin } from '@/services/'
import { zodResolver } from '@hookform/resolvers/zod'
import { redirect } from 'next/navigation'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function LoginHooks() {
  const { setLoginResponse, setIsAuthenticated, loading, setLoading } =
    useContext(GamesPlatformContext)

  const formSchema = z.object({
    login: z.object({
      email: z
        .string()
        .email('Informe um email válido')
        .min(1, 'Informe seu email'),
      password: z.string().min(8, 'Informe uma senha válida'),
      rememberUser: z.boolean(),
    }),
  })

  type FormProps = z.infer<typeof formSchema>

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      login: {
        email: '',
        password: '',
        rememberUser: false,
      },
    },
  })

  const handleFormSubmit = async (data: FormProps) => {
    setLoading({ ...loading, login: true })

    const response = await requestLogin(data.login).catch((error) => {
      if (error) {
        setLoginResponse({ error: error.response.data.message, success: '' })
        setLoading({ ...loading, login: false })
      }
    })

    if (response && response.status === 200) {
      setLoginResponse({ error: '', success: response.data.message })
      setIsAuthenticated(true)
      setLoading({ ...loading, login: false })
      redirect('/minha-conta')
    }
  }

  return {
    handleSubmit,
    register,
    errors,
    handleFormSubmit,
  }
}
