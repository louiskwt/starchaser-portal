import {collection, getDocs, getFirestore} from "firebase/firestore";
import {createContext, useContext, useEffect, useState} from "react";
import {firebase} from "../Firebase";
import {useAuth} from "./useAuth";

const NotesContext = createContext();

export const NotesProvider = ({children}) => {
  const [notes, setNotes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {user} = useAuth();

  const db = getFirestore(firebase);

  useEffect(() => {
    if (user) {
      const fetchNotes = async () => {
        try {
          const notesCollection = collection(db, "notes"); // need to think about pagination when it scale
          const notesSnapshot = await getDocs(notesCollection);
          const notesList = notesSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log(notesList);
          setNotes(notesList);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchNotes();
    }
  }, [user]);

  return <NotesContext.Provider value={{notes, setNotes, loading, error}}>{children}</NotesContext.Provider>;
};

export const useNotes = () => {
  return useContext(NotesContext);
};
