import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { ProductDetail } from '../pages/ProductDetail';
import { MainLayout } from '../layouts/main';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
  { path: '/products/:productId', element: <ProductDetail /> },

  // Add more routes as needed
]);
