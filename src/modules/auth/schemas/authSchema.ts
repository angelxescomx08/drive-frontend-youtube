import { userSchema } from '@/modules/users/schemas/usersSchema';
import { z } from 'zod';

export const loginSchema = userSchema.omit({
  id_user: true
}).extend({
  password: z.string().min(1, "La contraseña es obligatoria")
})

export type Login = z.infer<typeof loginSchema>