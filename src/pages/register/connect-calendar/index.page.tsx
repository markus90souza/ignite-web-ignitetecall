import { Heading, MultiStep, Text } from '@ignite-ui/react'
import { ReactNode } from 'react'

import { Container, Header } from './styles'

interface ConnectCalendarProps {
  children: ReactNode
}

export default function ConnectCalendar({ children }: ConnectCalendarProps) {
  return (
    <Container>
      <Header>
        <Heading as={'strong'}>Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep currentStep={2} size={4} />
      </Header>
    </Container>
  )
}
