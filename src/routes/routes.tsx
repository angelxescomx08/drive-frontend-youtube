import { createBrowserRouter } from 'react-router';
import { LoginPage } from '../pages/(public)/LoginPage';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

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
      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ut ipsa fugiat id, amet nemo laborum explicabo optio quo, iure distinctio adipisci minus ratione laboriosam numquam accusantium. Impedit, laboriosam error.</p>
      </div>
    </PrivateRoute>
  }
]);