import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks";

export const Navbar = () => {
  const {user, logout} = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/");
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">DSE Starchaser ⭐️</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {user ? (
            <li className="text-xl btn btn-ghost" onClick={() => handleLogout()}>
              Logout
            </li>
          ) : (
            <li className="text-xl btn btn-primary">
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
