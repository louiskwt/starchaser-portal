import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
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
    if (!user?.uid) return;
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
    if (!user?.uid) return;
    const docRef = doc(db, "members", user?.uid || "");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { taskData } = docSnap.data();
      setStudentData({
        ...studentData,
        taskData,
      });
    }
  }

  async function fetchResources() {
    if (!user?.uid) return;

    const resourceRef = collection(db, "resources");
    const readingQuery = query(resourceRef, where("type", "==", "reading"));
    const listeningQuery = query(resourceRef, where("type", "==", "listening"));

    const readingSnap = await getDocs(readingQuery);
    const listeningSnap = await getDocs(listeningQuery);

    const readingData = readingSnap.docs.map((doc) => doc.data());
    const listeningData = listeningSnap.docs.map((doc) => doc.data());

    console.log({ readingData, listeningData });
  }

  useEffect(() => {
    fetchMetric();
    fetchStudentData();
    fetchTasks();
    fetchResources();
  }, [user]);

  const values = { metric, studentData, fetchTasks };
  return (
    <FirestoreContext.Provider value={values}>
      {children}
    </FirestoreContext.Provider>
  );
};
