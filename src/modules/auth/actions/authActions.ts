import { api } from "@/lib/api";
import type { Login, Register } from "../schemas/authSchema";
import type { User } from "@/modules/users/schemas/usersSchema";
import { useAuthStore } from "../hooks/useAuthStore";

type LoginResponse = {
  message: string;
  token: string;
  user: User;
}

export async function login(loginData: Login) {
  const { data } = await api.post<LoginResponse>("/user/login", loginData);
  return data;
}

type RegisterResponse = {
  message: string;
  user: User;
}

export async function register(registerData: Register) {
  const { data } = await api.post<RegisterResponse>("/user", registerData);
  return data;
}

type GetMeResponse = {
  message: string;
  user: User;
}

export async function getMe() {
  const { data } = await api.get<GetMeResponse>("/user/me");
  return data.user;
}

export function logOut() {
  localStorage.removeItem("token");
  useAuthStore.getState().setUser(null);
}