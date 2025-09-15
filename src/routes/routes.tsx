import { createBrowserRouter } from 'react-router';
import { LoginPage } from '../pages/(public)/LoginPage';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { DashboardPage } from '@/pages/(private)/Dashboard';
import { RegisterPage } from '@/pages/(public)/RegisterPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute>
      <LoginPage/>
    </PublicRoute>,
  },
  {
    path: "/dashboard/:id_folder",
    element: <PrivateRoute>
      <DashboardPage />
    </PrivateRoute>
  },
  {
    path: "/register",
    element: <PublicRoute>
      <RegisterPage />
    </PublicRoute>
  }
]);