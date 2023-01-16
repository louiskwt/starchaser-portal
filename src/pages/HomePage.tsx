import DashboardLayout from "../components/DashboardLayout";
import Home from "../components/Home";
import { useFirestore } from "../context/FirestoreContext";

const HomePage = () => {
  const { metric, studentData } = useFirestore();
  const { daysToDSE } = metric;
  const { points } = studentData;
  return (
    <DashboardLayout
      children={<Home daysToDSE={daysToDSE} points={points} />}
    />
  );
};

export default HomePage;
