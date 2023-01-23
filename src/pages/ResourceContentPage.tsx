import { useParams } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import ResourceContent from "../components/ResourceContent";

const ResouceContentPage = () => {
  const { title } = useParams();

  return (
    <DashboardLayout children={<ResourceContent title={title || " "} />} />
  );
};

export default ResouceContentPage;
