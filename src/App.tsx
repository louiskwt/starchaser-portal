import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import { FirestoreProvider } from "./context/FirestoreContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PaymentPage from "./pages/PaymentPage";
import ProfileSetUpPage from "./pages/ProfileSetUpPage";
import ResoucePage from "./pages/ResoucePage";
import ResouceContentPage from "./pages/ResourceContentPage";
import SignUpPage from "./pages/SignUpPage";
import TaskPage from "./pages/TaskPage";

function App(): JSX.Element {
  return (
    <AuthProvider>
      <FirestoreProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="task" element={<TaskPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="resources" element={<ResoucePage />} />
          <Route path="resources/:title" element={<ResouceContentPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="set-profile" element={<ProfileSetUpPage />} />
        </Routes>
      </FirestoreProvider>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
