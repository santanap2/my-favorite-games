import CoursesPlatformContext from '@/context/Context'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function CadastroHooks() {
  const { setRegisterSuccess } = useContext(CoursesPlatformContext)

  const formSchema = z.object({
    registerUser: z.object({
      email: z
        .string()
        .email('Informe um email válido')
        .min(1, 'Informe seu email'),
      password: z.string().min(8, 'Informe uma senha válida'),
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
      registerUser: {
        email: '',
        password: '',
      },
    },
  })

  const handleFormSubmit = (data: FormProps) => {
    console.log(data)
    setRegisterSuccess(true)
  }

  return {
    handleSubmit,
    register,
    errors,
    handleFormSubmit,
  }
}
