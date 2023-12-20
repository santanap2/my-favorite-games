import GamesPlatformContext from '@/context/Context'
import { phoneNumberMask } from '@/helpers'
import { registerUser } from '@/services/requests'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function CadastroHooks() {
  const { setRegisterSuccess, setRegisterError, setLoading } =
    useContext(GamesPlatformContext)

  const formSchema = z.object({
    registerUser: z.object({
      email: z
        .string()
        .email('Informe um email válido')
        .min(1, 'Informe seu email'),
      name: z.string().min(1, 'Informe um nome válido'),
      password: z.string().min(8, 'Informe uma senha válida'),
      phone: z
        .string()
        .min(11, 'Informe um telefone válido')
        .max(15, 'Informe um telefone válido'),
    }),
  })

  type FormProps = z.infer<typeof formSchema>

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      registerUser: {
        email: '',
        name: '',
        password: '',
        phone: '',
      },
    },
  })

  const handleFormSubmit = async (formData: FormProps) => {
    setLoading({ registerUser: true })
    const response = await registerUser(formData.registerUser).catch(
      (error) => {
        if (error.response.data.message === 'User already exists in database') {
          setRegisterSuccess('')
          setRegisterError('O email informado já está cadastrado')
          setLoading({ registerUser: false })
        }

        setRegisterSuccess('')
        setRegisterError('Ocorreu um erro inesperado, tente novamente')
        setLoading({ registerUser: false })
      },
    )

    if (response && response.status === 201) {
      setRegisterError('')
      setRegisterSuccess('Cadastro efetuado com sucesso')
      setLoading({ registerUser: false })
    }
  }

  const registerUserPhoneValue = watch('registerUser.phone')

  useEffect(() => {
    setValue('registerUser.phone', phoneNumberMask(registerUserPhoneValue))
  }, [registerUserPhoneValue, setValue])

  return {
    handleSubmit,
    register,
    errors,
    handleFormSubmit,
  }
}
