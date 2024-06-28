import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function HeaderHooks() {
  const formSchema = z.object({
    headerSearch: z.object({
      headerInput: z.string(),
    }),
  })

  const formMobileSchema = z.object({
    headerMobileSearch: z.object({
      headerMobileInput: z.string(),
    }),
  })

  type FormMobileProps = z.infer<typeof formMobileSchema>
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

  const { handleSubmit: handleSubmitMobile, register: registerMobile } =
    useForm<FormMobileProps>({
      criteriaMode: 'all',
      mode: 'all',
      resolver: zodResolver(formMobileSchema),
      defaultValues: {
        headerMobileSearch: {
          headerMobileInput: '',
        },
      },
    })

  const router = useRouter()

  const handleFormSubmit = (data: FormProps) => {
    router.push(`/home?busca=${data.headerSearch.headerInput}`)
  }

  const handleFormMobileSubmit = (data: FormMobileProps) => {
    router.push(`/home?busca=${data.headerMobileSearch.headerMobileInput}`)
  }

  return {
    handleSubmit,
    register,
    errors,
    handleFormSubmit,
    handleSubmitMobile,
    registerMobile,
    handleFormMobileSubmit,
  }
}
