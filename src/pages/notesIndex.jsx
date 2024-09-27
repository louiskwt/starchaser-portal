import {Navigate, Outlet, useLocation, useNavigate} from "react-router-dom";
import {Navbar} from "../components";
import {useAuth, useNotes} from "../hooks";

export const NotesIndexPage = () => {
  const {user} = useAuth();
  const {notes} = useNotes();
  const location = useLocation();
  const navigate = useNavigate();
  const isNestedRoute = location.pathname.includes("/notes/");

  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Navbar />
      {isNestedRoute ? (
        <Outlet />
      ) : (
        <>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Notes</h1>
            {notes.map((note, index) => (
              <div
                key={note.id}
                className="card bg-base-100 w-80 shadow-xl mx-auto cursor-pointer"
                onClick={() => {
                  navigate(`${note.id}`);
                }}>
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
        </>
      )}
    </>
  );
};
