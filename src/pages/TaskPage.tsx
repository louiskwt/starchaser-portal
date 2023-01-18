import DashboardLayout from "../components/DashboardLayout";
import Task from "../components/Task";

const TaskPage = () => {
  return <DashboardLayout children={<Task />} />;
};

export default TaskPage;
