import { phoneNumberMask } from '@/helpers'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function MyDataHooks() {
  const formSchema = z.object({
    userData: z.object({
      name: z.string().min(1, 'Informe um nome válido'),
      email: z
        .string()
        .email('Informe um email válido')
        .min(1, 'Informe um email válido'),
      phone: z
        .string()
        .min(11, 'Informe um telefone válido')
        .max(15, 'Informe um telefone válido'),
      currentPassword: z.string().min(8, 'Informe uma senha válida'),
      newPassword: z.string().min(8, 'Informe uma senha válida'),
      confirmNewPassword: z.string().min(8, 'Informe uma senha válida'),
    }),
  })

  type FormProps = z.infer<typeof formSchema>

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      userData: {
        name: '',
        email: '',
        phone: '',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      },
    },
  })

  const handleFormSubmit = (data: FormProps) => {
    console.log(data)
  }

  const userDataPhoneValue = watch('userData.phone')

  useEffect(() => {
    setValue('userData.phone', phoneNumberMask(userDataPhoneValue))
  }, [setValue, userDataPhoneValue])

  return {
    handleSubmit,
    register,
    errors,
    handleFormSubmit,
  }
}
