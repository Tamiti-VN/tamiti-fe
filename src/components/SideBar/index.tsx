import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { logout } from '../../apis/user';
import { useDispatch } from 'react-redux';
import { logOutSuccess } from '../../redux/auth/AuthSlice';
import './style.css';
import { sideBarData } from './sideBarData';

export const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const LogOutHandler = async () => {
    try {
      await logout();
      dispatch(logOutSuccess());
      navigate('/auth/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        {sideBarData.map((data, index) => (
          <Link
            to={data.path}
            className={location.pathname === data.path ? 'active' : ''}
            key={index}>
            {data.name}
          </Link>
        ))}
      </div>
      <Button className="logout-btn btn-error" type="button" onClick={LogOutHandler}>
        Logout
      </Button>
    </div>
  );
};
