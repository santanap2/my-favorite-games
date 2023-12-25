import GamesPlatformContext from '@/context/Context'
import { addUserLocalStorage, phoneNumberMask } from '@/helpers'
import { updateUser } from '@/services'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function MyDataHooks() {
  const { setLoading, setUserDataResponse, loading } =
    useContext(GamesPlatformContext)

  const formSchema = z.object({
    userData: z
      .object({
        name: z.string(),
        currentEmail: z
          .string()
          .email('Informe um email válido')
          .min(1, 'Informe um email válido'),
        newEmail: z.union([
          z.literal(''),
          z.string().email('Informe um email válido'),
        ]),
        phone: z.string(),
        currentPassword: z.string().min(8, 'Informe uma senha válida'),
        newPassword: z.union([
          z.literal(''),
          z.string().min(8, 'A senha deve conter no mínimo 8 caracteres'),
        ]),
        confirmNewPassword: z.string(),
      })
      .refine((fields) => fields.newPassword === fields.confirmNewPassword, {
        path: ['confirmNewPassword'],
        message: 'As senhas devem ser idênticas',
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
        currentEmail: '',
        newEmail: '',
        phone: '',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      },
    },
  })

  const handleFormSubmit = async ({ userData }: FormProps) => {
    setLoading({ ...loading, updateUserData: true })

    const {
      name,
      currentEmail,
      newEmail,
      phone,
      currentPassword,
      newPassword,
    } = userData

    const response = await updateUser({
      name,
      currentEmail,
      newEmail,
      phone,
      currentPassword,
      newPassword,
    }).catch((error) => {
      if (error) {
        setLoading({ ...loading, updateUserData: false })
        setUserDataResponse({ error: error.response.data.message, success: '' })
      } else {
        setUserDataResponse({
          error: 'Um erro inesperado ocorreu, tente novamente mais tarde',
          success: '',
        })
      }
    })

    if (response && response.status === 200) {
      setLoading({ ...loading, updateUserData: false })
      setUserDataResponse({ error: '', success: response.data.message })
      addUserLocalStorage(response.data.data)
    }
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
