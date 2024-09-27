import {Navigate} from "react-router-dom";
import {useAuth} from "../../hooks";

export const ProtectedRoute = ({element}) => {
  const {user} = useAuth();

  console.log(user);

  return user ? element : <Navigate to="/login" />;
};
