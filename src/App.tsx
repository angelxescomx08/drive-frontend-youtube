import './App.css'
import {
  QueryClientProvider,
} from '@tanstack/react-query'
import { queryClient } from './lib/queryClient'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { LoginPage } from './pages/(public)/LoginPage';
import { useEffect } from 'react';
import { getMe } from './modules/auth/actions/authActions';
import { useAuthStore } from './modules/auth/hooks/useAuthStore';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
  {
    path: "/dashboard",
    element: <div>Dashboard</div>
  }
]);

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
    </QueryClientProvider>
  )
}

export default App
