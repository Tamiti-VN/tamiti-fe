import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

import './style.css';
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
