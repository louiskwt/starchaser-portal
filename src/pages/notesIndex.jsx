import {Navigate} from "react-router-dom";
import {Navbar} from "../components";
import {useAuth, useNotes} from "../hooks";

export const NotesIndexPage = () => {
  const {user} = useAuth();
  const {notes} = useNotes();

  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Notes</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-6xl mt-4">
          {notes.map((note, index) => (
            <div key={note.id} className="card bg-base-100 w-80 shadow-xl mx-auto">
              <figure>
                <img src={note.cover} alt="Cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {note.title}
                  {index === 0 && <div className="badge badge-secondary">NEW</div>}
                </h2>
                <p>{note.desc}</p>
                <div className="card-actions justify-end">
                  {note.categories.map((c, index) => (
                    <div key={index} className="badge badge-outline">
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
