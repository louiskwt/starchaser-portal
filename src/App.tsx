import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PaymentPage from "./pages/PaymentPage";
import ProfileSetUpPage from "./pages/ProfileSetUpPage";
import ResoucePage from "./pages/ResoucePage";
import SignUpPage from "./pages/SignUpPage";
import TaskPage from "./pages/TaskPage";

function App(): JSX.Element {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="task" element={<TaskPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="resources" element={<ResoucePage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="set-profile" element={<ProfileSetUpPage />} />
      </Routes>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
