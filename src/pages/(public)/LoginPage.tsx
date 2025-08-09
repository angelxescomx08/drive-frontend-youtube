import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { LogIn } from "lucide-react"

export const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="space-y-3 text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-2">
            <LogIn className="text-white w-8 h-8" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            Iniciar sesión
          </CardTitle>
          <CardDescription className="text-gray-600">
            Ingrese sus credenciales para acceder a su cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Input placeholder="correo@gmail.com" />
            </div>
            <div className="space-y-2">
              <Input placeholder="*****" type="password"/>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg transition-all duration-200 hover:scale-[1.02] disabled:scale-100 disabled:opacity-70">
              Iniciar sesión
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  )
}
