import { Link, useLocation, useNavigate } from "react-router";
import { Button } from "../../UI/Button";
import { logout } from "../../../old/apis/user";
import { useDispatch } from "react-redux";
import { logOutSuccess } from "../../../app/auth/AuthSlice";
import { sideBarData } from "./sideBarData";
import "./style.css";

export const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const LogOutHandler = async () => {
    try {
      await logout();
      dispatch(logOutSuccess());
      navigate("/auth/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        {sideBarData.map((data) => (
          <Link
            to={data.path}
            className={location.pathname.includes(data.path) ? "active" : ""}
            key={data.name}
          >
            {data.name}
          </Link>
        ))}
      </div>
      <Button
        className="logout-btn btn-error"
        type="button"
        onClick={LogOutHandler}
      >
        Logout
      </Button>
    </div>
  );
};
