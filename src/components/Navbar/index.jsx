import {Link} from "react-router-dom";
import {useAuth, useNotes} from "../../hooks";
import {getGravatarURL} from "../../utils";

export const Navbar = () => {
  const {user, loading} = useAuth();
  const {toggleDrawer} = useNotes();

  const menu = () => {
    if (loading)
      return (
        <div className="flex items-center justify-center">
          <div className="loader">
            <span className="loading loading-spinner loading-sm"></span>
          </div>
        </div>
      );

    return user ? (
      <>
        {" "}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button" onClick={() => toggleDrawer()}>
          <i className="fa-solid fa-book fa-2x"></i>
        </label>
        <div className="btn avatar">
          <div className="w-12 ml-1 rounded-2xl">
            <Link to="/profile">
              <img src={(user && user.photoURL) || getGravatarURL(user.email)} />
            </Link>
          </div>
        </div>
      </>
    ) : (
      <>
        <li className="text-xl btn btn-primary">
          <Link to="/login">Login</Link>
        </li>
      </>
    );
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to={"/"}>
          Starchaser Academy ⭐️
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">{menu()}</ul>
      </div>
    </div>
  );
};
