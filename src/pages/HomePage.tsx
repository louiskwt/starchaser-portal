import DashboardLayout from "../components/DashboardLayout";
import Home from "../components/Home";
import { useFirestore } from "../context/FirestoreContext";

const HomePage = () => {
  const { metric } = useFirestore();
  const { daysToDSE } = metric;
  return <DashboardLayout children={<Home daysToDSE={daysToDSE} />} />;
};

export default HomePage;
