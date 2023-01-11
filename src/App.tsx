import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfileSetUpPage from "./pages/ProfileSetUpPage";
import SignUpPage from "./pages/SignUpPage";
import TaskPage from "./pages/TaskPage";

function App(): JSX.Element {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/task" element={<TaskPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="set-profile" element={<ProfileSetUpPage />} />
      </Routes>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
