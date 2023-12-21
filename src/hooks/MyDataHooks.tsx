import GamesPlatformContext from '@/context/Context'
import { phoneNumberMask } from '@/helpers'
import { updateUser } from '@/services/requests'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function MyDataHooks() {
  const { setLoading, setUserDataSuccess, setUserDataError, loading } =
    useContext(GamesPlatformContext)

  const formSchema = z.object({
    userData: z
      .object({
        name: z.string().min(1, 'Informe um nome válido'),
        currentEmail: z
          .string()
          .email('Informe um email válido')
          .min(1, 'Informe um email válido'),
        newEmail: z
          .string()
          .email('Informe um novo email válido')
          .min(1, 'Informe um email válido'),
        phone: z
          .string()
          .min(11, 'Informe um telefone válido')
          .max(15, 'Informe um telefone válido'),
        currentPassword: z.string().min(8, 'Informe uma senha válida'),
        newPassword: z.string().min(8, 'Informe uma nova senha válida'),
        confirmNewPassword: z.string().min(8, 'Informe uma nova senha válida'),
      })
      .refine((fields) => fields.currentEmail !== fields.newEmail, {
        path: ['newEmail'],
        message: 'O email informado precisa ser diferente do atual',
      })
      .refine((fields) => fields.newPassword !== fields.currentPassword, {
        path: ['newPassword'],
        message: 'A nova senha precisa ser diferente da atual',
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

    const updatedUser = await updateUser({
      name,
      currentEmail,
      newEmail,
      phone,
      currentPassword,
      newPassword,
    }).catch((error) => {
      if (error) {
        setLoading({ ...loading, updateUserData: false })
        setUserDataSuccess('')
        setUserDataError(error.response.data.message)
      }

      if (!error) {
        setLoading({ ...loading, updateUserData: false })
        setUserDataError('')
        setUserDataSuccess('Dados atualizados com sucesso')
      }
    })

    if (updatedUser && updatedUser.status === 200) {
      setLoading({ ...loading, updateUserData: false })
      setUserDataError('')
      setUserDataSuccess(updatedUser.data.message)
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
