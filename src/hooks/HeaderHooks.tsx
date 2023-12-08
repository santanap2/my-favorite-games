import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function HeaderHooks() {
  const formSchema = z.object({
    headerSearch: z.object({
      headerInput: z.string().min(1, 'Informe o que deseja buscar'),
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
      headerSearch: {
        headerInput: '',
      },
    },
  })

  const router = useRouter()

  const handleFormSubmit = (data: FormProps) => {
    router.push(`/home?busca=${data.headerSearch.headerInput}`)
  }

  return {
    handleSubmit,
    register,
    errors,
    handleFormSubmit,
  }
}
