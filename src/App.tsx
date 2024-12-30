import { Route, Routes } from "react-router";
import { MainLayout, MainLayout2 } from "./share/layouts/Main";
import { AdminLayout } from "./share/layouts/Admin";
import { ProductDetail } from "./pages/ProductDetail";
import { Login } from "./features/Auth/Login";
import { Home } from "./pages/Home";
import { Dashboard } from "./features/Admin/DashBoard";
import { ProductList } from "./pages/Admin/Product";
import { Create } from "./pages/Admin/Product/Create/Create";
import { Update } from "./pages/Admin/Product/Update/Update";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<MainLayout2 />}>
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
        <Route path="products">
          <Route index element={<ProductList />} />
          <Route path="new" element={<Create />} />
          <Route path=":id" element={<Update />} />
        </Route>
        <Route path="new-feeds" element={<h1>Coming soon</h1>} />
        <Route path="settings" element={<h1>Coming soon</h1>} />
      </Route>
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
