import { Outlet } from "react-router";
import { Footer } from "../../Components/Footer";

import "./style.css";
import { SideBar } from "../../Components/SideBar";
export function AdminLayout() {
  return (
    <div className="admin-layout">
      <div className="admin-layout__sidebar ">
        <SideBar />
      </div>
      <div className="admin-layout__outlet">
        <Outlet />
      </div>
      <div className="admin-layout__footer">
        <Footer />
      </div>
    </div>
  );
}
