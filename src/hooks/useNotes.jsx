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
  const [isOpen, setIsOpen] = useState(false);

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

  const handleLinkClick = () => {
    setIsOpen(false); // Close the drawer when a link is clicked
  };

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev); // Toggle the drawer open/close
  };

  return (
    <NotesContext.Provider value={{notes, setNotes, loading, error, toggleDrawer}}>
      {children}
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={isOpen} readOnly />
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay" onClick={() => handleLinkClick()}></label>

          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-8">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <Link className="text-xl mb-4" to="/notes" onClick={handleLinkClick}>
              Notes
            </Link>
            {loading ? (
              <span className="loading loading-spinner loading-lg"></span>
            ) : (
              notes.map((note) => {
                return (
                  <Link key={note.id} className="text-lg mb-4" to={`/notes/${note.id}`} onClick={() => handleLinkClick()}>
                    {note.title}
                  </Link>
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
