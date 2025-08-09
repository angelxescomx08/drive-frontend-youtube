import { api } from "@/lib/api";
import type { Login } from "../schemas/authSchema";
import type { User } from "@/modules/users/schemas/usersSchema";

type LoginResponse = {
  message: string;
  token: string;
  user: User;
}

export async function login(loginData: Login) {
  const { data } = await api.post<LoginResponse>("/user/login", loginData);
  return data;
}