import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App(): JSX.Element {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
