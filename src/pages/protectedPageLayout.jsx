import {Navigate} from "react-router-dom";
import {Navbar} from "../components";
import {useAuth} from "../hooks";

export const ProtectedPageLayout = ({children}) => {
  const {user} = useAuth();

  console.log("check user", user);

  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar />
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{children}</div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};