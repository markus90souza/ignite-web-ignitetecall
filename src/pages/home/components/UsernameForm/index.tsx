import { Button, TextInput, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, Error } from './styles'
import { usernameSchema, UsernameFormData } from './types'
import { useRouter } from 'next/router'

export function UsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UsernameFormData>({
    resolver: zodResolver(usernameSchema),
  })

  const router = useRouter()
  const handlePreRegister = async (data: UsernameFormData) => {
    const { username } = data

    await router.push(`/register?username=${username}`)
  }
  return (
    <Form as={'form'} onSubmit={handleSubmit(handlePreRegister)}>
      <TextInput
        prefix="ignite.com/"
        size="md"
        placeholder="username"
        {...register('username')}
      />
      <Button type="submit" size={'md'} disabled={isSubmitting}>
        Reservar
        <ArrowRight />
      </Button>

      {errors.username?.message && (
        <Error>
          <Text>{errors.username.message}</Text>
        </Error>
      )}
    </Form>
  )
}
