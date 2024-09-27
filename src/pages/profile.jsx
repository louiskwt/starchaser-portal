import {Navigate} from "react-router-dom";
import {Dashboard, Navbar} from "../components";
import {useAuth} from "../hooks";

export const ProfilePage = () => {
  const {user} = useAuth();

  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
};
