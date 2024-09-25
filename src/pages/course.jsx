import {useNavigate} from "react-router-dom";
import {Dashboard} from "../components";
import {useAuth} from "../hooks";
import {ProtectedPageLayout} from "./protectedPageLayout";

export const CoursePage = () => {
  const {user} = useAuth();
  const navigate = useNavigate();
  if (!user) {
    return navigate("/login");
  }
  return (
    <ProtectedPageLayout>
      <Dashboard />
    </ProtectedPageLayout>
  );
};
