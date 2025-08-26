import { z } from 'zod';

export const userSchema = z.object({
  id_user: z.uuid(),
  email: z.email("Correo invalido")
})

export type User = z.infer<typeof userSchema>