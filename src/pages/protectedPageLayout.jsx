import {Navbar} from "../components";
import {useNotes} from "../hooks";

export const ProtectedPageLayout = ({children}) => {
  const {notes, loading} = useNotes();
  return (
    <>
      <Navbar />
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{children}</div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-8">
            <h1 className="text-xl mb-8">Notes</h1>
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
    </>
  );
};
