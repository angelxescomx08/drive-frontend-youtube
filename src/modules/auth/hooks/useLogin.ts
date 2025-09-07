import { useForm } from "react-hook-form"
import { loginSchema, type Login } from "../schemas/authSchema"
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from "@tanstack/react-query";
import { login } from "../actions/authActions";
import { useAuthStore } from "./useAuthStore";
import { toast } from "sonner";
import { showError } from "@/lib/showError";

export const useLogin = () => {

  const { setUser } = useAuthStore();

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
      setUser(response.user);

      return response;
    },
    onSuccess: (data) => {
      console.log(data)
      toast.success("Bienvenido");
    },
    onError: (error) => showError(error)
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
