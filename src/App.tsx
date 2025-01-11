import { Route, Routes } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayout";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { ProductDetail } from "./pages/ProductDetail";

import { Dashboard } from "./pages/Admin/Dashboard";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/products/:id" element={<ProductDetail />} />
      </Route>
      <Route path="auth">
        <Route path="login" element={<Login />} />
      </Route>

      {/* <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      > */}
      <Route path="admin" element={<AdminLayout />}>
        <Route path="dashboards" element={<Dashboard />} />
        <Route path="products" />
        {/* <Route index element={<ProductList />} />
          <Route path="new" element={<Create />} />
          <Route path=":id" element={<Update />} /> */}

        <Route path="new-feeds" element={<h1>Coming soon</h1>} />
        <Route path="settings" element={<h1>Coming soon</h1>} />
      </Route>
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
