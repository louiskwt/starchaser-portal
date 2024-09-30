import {Navigate} from "react-router-dom";
import {useAuth, useNotes} from "../../hooks";

export const ProtectedRoute = ({element}) => {
  const {user, loading: loadingAuth} = useAuth();
  const {loading: loadingNote} = useNotes();

  if (loadingAuth || loadingNote) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </div>
    );
  }

  return user ? element : <Navigate to="/login" />;
};
