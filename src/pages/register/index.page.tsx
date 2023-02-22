import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, RegisterFormData } from './types'
import { Container, Form, Header, ErrorMessage } from './styles'

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const handleRegister = async (data: RegisterFormData) => {
    console.log(data)
  }
  return (
    <Container>
      <Header>
        <Heading as={'strong'}>Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep currentStep={1} size={4} />
      </Header>

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
    </Container>
  )
}
