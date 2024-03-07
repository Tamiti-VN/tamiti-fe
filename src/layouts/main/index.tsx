import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Carousel } from '../../components/Carousel';
import './style.css';
export function MainLayout() {
  return (
    <div className="main-layout">
      <div className="main-layout__navbar ">
        <Navbar />
      </div>
      <div className="main-layout__content">
        <div className="main-layout__carousel">
          <Carousel />
        </div>
        <div className="main-layout__outlet">
          <Outlet />
        </div>
      </div>
      <div className="main-layout__footer">
        <Footer />
      </div>
    </div>
  );
}
