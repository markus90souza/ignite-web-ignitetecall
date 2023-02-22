import { Heading, MultiStep, Text } from '@ignite-ui/react'
import { RegisterForm } from './components/RegisterForm'

import { Container, Header } from './styles'

export default function Register() {
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

      <RegisterForm />
    </Container>
  )
}
