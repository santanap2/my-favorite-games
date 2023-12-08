import GamesPlatformContext from '@/context/Context'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function ResetPasswordHooks() {
  const { setReseted } = useContext(GamesPlatformContext)

  const formSchema = z.object({
    resetPassword: z.object({
      email: z
        .string()
        .email('Informe um email válido')
        .min(1, 'Informe seu email'),
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
      resetPassword: {
        email: '',
      },
    },
  })

  const handleFormSubmit = (data: FormProps) => {
    console.log(data)
    setReseted(true)
  }

  return {
    handleSubmit,
    register,
    errors,
    handleFormSubmit,
  }
}
