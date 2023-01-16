import { doc, getDoc } from "firebase/firestore";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { db } from "../config/config";

export interface FirestoreContextProps {
  children?: ReactNode;
}

interface IMetric {
  daysToDSE: number;
}

export interface FirestoreContextState {
  metric: IMetric;
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
  const [metric, setMetric] = useState<IMetric>({
    daysToDSE: 0,
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

  useEffect(() => {
    fetchMetric();
  }, []);

  const values = { metric };
  return (
    <FirestoreContext.Provider value={values}>
      {children}
    </FirestoreContext.Provider>
  );
};
