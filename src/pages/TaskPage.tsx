import { useContext, useEffect } from "react";
import DashboardLayout from "../components/DashboardLayout";
import Task from "../components/Task";
import { AuthContext } from "../context/AuthContext";
import { FirestoreContext } from "../context/FirestoreContext";

const TaskPage = () => {
  const { fetchTasks, studentData } = useContext(FirestoreContext);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetchTasks(user?.uid as string);
  }, []);

  const { tasks } = studentData;
  return <DashboardLayout children={<Task tasks={tasks} />} />;
};

export default TaskPage;
