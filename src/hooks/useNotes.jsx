import {collection, getDocs, getFirestore} from "firebase/firestore";
import {createContext, useContext, useEffect, useState} from "react";
import {firebase} from "../Firebase";

const NotesContext = createContext();

export const NotesProvider = ({children}) => {
  const [notes, setNotes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const db = getFirestore(firebase);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const notesCollection = collection(db, "notes"); // Replace 'notes' with your collection name
        const notesSnapshot = await getDocs(notesCollection);
        const notesList = notesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNotes(notesList);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  });

  return <NotesContext.Provider value={{notes, setNotes}}>{children}</NotesContext.Provider>;
};

export const useNotes = () => {
  return useContext(NotesContext);
};
