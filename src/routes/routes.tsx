import { createBrowserRouter } from 'react-router';
import { LoginPage } from '../pages/(public)/LoginPage';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { DashboardPage } from '@/pages/(private)/Dashboard';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute>
      <LoginPage/>
    </PublicRoute>,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute>
      <DashboardPage />
    </PrivateRoute>
  }
]);