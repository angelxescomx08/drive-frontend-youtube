import { Button } from "@/components/ui/button";
import { logOut } from "@/modules/auth/actions/authActions";

export function DashboardPage(){
  return (
    <div>
      <Button
        onClick={logOut}
      >Cerrar sesión</Button>
    </div>
  )
}