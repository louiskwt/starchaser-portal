import {Navigate} from "react-router-dom";
import {useAuth, useNotes} from "../../hooks";
import {Spinner} from "../Spinner";

export const ProtectedRoute = ({element}) => {
  const {user, loading: loadingAuth} = useAuth();
  const {loading: loadingNote} = useNotes();

  if (loadingAuth || loadingNote) {
    return <Spinner />;
  }

  return user ? element : <Navigate to="/login" />;
};
