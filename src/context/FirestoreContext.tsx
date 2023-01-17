import { doc, getDoc } from "firebase/firestore";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { db } from "../config/config";
import { ITask } from "../types";
import { useAuth } from "./AuthContext";

export interface FirestoreContextProps {
  children?: ReactNode;
}

interface IMetric {
  daysToDSE: number;
}

interface taskData {
  subheading: string;
  tasks: ITask[];
}

interface IStudentData {
  points: number;
  taskData: taskData;
}

export interface FirestoreContextState {
  metric: IMetric;
  studentData: IStudentData;
  fetchTasks: (userId: string) => void;
}

export const FirestoreContext = createContext<FirestoreContextState>(
  {} as FirestoreContextState
);

export function useFirestore(): FirestoreContextState {
  return useContext(FirestoreContext);
}

export const FirestoreProvider = ({
  children,
}: FirestoreContextProps): JSX.Element => {
  const { user } = useAuth();

  const [metric, setMetric] = useState<IMetric>({
    daysToDSE: 0,
  });
  const [studentData, setStudentData] = useState<IStudentData>({
    points: 0,
    taskData: {
      subheading: "",
      tasks: [],
    },
  });

  async function fetchMetric() {
    const docRef = doc(db, "metric", "dseDate");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { nextDse } = docSnap.data();
      const today = new Date().getTime();
      const dseDate = nextDse.toMillis();
      const diffTime = Math.abs(dseDate - today);
      const diffDays = diffTime / (1000 * 60 * 60 * 24);

      setMetric({
        daysToDSE: Math.ceil(diffDays),
      });
    }
  }

  async function fetchStudentData() {
    const docRef = doc(db, "members", user?.uid || "");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { points } = docSnap.data();
      setStudentData({
        ...studentData,
        points,
      });
    }
  }

  async function fetchTasks() {
    const docRef = doc(db, "members", user?.uid || "");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { taskData } = docSnap.data();
      console.log("hello", taskData);
      setStudentData({
        ...studentData,
        taskData,
      });
    }
  }

  useEffect(() => {
    fetchMetric();
    fetchStudentData();
    fetchTasks();
  }, [user]);

  const values = { metric, studentData, fetchTasks };
  return (
    <FirestoreContext.Provider value={values}>
      {children}
    </FirestoreContext.Provider>
  );
};
