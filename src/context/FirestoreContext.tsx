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

export type ReourcesType =
  | "reading"
  | "writing"
  | "listening"
  | "speaking"
  | "grammar"
  | "";

export interface IResourceDoc {
  path: string;
  text: string;
  type: ReourcesType;
  vidUrl: string;
  content: string;
}

export interface IResourceData {
  reading: IResourceDoc[];
  writing: IResourceDoc[];
  listening: IResourceDoc[];
  speaking: IResourceDoc[];
  grammar: IResourceDoc[];
}

export type ResourceDataKeys = keyof IResourceData;

export interface FirestoreContextState {
  metric: IMetric;
  studentData: IStudentData;
  fetchTasks: (userId: string) => void;
  resources: IResourceData;
  fetchSpecificResource: (title: string) => Promise<any>;
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
    grammar: [],
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
    const { path, text, type, vidUrl, content } = doc.data();
    return {
      path,
      text,
      type,
      vidUrl,
      content,
    };
  }

  async function fetchResources() {
    if (!user?.uid) return;

    const resourceRef = collection(db, "resources");
    const resourceQuery = query(
      resourceRef,
      where("type", "in", [
        "reading",
        "writing",
        "listening",
        "speaking",
        "grammar",
      ])
    );
    const resourceSnap = await getDocs(resourceQuery);

    const readingData = resourceSnap.docs
      .map((doc) => getResourceData(doc))
      .filter((doc) => doc.type === "reading");
    const writingData = resourceSnap.docs
      .map((doc) => getResourceData(doc))
      .filter((doc) => doc.type === "writing");
    const listeningData = resourceSnap.docs
      .map((doc) => getResourceData(doc))
      .filter((doc) => doc.type === "listening");
    const speakingData = resourceSnap.docs
      .map((doc) => getResourceData(doc))
      .filter((doc) => doc.type === "speaking");
    const grammarData = resourceSnap.docs
      .map((doc) => getResourceData(doc))
      .filter((doc) => doc.type === "grammar");

    setResources({
      grammar: grammarData,
      speaking: speakingData,
      reading: readingData,
      writing: writingData,
      listening: listeningData,
    });
  }

  async function fetchSpecificResource(title: string) {
    if (!user?.uid) return;

    const resourceRef = collection(db, "resources");
    const resourceQuery = query(resourceRef, where("path", "==", title));
    const resourceSnap = await getDocs(resourceQuery);
    const resourceData = resourceSnap.docs.map((doc) => getResourceData(doc));
    return resourceData;
  }

  useEffect(() => {
    fetchMetric();
    fetchStudentData();
    fetchTasks();
    fetchResources();
  }, [user]);

  const values = {
    metric,
    studentData,
    fetchTasks,
    resources,
    fetchSpecificResource,
  };
  return (
    <FirestoreContext.Provider value={values}>
      {children}
    </FirestoreContext.Provider>
  );
};
