import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      setUser(user);
    }
  }, []);

  return (
    <div className="container w-100 mx-auto text-center p-8">
      <h1 className="text-3xl font-bold ">Hello world!</h1>
    </div>
  );
};

export default Dashboard;
