import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { MainLayout } from '../layouts/main';

export const router = createBrowserRouter([
  { element: <MainLayout />, children: [{ path: '/', element: <Home /> }] },
  // Add more routes as needed
]);
