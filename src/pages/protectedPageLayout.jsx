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
      {children}
    </>
  );
};
