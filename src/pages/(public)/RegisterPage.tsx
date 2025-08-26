import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRegister } from "@/modules/auth/hooks/useRegister"
import { LogIn } from "lucide-react"
import { Link } from "react-router"

export const RegisterPage = () => {

  const { form, registerMutation, onSubmit, onError } = useRegister()

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="space-y-3 text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-2">
            <LogIn className="text-white w-8 h-8" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            Registrate
          </CardTitle>
          <CardDescription className="text-gray-600">
            Ingresa datos necesarios para crear cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit,onError)}>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo electrónico</FormLabel>
                      <FormControl>
                        <Input placeholder="prueba@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
              <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña</FormLabel>
                      <FormControl>
                        <Input placeholder="*****" type="password" {...field}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
              </div>

              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="repeatPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Repite tu contraseña</FormLabel>
                      <FormControl>
                        <Input placeholder="*****" type="password" {...field}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg transition-all duration-200 hover:scale-[1.02] disabled:scale-100 disabled:opacity-70"
                disabled={registerMutation.isPending}
              >
                {
                  registerMutation.isPending ? "Cargando..." : "Registrase"
                }
              </Button>

              <div className='text-center text-sm text-gray-600'>
                ¿Ya tenías una cuenta?{' '}
                <Link
                  to='/'
                  className='text-blue-600 hover:text-blue-800 font-medium transition-colors'
                >
                  Inicia sesión aquí
                </Link>
              </div>

            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
