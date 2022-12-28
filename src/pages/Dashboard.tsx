import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  if (!user) {
    navigate("/login");
  }
  return (
    <div className="container w-100 mx-auto text-center p-8">
      <h1 className="text-3xl font-bold ">Hello world!</h1>
    </div>
  );
};

export default Dashboard;
