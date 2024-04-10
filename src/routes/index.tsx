import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { ProductDetail } from '../pages/ProductDetail';
import { MainLayout } from '../layouts/Main';
import { Login } from '../pages/Login';
import { Admin } from '../pages/Admin';
import { AdminLayout } from '../layouts/Admin';
import { MainLayout2 } from '../layouts/Main/noCarousel';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
  {
    element: <MainLayout2 />,
    children: [{ path: '/products/:productId', element: <ProductDetail /> }],
  },

  { path: '/auth/login', element: <Login /> },

  {
    element: <AdminLayout />,
    children: [{ path: '/admin', element: <Admin /> }],
  },
  // Add more routes as needed
]);
