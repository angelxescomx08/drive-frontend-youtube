import { userSchema } from '@/modules/users/schemas/usersSchema';
import { z } from 'zod';

export const loginSchema = userSchema.omit({
  id_user: true
}).extend({
  password: z.string().min(1, "La contraseña es obligatoria")
})

export const registerSchema = loginSchema.extend({
  repeatPassword: z.string().min(1, "La contraseña es obligatoria")
}).refine(data => data.password === data.repeatPassword, {
  error: "Las contraseñas no coinciden",
  path: ["repeatPassword"]
})

export type Login = z.infer<typeof loginSchema>
export type Register = z.infer<typeof registerSchema>