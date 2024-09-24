import {Navigate, useOutlet} from "react-router-dom";
import {Navbar} from "../components";
import {useAuth} from "../hooks";

export const ProtectedPageLayout = () => {
  const {user} = useAuth();
  const outlet = useOutlet();

  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Navbar />
      {outlet}
    </div>
  );
};
