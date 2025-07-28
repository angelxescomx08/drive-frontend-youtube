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

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
  {
    path: "/about",
    element: <div>About</div>
  }
]);

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />,
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
