import {
  collection,
  doc,
  DocumentData,
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

export type ReourcesType = "reading" | "writing" | "listening" | "speaking";

export interface IResourceDoc {
  path: string;
  text: string;
  type: ReourcesType;
}

export interface IResourceData {
  reading: IResourceDoc[];
  writing: IResourceDoc[];
  listening: IResourceDoc[];
  speaking: IResourceDoc[];
}

export type ResourceDataKeys = keyof IResourceData;

export interface FirestoreContextState {
  metric: IMetric;
  studentData: IStudentData;
  fetchTasks: (userId: string) => void;
  resources: IResourceData;
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

  const [resources, setResources] = useState<IResourceData>({
    reading: [],
    writing: [],
    listening: [],
    speaking: [],
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

  function getResourceData(doc: DocumentData) {
    const { path, text, type } = doc.data();
    return {
      path,
      text,
      type,
    };
  }

  async function fetchResources() {
    if (!user?.uid) return;

    const resourceRef = collection(db, "resources");
    const readingQuery = query(resourceRef, where("type", "==", "reading"));
    const listeningQuery = query(resourceRef, where("type", "==", "listening"));

    const readingSnap = await getDocs(readingQuery);
    const listeningSnap = await getDocs(listeningQuery);

    const readingData = readingSnap.docs.map((doc) => getResourceData(doc));
    const listeningData = listeningSnap.docs.map((doc) => getResourceData(doc));

    setResources({
      ...resources,
      reading: readingData,
      listening: listeningData,
    });
  }

  useEffect(() => {
    fetchMetric();
    fetchStudentData();
    fetchTasks();
    fetchResources();
  }, [user]);

  const values = { metric, studentData, fetchTasks, resources };
  return (
    <FirestoreContext.Provider value={values}>
      {children}
    </FirestoreContext.Provider>
  );
};
