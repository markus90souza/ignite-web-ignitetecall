import { z } from 'zod'

export const usernameSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O username deve conter no minimo 3 caracteres' })
    .regex(/^([a-z\\\\-]+)$/i, {
      message: 'O username não pode conter caracteres especiais',
    })
    .transform((value) => value.toLowerCase()),
})

export type UsernameFormData = z.infer<typeof usernameSchema>
