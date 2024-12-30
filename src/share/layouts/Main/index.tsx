import { Outlet } from "react-router";
import { Navbar } from "../../Components/Navbar";
import { Footer } from "../../Components/Footer";
import { Carousel } from "../../Components/Carousel";
import "./style.css";
export function MainLayout() {
  return (
    <div className="main-layout">
      <div className="main-layout__navbar ">
        <Navbar />
      </div>
      <div className="main-layout__content ">
        <div className="main-layout__carousel ">
          <Carousel />
        </div>
        <div className="main-layout__outlet container-fluid">
          <Outlet />
        </div>
      </div>
      <div className="main-layout__footer">
        <Footer />
      </div>
    </div>
  );
}

export function MainLayout2() {
  return (
    <div className="main-layout">
      <div className="main-layout__navbar ">
        <Navbar />
      </div>
      <div className="main-layout__content ">
        <div className="main-layout__outlet container-fluid">
          <Outlet />
        </div>
      </div>
      <div className="main-layout__footer">
        <Footer />
      </div>
    </div>
  );
}
