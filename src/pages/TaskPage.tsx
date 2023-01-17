import { useContext } from "react";
import DashboardLayout from "../components/DashboardLayout";
import Task from "../components/Task";
import { FirestoreContext } from "../context/FirestoreContext";

const TaskPage = () => {
  const { studentData } = useContext(FirestoreContext);

  const { taskData } = studentData;
  const { tasks, subheading } = taskData;

  return (
    <DashboardLayout
      children={<Task tasks={tasks} subheading={subheading} />}
    />
  );
};

export default TaskPage;
