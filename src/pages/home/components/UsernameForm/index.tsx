import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

import { Form } from './styles'

export function UsernameForm() {
  return (
    <Form as={'form'}>
      <TextInput prefix="ignite.com/" size="md" placeholder="username" />
      <Button type="submit" size={'md'}>
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
