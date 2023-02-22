import { Button, Text, TextInput } from '@ignite-ui/react'
import { Form, ErrorMessage } from './styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, RegisterFormData } from './types'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const router = useRouter()

  const handleRegister = async (data: RegisterFormData) => {
    console.log(data)
  }

  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query?.username, setValue])
  return (
    <Form as={'form'} onSubmit={handleSubmit(handleRegister)}>
      <label htmlFor="">
        <Text size={'sm'}>Seu username</Text>
        <TextInput
          prefix="ignite.com/"
          size="md"
          placeholder="username"
          {...register('username')}
        />
        {errors.username && (
          <ErrorMessage size={'sm'}>{errors.username.message}</ErrorMessage>
        )}
      </label>

      <label htmlFor="">
        <Text size={'sm'}>Nome completo</Text>
        <TextInput
          size="md"
          placeholder="seu nome completo"
          {...register('name')}
        />

        {errors.name && (
          <ErrorMessage size={'sm'}>{errors.name.message}</ErrorMessage>
        )}
      </label>

      <Button type="submit" size={'md'} disabled={isSubmitting}>
        Próximo passo
        <ArrowRight />
      </Button>
    </Form>
  )
}
