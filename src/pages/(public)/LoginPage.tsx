import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { LogIn } from "lucide-react"

export const LoginPage = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <LogIn />
          <CardTitle>
            Iniciar sesión
          </CardTitle>
          <CardDescription>
            Ingrese sus credenciales para acceder a su cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <Input placeholder="correo@gmail.com" />
            <Input placeholder="*****" type="password"/>
            <Button>
              Iniciar sesión
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  )
}
