import {collection, getDocs, getFirestore} from "firebase/firestore";
import {createContext, useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
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

  return (
    <NotesContext.Provider value={{notes, setNotes, loading, error}}>
      {children}
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{children}</div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-8">
            <Link className="text-xl mb-4" to="/notes">
              Notes
            </Link>
            {loading ? (
              <span className="loading loading-spinner loading-lg"></span>
            ) : (
              notes.map((note) => {
                return (
                  <li key={note.id} className="text-lg mb-4">
                    <a>{note.title}</a>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  return useContext(NotesContext);
};
