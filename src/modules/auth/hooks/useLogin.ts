import { useForm } from "react-hook-form"
import { loginSchema, type Login } from "../schemas/authSchema"
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from "@tanstack/react-query";
import { login } from "../actions/authActions";

export const useLogin = () => {

  const form = useForm<Login>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const loginMutation = useMutation({
    mutationFn: async (data: Login) => {
      const response = await login(data);
      localStorage.setItem("token", response.token);
      return response;
    },
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (error) => {
      console.error(error)
    }
  })

  const onSubmit = (data: Login) => loginMutation.mutate(data)

  const onError = (error: unknown) => console.error(error)

  return {
    form,
    loginMutation,
    onSubmit,
    onError
  }
}
