import { z } from 'zod'

export const registerSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O username deve conter no minimo 3 caracteres' })
    .regex(/^([a-z\\\\-]+)$/i, {
      message: 'O username não pode conter caracteres especiais',
    })
    .transform((value) => value.toLowerCase()),

  name: z
    .string()
    .min(3, { message: 'O nome deve conter no minimo 3 caracteres' }),
})

export type RegisterFormData = z.infer<typeof registerSchema>
