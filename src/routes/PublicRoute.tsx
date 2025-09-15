import { useAuthStore } from "@/modules/auth/hooks/useAuthStore"
import type { ReactNode } from "react"
import { Navigate, useLocation } from "react-router"

type Props = {
  children: ReactNode;
}

export function PublicRoute({ children }: Props){
  const { user } = useAuthStore()
  const location = useLocation()

  if(user) {
    const from = location.state?.from?.pathname;
    return <Navigate to={from || "/dashboard/root"} replace />
  }

  return children
}