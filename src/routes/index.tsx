import { createBrowserRouter } from 'react-router-dom';
import { MainLayout, MainLayout2 } from '../layouts/Main';
import { AdminLayout } from '../layouts/Admin';
import { ProtectedRoute } from './ProtectedRoutes';
import { Dashboard } from '../pages/Admin/DashBoard';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { ProductDetail } from '../pages/ProductDetail';

import { Create, Update, ProductList } from '../pages/Admin/Product';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
  {
    element: <MainLayout2 />,
    children: [{ path: '/products/:id', element: <ProductDetail /> }],
  },
  { path: '/admin/login', element: <Login /> },
  {
    path: '/admin',
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: 'dashboards', element: <Dashboard /> },
      {
        path: 'products',
        children: [
          { path: '', element: <ProductList /> },
          { path: 'new', element: <Create /> },
          { path: ':id', element: <Update /> },
        ],
      },
      { path: 'new-feeds', element: <h1>Coming soon</h1> },
      { path: 'settings', element: <h1>Coming soon</h1> },
    ],
  },
  // Add more routes as needed
]);
