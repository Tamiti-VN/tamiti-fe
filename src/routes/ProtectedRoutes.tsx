import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";

import type { RootState } from "../redux/store";

export const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const location = useLocation();
  return isAuth ? (
    children
  ) : (
    <Navigate to="/admin/login" state={{ from: location }} replace />
  );
};
