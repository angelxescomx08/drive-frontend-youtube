import { useAuthStore } from "@/modules/auth/hooks/useAuthStore"
import type { ReactNode } from "react"
import { Navigate, useLocation } from "react-router"

type Props = {
  children: ReactNode;
}

export function PrivateRoute({ children }: Props){
  const { user } = useAuthStore()
  const location = useLocation()

  if(!user) return <Navigate to={"/"} state={{
    from: location
  }} replace />

  return children
}