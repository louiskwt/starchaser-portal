import {Navigate} from "react-router-dom";
import {useAuth} from "../hooks";

export const ProtectedRoutes = (children) => {
  const {user} = useAuth();

  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};
