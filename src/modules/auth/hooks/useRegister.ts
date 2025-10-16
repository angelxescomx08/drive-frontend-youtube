import { useForm } from "react-hook-form"
import { registerSchema, type Register } from "../schemas/authSchema"
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from "@tanstack/react-query";
import { register } from "../actions/authActions";
import { toast } from "sonner";

export const useRegister = () => {

  const form = useForm<Register>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: ""
    }
  })

  const registerMutation = useMutation({
    mutationFn: async (data: Register) => {
      const response = await register(data);

      return response;
    },
  })

  const onSubmit = (data: Register) => registerMutation.mutate(data)

  const onError = () => toast.error("Error en el formulario")

  return {
    form,
    registerMutation,
    onSubmit,
    onError
  }
}
