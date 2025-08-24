import './App.css'
import {
  QueryClientProvider,
} from '@tanstack/react-query'
import { queryClient } from './lib/queryClient'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  RouterProvider,
} from "react-router";
import { useEffect } from 'react';
import { getMe } from './modules/auth/actions/authActions';
import { useAuthStore } from './modules/auth/hooks/useAuthStore';
import { router } from './routes/routes';
import { Toaster } from "@/components/ui/sonner"

function App() {

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token){
      getMe()
        .then(user=>{
          useAuthStore.getState().setUser(user);
        })
        .catch(_error=>{
          useAuthStore.getState().setUser(null);
          console.error(_error)
        })
    }
  },[])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />,
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
