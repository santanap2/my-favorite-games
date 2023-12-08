import GamesPlatformContext from '@/context/Context'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function UnloggedUserHooks() {
  const { setLogged } = useContext(GamesPlatformContext)

  const formSchema = z.object({
    unloggedUser: z.object({
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
      unloggedUser: {
        email: '',
        password: '',
        rememberUser: false,
      },
    },
  })

  const handleFormSubmit = (data: FormProps) => {
    console.log(data)
    setLogged(true)
  }

  return {
    handleSubmit,
    register,
    errors,
    handleFormSubmit,
  }
}
